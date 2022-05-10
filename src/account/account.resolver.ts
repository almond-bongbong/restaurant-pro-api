import { Mutation, Query, Resolver } from '@nestjs/graphql';
import AccountDTO from './dto/account.dto';
import { HelloAccountDTO } from './dto/hello-account.dto';

@Resolver(() => AccountDTO)
export class AccountResolver {
  @Query(() => HelloAccountDTO)
  async hello() {
    const account = new HelloAccountDTO();
    account.name = 'mike';
    return account;
  }

  @Mutation()
  async createAccount() {
    return null;
  }
}
