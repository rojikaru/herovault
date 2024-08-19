import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class StatsInput {
    @Field({nullable: true})
    attack?: number;

    @Field({nullable: true})
    defense?: number;

    @Field({nullable: true})
    speed?: number;

    @Field({nullable: true})
    health?: number;
}

@InputType()
export class EquipmentInput {
    @Field({nullable: false})
    name: string;

    @Field({nullable: false})
    type: string;

    @Field(() => StatsInput, {nullable: true})
    stats: StatsInput;
}