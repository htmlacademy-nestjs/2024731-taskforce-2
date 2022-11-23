import { UserCity, UserRole } from '@taskforce/shared-types';
import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email-address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User birth date YYYY-MM-DD',
    example: '1970-12-31',
  })
  public birthday: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
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
  public password: string;

  @ApiProperty({
    description: 'User city',
    example: 'Vladivistok',
  })
  public city: UserCity;

  @ApiProperty({
    description: 'User role',
    example: 'employer',
  })
  public role: UserRole
}
