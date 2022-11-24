import { Comment } from '@taskforce/shared-types';

export class CommentEntity implements Comment {
  public _id?: string;
  public userId: string;
  public workerId: string;
  public taskId: number;
  public content: string;
  public rating: number;
  public creationDate?: Date;

  constructor(taskComment: Comment) {
    this.fillEntity(taskComment);
 }

  public toObject() {
    return {...this};
  }

  public fillEntity(taskComment: Comment) {
    this._id = taskComment._id;
    this.userId = taskComment.userId;
    this.workerId = taskComment.workerId;
    this.taskId = taskComment.taskId;
    this.content = taskComment.content;
    this.rating = taskComment.rating;
    }
}
