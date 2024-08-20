import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EquipmentType {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: false })
  type: string;

  @Field({ nullable: false })
  impact: number;

  @Field({ nullable: false })
  rarity: string;

  @Field({ nullable: false })
  weight: number;

  @Field({ nullable: false })
  createdAt: Date;

  @Field({ nullable: false })
  updatedAt: Date;
}
