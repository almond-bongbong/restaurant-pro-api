import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import AccountDTO from './dto/account.dto';
import { CreateAccountInput } from './dto/create-account.dto';
import { HelloAccountDTO } from './dto/hello-account.dto';

@Resolver(() => AccountDTO)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => HelloAccountDTO)
  async hello() {
    const account = new HelloAccountDTO();
    account.name = 'mike';
    return account;
  }

  @Mutation(() => AccountDTO)
  async createAccount(@Args('input') createAccountInput: CreateAccountInput) {
    return this.accountService.createAccount(createAccountInput);
  }
}
