import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FRUITS_GENERAL_TYPE, NUTRITION_TYPE } from '../types/fruits.types';

export type FruitDocument = Fruit & Document;

@Schema()
export class Fruit {
  @Prop({ required: true, type: String })
  readonly name: string;
  @Prop({ required: true, type: String })
  readonly color: string;
  @Prop({ required: true, type: String })
  readonly description: string;
  @Prop({ required: true, type: String })
  readonly subTitle: string;
  @Prop({ required: true, type: Object })
  readonly general: FRUITS_GENERAL_TYPE;
  @Prop({ required: true, type: Object })
  readonly nutrition: NUTRITION_TYPE;
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
