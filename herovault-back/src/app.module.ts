import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot(),

    // Connect to the database
    DatabaseModule,

    // Import business logic modules
    HeroModule, 
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}
