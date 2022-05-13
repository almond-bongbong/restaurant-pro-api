import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  providers: [AccountResolver, AccountService, PrismaService],
  imports: [],
})
export class AccountModule {}
