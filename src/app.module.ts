import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardsModule } from './boards/boards.module';
import { CandidatesModule } from './candidates/candidates.module';
import { ListsModule } from './lists/lists.module';
import { MembersModule } from './members/members.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE),
    BoardsModule,
    CandidatesModule,
    ListsModule,
    MembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
