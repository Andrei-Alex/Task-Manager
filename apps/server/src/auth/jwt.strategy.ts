import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
config();
const configService = new ConfigService();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET_KEY'),
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}
