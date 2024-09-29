import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule);

  // Enable CORS for cross-origin requests
  app.enableCors();

  // Use cookie parser middleware to handle cookies
  app.use(cookieParser());

  // Get the ConfigService to access environment variables
  const configService = app.get(ConfigService);

  // Get the application port from environment variables
  const PORT = configService.get<number>('APP_PORT');

  // Set up Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Career Design Application Backend')
    .setDescription(
      'This API provides a comprehensive description of a SiaSND API'
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      }
    )
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, options);

  // Set up the Swagger module to serve the documentation at the /api endpoint
  SwaggerModule.setup('api', app, document);

  // Start the application on the specified port
  await app.listen(PORT || 3000, () =>
    console.log(`Application bootstrap on port ${PORT} 💆😇️  `),
  );
}

bootstrap();
