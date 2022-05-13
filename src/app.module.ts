import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AccountModule } from './account/account.module';
import { JwtModule } from './jwt/jwt.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    AccountModule,
    JwtModule.forRoot({
      privateKey: process.env.JWT_PRIVATE_KEY,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
