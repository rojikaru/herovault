import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const NODE_ENV = process.env.NODE_ENV;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: NODE_ENV === 'development' || {
      origin: CORS_ORIGIN,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
    },
  });

  await app.listen(PORT);
  console.info(`Server is running on http://${HOST}:${PORT}`);
}

// Entry point of the application
bootstrap();
