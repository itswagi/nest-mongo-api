import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Board } from './board.schema';
import { List } from './list.schema';
import { Member } from './member.schema';

export type CandidateDocument = Candidate & Document;

@Schema()
export class Candidate {
  @Prop()
  card_id: string;
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Board' })
  idBoard: Board;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'List' })
  idList: List;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }] })
  idMember: Member[];
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
