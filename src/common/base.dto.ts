import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class BaseDTO {
  @Field(() => Int)
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date)
  deletedAt: Date;
}
