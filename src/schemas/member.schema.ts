import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MemberDocument = Member & Document;

@Schema()
export class Member {
  @Prop()
  idMember: number;

  @Prop()
  username: string;

  @Prop()
  fullname: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
