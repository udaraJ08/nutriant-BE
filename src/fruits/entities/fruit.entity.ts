import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Fruit & Document;

@Schema()
export class Fruit {
  @Prop({ required: true })
  readonly name: string;
  @Prop({ required: true })
  readonly color: string;
  @Prop({ required: true })
  readonly description: string;
  @Prop({ required: true })
  readonly subTitle: string;
  @Prop({ required: true })
  readonly general: {
    readonly gen_name: string;
    readonly gen_genes: string;
    readonly gen_family: string;
    readonly gen_order: string;
  };
  @Prop({ required: true })
  readonly nutrition: {
    readonly carbohydrates: number;
    readonly protein: number;
    readonly fat: number;
    readonly calories: number;
    readonly sugar: number;
  };
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
