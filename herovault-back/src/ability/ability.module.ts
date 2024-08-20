import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { AbilityResolver } from './ability.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Ability, AbilitySchema } from './entities/ability.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ability.name,
        schema: AbilitySchema,
      },
    ]),
  ],
  providers: [AbilityResolver, AbilityService],
})
export class AbilityModule {}
