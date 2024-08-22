import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PowerstatsType } from './powerstats.entity';
import { Ability } from 'src/ability/entities/ability.schema';
import { Equipment } from 'src/equipment/entities/equipment.schema';
import { User } from 'src/user/entities/user.schema';

@Schema()
export class Hero extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true })
  race: string;

  @Prop({ required: true })
  alignment: string;

  @Prop({ required: true })
  class: string[];

  @Prop({ required: false })
  background?: string;

  @Prop({
    required: false,
    type: [Ability],
    ref: 'Ability',
  })
  abilities: Ability[];

  // as in DnD (between 1 and 20)
  @Prop({
    required: true,
    type: PowerstatsType,
  })
  powerstats: PowerstatsType;

  @Prop({
    required: false,
    type: [Equipment],
    ref: 'Equipment',
  })
  equipment: Equipment[];

  @Prop({ required: false })
  remarks: string[];

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User;

  @Prop({ required: true })
  isAiGenerated: boolean;

  // timestamps
  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
