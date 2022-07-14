import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @UploadedFile() file: Multer.File,
    @Body() createFruitDto: CreateFruitDto,
  ) {
    return this.fruitsService.create(createFruitDto, file, file.originalname);
  }

  @Post('/test')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Multer.File) {
    return this.fruitsService.uploadFile(file, file.originalname);
  }

  @Get()
  findAll() {
    return this.fruitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fruitsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFruitDto: UpdateFruitDto) {
    return this.fruitsService.update(+id, updateFruitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fruitsService.remove(+id);
  }
}
