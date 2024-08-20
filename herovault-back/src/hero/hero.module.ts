import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroResolver } from './hero.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSchema } from './entities/hero.schema';
import { HeroType } from './entities/hero.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: HeroType.name,
        schema: HeroSchema,
      },
    ]),
  ],
  providers: [HeroResolver, HeroService],
})
export class HeroModule {}
