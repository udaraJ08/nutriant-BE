import { Module } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fruit, FruitSchema } from './entities/fruit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fruit.name, schema: FruitSchema }]),
  ],
  controllers: [FruitsController],
  providers: [FruitsService],
})
export class FruitsModule {}
