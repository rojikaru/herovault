import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePowerstatsInput {
  @Field(() => Int, { nullable: false })
  strength: number;

  @Field(() => Int, { nullable: false })
  dexterity: number;

  @Field(() => Int, { nullable: false })
  constitution: number;

  @Field(() => Int, { nullable: false })
  intelligence: number;

  @Field(() => Int, { nullable: false })
  wisdom: number;

  @Field(() => Int, { nullable: false })
  charisma: number;
}

@InputType()
export class UpdatePowerstatsInput {
  @Field(() => Int, { nullable: true })
  strength?: number;

  @Field(() => Int, { nullable: true })
  dexterity?: number;

  @Field(() => Int, { nullable: true })
  constitution?: number;

  @Field(() => Int, { nullable: true })
  intelligence?: number;

  @Field(() => Int, { nullable: true })
  wisdom?: number;

  @Field(() => Int, { nullable: true })
  charisma?: number;
}
