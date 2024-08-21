import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroResolver } from './hero.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from './entities/hero.schema';
import { Equipment, EquipmentSchema } from 'src/equipment/entities/equipment.schema';
import { Ability, AbilitySchema } from 'src/ability/entities/ability.schema';

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
