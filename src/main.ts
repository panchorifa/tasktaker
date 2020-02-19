import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const swaggerDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle('Work Distribution API')
    .setDescription('Assigns tasks to agents based on skills.')
    .setVersion('1.0')
    .build();
  return SwaggerModule.createDocument(app, options);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api', app, swaggerDocument(app));
  await app.listen(3000);
}
bootstrap();
