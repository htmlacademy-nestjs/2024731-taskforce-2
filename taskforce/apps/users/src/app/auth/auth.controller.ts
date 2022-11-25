import { Body, Controller, Get, Param, Post, Patch, HttpCode, HttpStatus, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@taskforce/core';
import { UserRole } from '@taskforce/shared-types';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UserEmployerRdo, UserRdo, UserWorkerRdo } from './rdo/user.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @Get(':id')
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found'
  })
  async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    if (existUser.role === UserRole.Employer) {

      return fillObject(UserEmployerRdo, existUser);
    }
    return fillObject(UserWorkerRdo, existUser);
  }

  @Patch('update-password/:id')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully update password.'
  })
  async updatePassword(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const newUser = await this.authService.updateUserPassword(id, dto);
    return fillObject(UserRdo, newUser);
  }

  @Patch('update/:id')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully updated.'
  })
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const newUser = await this.authService.updateUser(id, dto);
    return fillObject(UserRdo, newUser);
  }

  @Delete('delete/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully deleted.'
  })
  async delete(@Param('id') id: string) {
    const result = await this.authService.delete(id);
    return result;
  }
}
