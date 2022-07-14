import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nutriant:udara@cluster0.lyztzt3.mongodb.net/?retryWrites=true&w=majority',
    ),
    FruitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
