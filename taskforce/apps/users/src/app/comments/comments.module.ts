import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentsController } from './comments.controller';
import { TaskCommentModule } from './task-comment.module';

@Module({
  imports: [TaskCommentModule],
  controllers: [CommentsController],
  providers: [CommentService],
})
export class CommentsModule {}
