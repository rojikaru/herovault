import { InputType, Int, Field } from '@nestjs/graphql';
import { PowerstatsInput } from './powerstats.input';

@InputType()
export class CreateHeroInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  image: string;

  @Field(() => PowerstatsInput, { nullable: false })
  powerstats: PowerstatsInput;

  @Field(() => [String], { nullable: true })
  remarks?: string[];
}
