import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hero } from './hero.schema';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  picture?: string;

  @Prop({ required: false })
  bio?: string;

  @Prop({ required: true })
  role: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Hero' }],
    required: true,
  })
  heroes: Hero[];

  // TODO: Add likes

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
