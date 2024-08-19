import { Field, Int, ObjectType } from "@nestjs/graphql";

/**
 * Powerstats entity
 * 
 * Defines the powerstats field of a hero in the Hero entity
 */
@ObjectType()
export class Powerstats {
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
