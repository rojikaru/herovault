import { CreateHeroInput } from './create-hero.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateHeroInput extends PartialType(CreateHeroInput) {
  @Field(() => ID)
  id: string;
}
