import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
// import { LoginUserDto } from './dto/login-user.dto';
// import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './auth.constant';
// import { UpdateUserDto } from './dto/update-user.dto';
import { TaskCommentRepository } from './task-comment.repository';
import { CommentEntity } from './comment.entity';


@Injectable()
export class CommentService {
  constructor(
    private readonly taskCommentRepository: TaskCommentRepository,
  ) {}

  async register(dto: CreateCommentDto) {
    const {userId, workerId, content, rating, taskId} = dto;
    const userComment = {
      userId,
      workerId,
      taskId,
      content,
      rating,
      creationDate: new Date(),
    };

    const existComment = await this.taskCommentRepository
      .find(userId, taskId, workerId);

    if (existComment) {
      throw new Error('This comment exist');
    }
    const commentEntity = await new CommentEntity(userComment);

    return this.taskCommentRepository
      .create(commentEntity);
  }

  async getCommentsForUser(workerId: string) {
    return this.taskCommentRepository.findAll(workerId);
  }

}
