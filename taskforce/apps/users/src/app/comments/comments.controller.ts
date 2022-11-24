import { Controller, Post, HttpStatus, Body, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('comment')
@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentService: CommentService
  ) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created.'
  })
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.register(dto);
    // return fillObject(CreateCommentDto, newComment);
    return newComment;
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User found'
  })
  async show(@Param('id') id: string) {
    const existUser = await this.commentService.getCommentsForUser(id);
    console.log(existUser);
    return existUser;
  }

}
