import { Query, Resolver } from '@nestjs/graphql';
import { HelloAccountDTO } from './dto/hello-account.dto';

@Resolver()
export class AccountResolver {
  @Query(() => HelloAccountDTO)
  async hello() {
    const account = new HelloAccountDTO();
    account.name = 'mike';
    return account;
  }
}
