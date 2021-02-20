import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Member } from './member.schema';
import { List } from './list.schema';
import { Candidate } from './candidates.schema';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  @Prop()
  idBoard: number;

  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }] })
  idMember: Member[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }] })
  idList: List[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }] })
  idCandidate: Candidate[];
}

export const BoardSchema = SchemaFactory.createForClass(Board);
