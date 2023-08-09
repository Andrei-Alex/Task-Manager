import {
  Controller,
  Get,
  Body,
  Request,
  Post,
  UseGuards,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto } from './dots/user.DTO';
import { UserService } from './user.service';
import { User } from './User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { EncryptionService } from '../auth/encryption.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
  ApiBody,
} from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class UserController {
  constructor(
    private authService: AuthService,
    private encryptionService: EncryptionService,
    private userService: UserService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  @ApiCreatedResponse({ description: 'Created Successfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiOperation({ summary: 'Register new user' })
  @ApiTags('Auth')
  @ApiResponse({
    status: 201,
    description: 'User created',
    type: User,
  })
  @Post('/register')
  async createUser(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    await this.userService.create(
      createUserDto.full_name,
      createUserDto.password,
      createUserDto.email,
    );
    const user = new User();
    user.full_name = createUserDto.full_name;
    user.password = await this.encryptionService.hashPassword(
      createUserDto.password,
    );
    user.email = createUserDto.email;
    await this.userRepository.save(user);
    return {
      email: user.email,
      full_name: user.full_name,
    };
  }

  @ApiResponse({
    status: 201,
    description: 'Access token',
  })
  @ApiBody({
    description: 'Username (email), password',
    schema: {
      properties: {
        username: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiOperation({ summary: 'Login with username and password ' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @ApiOperation({ summary: 'Get user profile' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @ApiOperation({ summary: 'Get users by name' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('users/:full_name?')
  getUsers(@Request() req?) {
    if (!req?.full_name) {
      return this.userService.findAll();
    } else {
      return this.userService.findByName(req.full_name);
    }
  }
  @ApiOperation({ summary: 'Delete user by email' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete('/delete/:email')
  @HttpCode(HttpStatus.OK)
  async deleteUser(@Param('email') email: string) {
    if (!email) {
      throw new BadRequestException('Email parameter is missing');
    }
    await this.userService.deleteByMail(email);
  }
}
