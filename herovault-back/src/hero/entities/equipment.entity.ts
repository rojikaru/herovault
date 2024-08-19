import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Stats {
    @Field({nullable: true})
    attack?: number;

    @Field({nullable: true})
    defense?: number;

    @Field({nullable: true})
    speed?: number;

    @Field({nullable: true})
    health?: number;
}

@ObjectType()
export class Equipment {
    @Field({nullable: false})
    name: string;

    @Field({nullable: false})
    type: string;

    @Field(() => Stats, {nullable: true})
    stats: Stats
}