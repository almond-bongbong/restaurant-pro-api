import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloAccountDTO {
  @Field(() => String)
  name: string;
}
