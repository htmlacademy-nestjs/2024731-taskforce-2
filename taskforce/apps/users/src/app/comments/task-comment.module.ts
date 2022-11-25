import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskCommentModel, TaskCommentSchema } from './comment.model';
import { TaskCommentRepository } from './task-comment.repository';


@Module({
  imports: [MongooseModule.forFeature([
    { name: TaskCommentModel.name, schema: TaskCommentSchema }
  ])],
  providers: [TaskCommentRepository],
  exports: [TaskCommentRepository]
})
export class TaskCommentModule {}
