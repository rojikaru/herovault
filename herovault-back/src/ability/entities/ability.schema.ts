import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class AbilityDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    value: number;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    updatedAt: Date;
}

export const AbilitySchema = SchemaFactory.createForClass(AbilityDocument);
