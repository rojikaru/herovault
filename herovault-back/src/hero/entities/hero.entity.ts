import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Powerstats } from './powerstats.entity';
import { Equipment } from './equipment.entity';
import { Ability } from './ability.entity';

@ObjectType()
export class Hero {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => [String], { nullable: true })
  images: string[];

  @Field({ nullable: false })
  race: String;

  @Field({ nullable: false })
  alignment: String

  @Field(() => [String], { nullable: false })
  class: [String];

  @Field({ nullable: false })
  background?: String;

  @Field(() => [Ability], { nullable: true })
  abilities: Ability[];

  @Field(() => Powerstats, { nullable: false })
  powerstats: Powerstats;

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
