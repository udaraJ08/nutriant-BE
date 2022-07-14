import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FruitDocument = Fruit & Document;

@Schema()
export class Fruit {
  @Prop({ required: true, type: String })
  readonly name: string;
  @Prop({ required: true, type: String })
  readonly description: string;
  @Prop({ required: true, type: String })
  readonly image: string;
  @Prop({ required: true, type: String })
  readonly subTitle: string;
  @Prop({ required: true, type: String })
  readonly gen_name: string;
  @Prop({ required: true, type: String })
  readonly gen_genes: string;
  @Prop({ required: true, type: String })
  readonly gen_family: string;
  @Prop({ required: true, type: String })
  readonly gen_order: string;
  @Prop({ required: true, type: Number })
  readonly carbohydrates: number;
  @Prop({ required: true, type: Number })
  readonly protein: number;
  @Prop({ required: true, type: Number })
  readonly fat: number;
  @Prop({ required: true, type: Number })
  readonly calories: number;
  @Prop({ required: true, type: Number })
  readonly sugar: number;
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
