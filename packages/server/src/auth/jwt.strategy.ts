import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
config();
const configService = new ConfigService();

/**
 * JWT authentication strategy based on PassportStrategy.
 * This strategy is used to authenticate users using JSON Web Tokens.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET_KEY'),
    });
  }

  /**
   * Custom method to validate the payload of the JWT token.
   *
   * @param payload - The payload of the JWT token.
   * @returns An object containing userId and email extracted from the payload.
   */
  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}
