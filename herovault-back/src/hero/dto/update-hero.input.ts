import { CreateHeroInput } from './create-hero.input';
import { InputType, Field, PartialType, ID, OmitType } from '@nestjs/graphql';
import { PowerstatsInput } from './powerstats.input';
import { AbilityInput } from './ability.input';
import { EquipmentInput } from './equipment.input';

@InputType()
export class UpdateHeroInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  race: String;

  @Field({ nullable: false })
  alignment: String;

  @Field(() => [String], { nullable: false })
  class: [String];

  @Field({ nullable: false })
  background?: String;

  @Field(() => [AbilityInput], { nullable: true })
  abilities: AbilityInput[];

  @Field(() => PowerstatsInput, { nullable: false })
  powerstats: PowerstatsInput;

  @Field(() => [EquipmentInput], { nullable: true })
  equipment: EquipmentInput[];

  @Field(() => [String], { nullable: true })
  remarks?: string[];

  @Field(() => [String], { nullable: true })
  addImages: string[];

  @Field(() => [String], { nullable: true })
  removeImages: string[];
}
