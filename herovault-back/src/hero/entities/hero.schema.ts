import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Powerstats } from "./powerstats.entity";

@Schema()
export class Hero extends Document {
    @Prop({ required: true })
    name: String;
    @Prop({ required: true })
    description: String;
    @Prop({ required: true })
    image: String;

    // as in DnD (between 1 and 20)
    @Prop({
        required: true,
        type: Powerstats,
    })
    powerstats: {
        strength: Number;
        dexterity: Number;
        constitution: Number;
        intelligence: Number;
        wisdom: Number;
        charisma: Number;
    };

    @Prop({ required: false })
    remarks: String[];

    // TODO: Implement users
    // @Prop({ required: true })
    // user_id: String;

    // timestamps
    @Prop({ required: true })
    created_at: Date;

    @Prop({ required: true })
    updated_at: Date;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
