import { InputType, Field, ID } from '@nestjs/graphql';
import { UpdatePowerstatsInput } from './powerstats.input';

@InputType()
export class UpdateHeroInput {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  race: string;

  @Field({ nullable: true })
  alignment: string;

  @Field(() => [String], { nullable: true })
  class: [string];

  @Field({ nullable: true })
  background?: string;

  @Field(() => UpdatePowerstatsInput, { nullable: true })
  powerstats: UpdatePowerstatsInput;

  @Field(() => [ID], { nullable: true })
  abilityIds: string[];

  @Field(() => [ID], { nullable: true })
  equipmentIds: string[];

  @Field(() => [String], { nullable: true })
  remarks?: string[];

  @Field(() => [String], { nullable: true })
  addImages: string[];

  @Field(() => [String], { nullable: true })
  removeImages: string[];
}
