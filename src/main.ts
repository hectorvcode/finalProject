import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('E-commerce API')
  .setDescription('E-commerce CRUD API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter:true,
      showRequestDuration: true,
    },
  });

  //await app.listen(3000);
  app.enableCors();
  const PORT = parseInt(process.env.PORT,10) || 3000;
  Logger.log(`app running on: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
