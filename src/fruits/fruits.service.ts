import { Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fruit, FruitDocument } from './entities/fruit.entity';

@Injectable()
export class FruitsService {
  constructor(
    @InjectModel(Fruit.name) private fruitModel: Model<FruitDocument>,
  ) {}

  create(createFruitDto: CreateFruitDto) {
    const dis = new this.fruitModel(createFruitDto);
    return dis.save();
  }

  findAll() {
    return this.fruitModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fruit`;
  }

  update(id: number, updateFruitDto: UpdateFruitDto) {
    return `This action updates a #${id} fruit`;
  }

  remove(id: number) {
    return `This action removes a #${id} fruit`;
  }
}
