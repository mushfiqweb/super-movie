import { Controller, Get } from '@nestjs/common';
import { Comment } from './comment.interface';
import { CommentsService } from './external-api.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Get()
  async getComments(): Promise<Comment[]> {
    return this.commentsService.fetchComments();
  }
}