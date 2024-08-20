import { CreateAbilityInput } from './create-ability.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAbilityInput extends PartialType(CreateAbilityInput) {
  @Field(() => ID)
  id: string;
}
