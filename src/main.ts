import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable validation with custom error format...
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const customErrors = errors.map((error) => ({
          field: error.property,
          errors: Object.values(error.constraints || []), // Collect all validation messages for the field
        }));
        return new BadRequestException({
          statusCode: 400,
          message: 'Validation failed',
          errors: customErrors,
        });
      },
      forbidUnknownValues: true,
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      // disableErrorMessages: true
    }),
  );

  await app.listen(3000);
}
bootstrap();
