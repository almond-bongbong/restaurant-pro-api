import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_CONFIG_OPTIONS } from './jwt.constant';
import { JwtModuleOptions, JwtPayload } from './jwt.interface';

@Injectable()
export class JwtService {
  constructor(
    @Inject(JWT_CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}

  sign(userId: string): string {
    return jwt.sign({ id: userId }, this.options.privateKey, {
      expiresIn: '30d',
    });
  }

  verify(token: string): JwtPayload {
    return jwt.verify(token, this.options.privateKey) as JwtPayload;
  }
}
