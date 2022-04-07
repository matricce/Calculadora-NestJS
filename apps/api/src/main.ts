import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiGlobalPrefix, projectConfig } from './app/configs/project.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(apiGlobalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Calculadora API')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(projectConfig.api.port, () => {
    Logger.log(`API is running on port ${projectConfig.api.port}`, 'Bootstrap');
  });
}
bootstrap();
