import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroResolver } from './hero.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipment, EquipmentSchema } from 'src/models/schema/equipment.schema';
import { Ability, AbilitySchema } from 'src/models/schema/ability.schema';
import { Hero, HeroSchema } from 'src/models/schema/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hero.name,
        schema: HeroSchema,
      },
      {
        name: Ability.name,
        schema: AbilitySchema,
      },
      {
        name: Equipment.name,
        schema: EquipmentSchema
      }
    ]),
  ],
  providers: [HeroResolver, HeroService],
})
export class HeroModule {}
