import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PowerstatsType } from './powerstats.entity';
import { AbilityType } from 'src/ability/entities/ability.entity';
import { EquipmentType } from 'src/equipment/entities/equipment.entity';

@ObjectType()
export class HeroType {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => [String], { nullable: true })
  images: string[];

  @Field({ nullable: false })
  race: string;

  @Field({ nullable: false })
  alignment: string;

  @Field(() => [String], { nullable: false })
  class: [string];

  @Field({ nullable: false })
  background?: string;

  @Field(() => [AbilityType], { nullable: true })
  abilities: AbilityType[];

  @Field(() => PowerstatsType, { nullable: false })
  powerstats: PowerstatsType;

  @Field(() => [EquipmentType], { nullable: true })
  equipment: EquipmentType[];

  @Field(() => Boolean, { nullable: false })
  isAiGenerated: boolean;

  @Field(() => [String], { nullable: true })
  remarks?: string[];

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  // TODO: Implement users
  // @Field({ nullable: false })
  // user_id: string;
}
