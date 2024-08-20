import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AbilityType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  type: string;

  @Field()
  value: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
