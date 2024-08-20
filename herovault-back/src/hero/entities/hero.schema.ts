import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PowerstatsType } from "./powerstats.entity";
import { AbilityDocument } from "src/ability/entities/ability.schema";
import { EquipmentDocument } from "src/equipment/entities/equipment.schema";

@Schema()
export class HeroDocument extends Document {
    @Prop({ required: true })
    name: String;

    @Prop({ required: true })
    description: String;

    @Prop({ required: true })
    images: String[];

    @Prop({ required: true })
    race: String;

    @Prop({ required: true })
    alignment: String;

    @Prop({ required: true })
    class: String[];

    @Prop({ required: false })
    background?: String;

    @Prop({
        required: false,
        type: [AbilityDocument],
    })
    abilities: AbilityDocument[];

    // as in DnD (between 1 and 20)
    @Prop({
        required: true,
        type: PowerstatsType,
    })
    powerstats: PowerstatsType;

    @Prop({
        required: false,
        type: [EquipmentDocument],
    })
    equipment: EquipmentDocument[];

    @Prop({ required: false })
    remarks: String[];

    // TODO: Implement users
    // @Prop({ required: true })
    // user_id: String;

    @Prop({ required: true })
    isAiGenerated: Boolean;

    // timestamps
    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    updatedAt: Date;
}

export const HeroSchema = SchemaFactory.createForClass(HeroDocument);
