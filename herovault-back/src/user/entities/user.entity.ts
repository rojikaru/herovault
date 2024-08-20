import { ObjectType, Field, ID } from '@nestjs/graphql';
import { HeroType } from 'src/hero/entities/hero.entity';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  pfp?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(() => [HeroType], { nullable: false })
  heroes: HeroType[];

  @Field(() => [HeroType], { nullable: false })
  likedHeroes: HeroType[];
}
