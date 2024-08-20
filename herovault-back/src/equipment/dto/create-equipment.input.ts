import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEquipmentInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: false })
  type: string;

  @Field(() => Int, { nullable: false })
  impact: number;

  @Field({ nullable: false })
  rarity: string;

  @Field(() => Int, { nullable: false })
  weight: number;
}
