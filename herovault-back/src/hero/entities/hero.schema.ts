import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Powerstats } from "./powerstats.entity";
import { AbilityInput } from "../dto/ability.input";
import { EquipmentInput } from "../dto/equipment.input";

@Schema()
export class Hero extends Document {
    @Prop({ required: true })
    name: String;

    @Prop({ required: true })
    description: String;

    @Prop({ required: true })
    images: [String];

    @Prop({ required: true })
    race: String;

    @Prop({ required: true })
    alignment: String;

    @Prop({ required: true })
    class: [String];

    @Prop({ required: false })
    background?: String;

    @Prop({
        required: false,
        type: [AbilityInput],
    })
    abilities: [AbilityInput];

    // as in DnD (between 1 and 20)
    @Prop({
        required: true,
        type: Powerstats,
    })
    powerstats: Powerstats;

    @Prop({
        required: false,
        type: [EquipmentInput],
    })
    equipment: [EquipmentInput];

    @Prop({ required: false })
    remarks: String[];

    // TODO: Implement users
    // @Prop({ required: true })
    // user_id: String;

    @Prop({ required: true })
    isAiGenerated: Boolean;

    // timestamps
    @Prop({ required: true })
    created_at: Date;

    @Prop({ required: true })
    updated_at: Date;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
