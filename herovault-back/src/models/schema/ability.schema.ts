import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hero } from './hero.schema';

@Schema()
export class Ability extends Document {
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

  @Prop({ 
    type: [{ type: Types.ObjectId, ref: 'Hero' }],
  })
  heroes: Hero[];
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
