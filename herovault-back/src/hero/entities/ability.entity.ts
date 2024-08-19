import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Ability {
    @Field({nullable: false})
    name: string;

    @Field(() => Number, {nullable: false})
    power: number;
}
