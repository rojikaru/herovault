import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';

// TODO: Implement
// Guide: https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authorization/
@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), ConfigModule],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthsModule {}
