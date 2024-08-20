import { InputType, Field, ID } from '@nestjs/graphql';
import { CreatePowerstatsInput } from './powerstats.input';

@InputType()
export class CreateHeroInput {
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

  @Field(() => CreatePowerstatsInput, { nullable: false })
  powerstats: CreatePowerstatsInput;

  @Field(() => [ID], { nullable: true })
  abilityIds: string[];

  @Field(() => [ID], { nullable: true })
  equipmentIds: string[];

  @Field(() => [String], { nullable: true })
  remarks?: string[];
}
