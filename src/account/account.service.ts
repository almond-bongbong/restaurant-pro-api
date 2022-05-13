import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AlreadyExistEmailException,
  AlreadyExistNicknameException,
} from './account.exception';
import { CreateAccountInput } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createAccount(createAccountInput: CreateAccountInput) {
    const existAccount = await this.prisma.account.findFirst({
      where: {
        OR: [
          { email: createAccountInput.email },
          { nickname: createAccountInput.nickname },
        ],
      },
    });

    if (existAccount?.email === createAccountInput.email) {
      throw new AlreadyExistEmailException();
    }
    if (existAccount?.nickname === createAccountInput.nickname) {
      throw new AlreadyExistNicknameException();
    }

    const hashedPassword = await bcrypt.hash(createAccountInput.password, 10);
    return this.prisma.account.create({
      data: {
        email: createAccountInput.email,
        password: hashedPassword,
        nickname: createAccountInput.nickname,
        birth: createAccountInput.birth,
        gender: createAccountInput.gender,
      },
    });
  }
}
