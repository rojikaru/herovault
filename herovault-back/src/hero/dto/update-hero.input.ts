import { InputType, Field, ID } from '@nestjs/graphql';
import { AbilityInput } from '../../ability/dto/ability.input';
import { EquipmentInput } from '../../equipment/dto/equipment.input';
import { PowerstatsInput } from './powerstats.input';

@InputType()
export class UpdateHeroInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  race: string;

  @Field({ nullable: false })
  alignment: string;

  @Field(() => [String], { nullable: false })
  class: [string];

  @Field({ nullable: false })
  background?: string;

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
