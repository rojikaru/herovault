import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  picture?: string;

  @Field({ nullable: true })
  bio?: string;
}
