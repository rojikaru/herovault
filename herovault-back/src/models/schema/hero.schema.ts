import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Ability } from 'src/models/schema/ability.schema';
import { Equipment } from 'src/models/schema/equipment.schema';
import { User } from './user.schema';

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
  @Prop(raw({
    strength: { type: Number },
    dexterity: { type: Number },
    constitution: { type: Number },
    intelligence: { type: Number },
    wisdom: { type: Number },
    charisma: { type: Number },
  }))
  powerstats: Record<
    'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma',
    number
  >;

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
