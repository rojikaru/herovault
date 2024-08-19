import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Powerstats } from './powerstats.entity';

@ObjectType()
export class Hero {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  image: string;

  @Field(
    () => Powerstats,
    { nullable: false }
  )
  powerstats: Powerstats;

  // TODO: Implement users
  // @Field({ nullable: false })
  // user_id: string;

  @Field(() => [String], { nullable: true })
  remarks?: string[];
}
