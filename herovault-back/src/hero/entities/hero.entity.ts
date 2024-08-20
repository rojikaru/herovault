import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PowerstatsType } from './powerstats.entity';
import { Equipment } from '../../equipment/entities/equipment.entity';
import { Ability } from '../../ability/dto/ability.entity';

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

  @Field(() => [Ability], { nullable: true })
  abilities: Ability[];

  @Field(() => PowerstatsType, { nullable: false })
  powerstats: PowerstatsType;

  @Field(() => [Equipment], { nullable: true })
  equipment: Equipment[];

  @Field(() => Boolean, { nullable: false })
  isAiGenerated: boolean;

  @Field(() => [String], { nullable: true })
  remarks?: string[];

  // TODO: Implement users
  // @Field({ nullable: false })
  // user_id: string;
}
