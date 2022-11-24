import {ApiProperty} from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'User unique mongo ID',
    example: '637f3b723b79efe00cddcdf4'
  })
  public userId: string;

  @ApiProperty({
    description: 'User with role "worker" unique mongo ID',
    example: '637f3b723b79efe00cddcdf4',
  })
  public workerId: string;

  @ApiProperty({
    description: 'Task unique postgresql ID ',
    example: '12123',
  })
  public taskId: number;

  @ApiProperty({
    description: 'text content of comment',
    example: 'Very good job!',
  })
  public content: string;

  @ApiProperty({
    description: 'Worker rating',
    example: '3',
  })
  public rating: number;
}
