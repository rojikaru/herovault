import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthsModule } from './auths/auths.module';
import { AbilityModule } from './ability/ability.module';
import { EquipmentModule } from './equipment/equipment.module';
import mongooseFactory from './factory/mongoose.factory';
import graphqlFactory from './factory/graphql.factory';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot(),

    // Connect to the database
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mongooseFactory,
    }),

    // Configure GraphQL
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: graphqlFactory,
    }),

    // Import business logic modules
    HeroModule,
    UserModule,
    AuthsModule,
    AbilityModule,
    EquipmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
