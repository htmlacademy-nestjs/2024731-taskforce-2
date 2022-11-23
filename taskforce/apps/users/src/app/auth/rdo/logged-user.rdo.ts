import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'The uniq user email',
    example: 'user@user.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'The uniq user token',
    example: 'kjkasjdka'
  })
  @Expose()
  public accessToken: string;
}
