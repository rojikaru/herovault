import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EquipmentDocument extends Document {
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
}
