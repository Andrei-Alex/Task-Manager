import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { User } from './User.entity';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import { EncryptionService } from '../auth/encryption.service';

@Module({
  imports: [
    /**
     * Imports
     */
    TypeOrmModule.forFeature([User]),
    PassportModule,
    /**
     * Configure the JwtModule to handle JWT token creation and validation.
     */
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET_KEY'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  /**
   * Controllers associated with the UserModule.
   */
  controllers: [UserController],
  /**
   * Providers for services used within the UserModule.
   */
  providers: [
    UserService,
    AuthService,
    EncryptionService,
    LocalStrategy,
    JwtStrategy,
  ],
  /**
   * Expose the UserService for potential use in other modules.
   */
  exports: [UserService],
})
export class UserModule {}
