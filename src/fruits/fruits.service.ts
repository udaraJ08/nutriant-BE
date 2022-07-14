import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fruit, FruitDocument } from './entities/fruit.entity';
import { S3 } from 'aws-sdk';
import { uuid } from 'uuidv4';
import { Multer } from 'multer';

@Injectable()
export class FruitsService {
  constructor(
    @InjectModel(Fruit.name) private fruitModel: Model<FruitDocument>,
  ) {}

  async create(
    createFruitDto: CreateFruitDto,
    file: Multer.File,
    name: string,
  ) {
    const s3 = new S3();
    let upload;
    try {
      upload = await s3
        .upload({
          Bucket: 'nutriant-bucket',
          Body: file.buffer,
          Key: `${uuid()}-${name}`,
        })
        .promise()
        .then((res) => res);
    } catch (err) {
      throw new BadRequestException();
    }

    const cookObject = {
      ...createFruitDto,
      image: upload.Location,
    };
    const dis = new this.fruitModel(cookObject);
    return dis.save();
  }

  async uploadFile(file: Multer.File, name: string) {
    const s3 = new S3();
    let upload;
    try {
      upload = s3
        .upload({
          Bucket: 'nutriant-bucket',
          Body: file.buffer,
          Key: `${uuid()}-${name}`,
        })
        .promise()
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      throw new BadRequestException();
    }
    return upload;
  }
  findAll() {
    return this.fruitModel.find();
  }

  findOne(id: string) {
    return this.fruitModel.findById(id);
  }

  update(id: number, updateFruitDto: UpdateFruitDto) {
    return `This action updates a #${id} fruit`;
  }

  remove(id: number) {
    return `This action removes a #${id} fruit`;
  }
}
