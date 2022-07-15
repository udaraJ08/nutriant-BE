import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'aws-sdk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  config.update({
    region: 'ap-southeast-1',
    accessKeyId: 'AKIAU4G4GWYCL62UGL6W',
    secretAccessKey: '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',
  });
  await app
    .listen(process.env.PORT || 8080)
    .then((res) => console.log('server starteds'));
}
bootstrap();
