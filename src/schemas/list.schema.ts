import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Board } from './board.schema';

export type ListDocument = List & Document;

@Schema()
export class List {
  @Prop()
  idList: number;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Board' })
  idBoard: Board;
}

export const ListSchema = SchemaFactory.createForClass(List);
