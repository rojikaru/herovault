import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { AbilityResolver } from './ability.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AbilityDocument, AbilitySchema } from './entities/ability.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AbilityDocument.name,
        schema: AbilitySchema,
      },
    ]),
  ],
  providers: [AbilityResolver, AbilityService],
})
export class AbilityModule {}
