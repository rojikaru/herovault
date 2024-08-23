import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hero } from './hero.schema';

@Schema()
export class Equipment extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description?: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  impact: number;

  @Prop({ required: true })
  rarity: string;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Hero' }],
  })
  heroes: Hero[];
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
