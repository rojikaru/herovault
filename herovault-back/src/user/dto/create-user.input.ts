import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: true })
  pfp?: string;

  @Field({ nullable: true })
  bio?: string;
}
