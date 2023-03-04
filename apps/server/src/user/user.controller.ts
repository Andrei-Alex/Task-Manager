import {
  Controller,
  Get,
  Body,
  Request,
  Post,
  UseGuards,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './user.DTO';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { EncryptionService } from '../auth/encryption.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
@Controller('auth')
export class UserController {
  constructor(
    private authService: AuthService,
    private encriptionService: EncryptionService,
    private userService: UserService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Post('/register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.create(
      createUserDto.full_name,
      createUserDto.password,
      createUserDto.email,
    );
    const user = new User();

    user.full_name = createUserDto.full_name;
    user.email = createUserDto.email;
    user.password = await this.encriptionService.hashPassword(
      createUserDto.password,
    );

    await this.userRepository.save(user);
    return {
      email: user.email,
      full_name: user.full_name,
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:full_name?')
  getUsers(@Request() req, @Param('full_name') full_name: string) {
    if (!full_name) {
      return this.userService.findAll();
    } else {
      return this.userService.findByName(full_name);
    }
  }
}
