import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PowerstatsInput {
    @Field(() => Int)
    strength: number;

    @Field(() => Int)
    dexterity: number;

    @Field(() => Int)
    constitution: number;

    @Field(() => Int)
    intelligence: number;

    @Field(() => Int)
    wisdom: number;

    @Field(() => Int)
    charisma: number;
}
