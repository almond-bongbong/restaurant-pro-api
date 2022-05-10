import { Field, ObjectType } from '@nestjs/graphql';
import { Gender } from '@prisma/client';
import BaseDTO from 'src/common/base.dto';

@ObjectType()
export default class AccountDTO extends BaseDTO {
  @Field(() => String)
  email: string;

  @Field(() => String)
  nickname: string;

  @Field(() => Date)
  birth: Date;

  @Field(() => Gender)
  gender: Gender;
}
