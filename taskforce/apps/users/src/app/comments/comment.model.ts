import { Document } from 'mongoose';
import { Comment } from '@taskforce/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'comments',
})
export class TaskCommentModel extends Document implements Comment {
  @Prop()
  public userId: string;

  @Prop({
    required: true,
  })
  public workerId: string;

  @Prop({
    required: true,
  })
  public taskId: number;

  @Prop({
    required: true,
  })
  public content: string;

  @Prop({
    required: true,
  })
  public rating: number;
}

export const TaskCommentSchema = SchemaFactory.createForClass(TaskCommentModel);
