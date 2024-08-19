import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AbilityInput {
    @Field({nullable: false})
    name: string;

    @Field(() => Number, {nullable: false})
    power: number;
}