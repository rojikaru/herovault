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
  name: string;

  @Field({ nullable: true })
  picture?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(() => [HeroType], { nullable: false })
  heroes: HeroType[];

  @Field(() => [HeroType], { nullable: false })
  likedHeroes: HeroType[];
}
