import { Field, InputType } from '@nestjs/graphql';
import { Gender } from '@prisma/client';

@InputType()
export class CreateAccountInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  nickname: string;

  @Field(() => Date)
  birth: Date;

  @Field(() => String)
  gender: Gender;
}
