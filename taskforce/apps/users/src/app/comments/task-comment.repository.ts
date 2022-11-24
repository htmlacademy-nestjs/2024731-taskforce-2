import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '@taskforce/shared-types';
import { Model } from 'mongoose';
import { CommentEntity } from './comment.entity';
import { TaskCommentModel } from './comment.model';

@Injectable()
export class TaskCommentRepository{
  constructor(
    @InjectModel(TaskCommentModel.name) private readonly taskCommentModel: Model<TaskCommentModel>) {
  }

  public async create(item: CommentEntity): Promise<Comment> {
    const newTaskUser = new this.taskCommentModel(item);
    return newTaskUser.save();
  }

  public async find(userId: string, taskId: number, workerId: string): Promise<Comment | null> {
    return this.taskCommentModel
      .findOne({userId, taskId, workerId})
      .exec();
  }

  public async findAll(workerId: string): Promise<Comment[] | null> {
    return this.taskCommentModel
      .find({workerId})
      .exec();
  }

}
