import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAbilityInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  type: string;

  @Field(() => Int)
  value: number;
}
