import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PowerstatsType } from './powerstats.entity';
import { AbilityDocument } from 'src/ability/entities/ability.schema';
import { EquipmentDocument } from 'src/equipment/entities/equipment.schema';
import { UserDocument } from 'src/user/entities/user.schema';

@Schema()
export class HeroDocument extends Document {
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
  remarks: string[];

  // TODO: Implement users
  @Prop({
    type: Types.ObjectId,
    ref: UserDocument.name,
    required: true,
  })
  user: UserDocument;

  @Prop({ required: true })
  isAiGenerated: boolean;

  // timestamps
  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const HeroSchema = SchemaFactory.createForClass(HeroDocument);
