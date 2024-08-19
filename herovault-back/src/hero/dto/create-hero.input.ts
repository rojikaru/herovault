import { InputType, Int, Field } from '@nestjs/graphql';
import { PowerstatsInput } from './powerstats.input';
import { AbilityInput } from './ability.input';
import { EquipmentInput } from './equipment.input';

@InputType()
export class CreateHeroInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => [String], { nullable: true })
  images: string[];

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

  @Field(() => Boolean, { nullable: false })
  isAiGenerated: boolean;

  // TODO: Implement users
  // @Field(() => String, { nullable: false})
  // user_id: String;
}
