import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import constants from './constants';

async function bootstrap() {
  // Load environment variables
  const PORT = process.env[constants.port];
  const HOST = process.env[constants.host];
  const CORS_ORIGIN = process.env[constants.origin];

  // Create the NestJS application and enable CORS
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Start the application
  await app.listen(PORT);
  new Logger('Bootstrap').log(`Server is running on http://${HOST}:${PORT}`);
}

// Entry point of the application
bootstrap();
