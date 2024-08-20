import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';
import constants from 'src/constants';

export default function (
  configService: ConfigService,
): MongooseModuleFactoryOptions {
  return {
    uri: configService.getOrThrow<string>(constants.database_url),
    lazyConnection: true,
  };
}
