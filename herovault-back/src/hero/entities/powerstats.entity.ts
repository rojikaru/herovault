import { Field, Int, ObjectType } from '@nestjs/graphql';
import { HeroType } from './hero.entity';

/**
 * Powerstats entity
 *
 * Defines the powerstats field of a hero in the Hero entity
 */
@ObjectType()
export class PowerstatsType {
  @Field(() => Int)
  strength: number;

  @Field(() => Int)
  dexterity: number;

  @Field(() => Int)
  constitution: number;

  @Field(() => Int)
  intelligence: number;

  @Field(() => Int)
  wisdom: number;

  @Field(() => Int)
  charisma: number;

  @Field(() => HeroType, { nullable: false })
  hero: HeroType;
}
