import { UserCity} from '@taskforce/shared-types';
import {ApiProperty} from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'User unique email-address',
    example: 'user@user.ru'
  })
  public email?: string;

  @ApiProperty({
    description: 'User birth date YYYY-MM-DD',
    example: '1970-12-31',
  })
  public birthday?: Date;

  @ApiProperty({
    description: 'User first name',
    example: 'Mike',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
  })
  public lastname: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public passwordHash?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456Q',
  })
  public newPassword?: string;

  @ApiProperty({
    description: 'User city',
    example: 'Moscow',
  })
  public city?: UserCity;

  @ApiProperty({
    description: 'User description info',
    example: 'who am I',
  })
  public aboutInfo?: string;

  @ApiProperty({
    description: 'User skills',
    example: 'careful, responsble',
  })
  public skills?: string[];

  @ApiProperty({
    description: 'User avatar',
    example: 'img',
  })
  public avatar?: string;
}
