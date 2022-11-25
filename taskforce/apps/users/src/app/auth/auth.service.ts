import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './auth.constant';
import { TaskUserEntity } from '../task-user/task-user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { TaskUserRepository } from '../task-user/task-user.repository';


@Injectable()
export class AuthService {
  constructor(
    private readonly taskUserRepository: TaskUserRepository,
  ) {}

  async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, birthday, role, city} = dto;
    const taskUser = {
      email,
      firstname,
      lastname,
      role,
      city,
      avatar: '',
      birthday: dayjs(birthday).toDate(),
      passwordHash: '',
      aboutInfo: '',
      registrationDate: new Date(),
      skills: []
    };

    const existUser = await this.taskUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new Error(AUTH_USER_EXISTS);
    }

    const userEntity = await new TaskUserEntity(taskUser)
      .setPassword(password)

    return this.taskUserRepository
      .create(userEntity);
  }

  async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.taskUserRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }

    const taskUserEntity = new TaskUserEntity(existUser);
    if (! await taskUserEntity.comparePassword(password)) {
      throw new Error(AUTH_USER_PASSWORD_WRONG);
    }

    return taskUserEntity.toObject();
  }

  async getUser(id: string) {
    return this.taskUserRepository.findById(id);
  }

  async updateUser(id: string, dto: UpdateUserDto) {

    const existUser = await this.taskUserRepository.findById(id);
    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }
    const taskUserEntity = new TaskUserEntity(existUser);
    taskUserEntity.updateEntity(dto);

    return this.taskUserRepository.update(id, taskUserEntity);
  }

  async updateUserPassword(id: string, dto: UpdateUserDto) {
    const {email, password, newPassword} = dto;
    const existUser = await this.taskUserRepository.findByEmail(email);
    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }
    let taskUserEntity = new TaskUserEntity(existUser);
    if (! await taskUserEntity.comparePassword(password)) {
      throw new Error(AUTH_USER_PASSWORD_WRONG);
    }
    taskUserEntity = await taskUserEntity.setPassword(newPassword);

    return this.taskUserRepository.update(id, taskUserEntity);
  }

  public async delete(id: string) {
    const existUser = await this.taskUserRepository.findById(id);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }
    return this.taskUserRepository.destroy(id);
  }
}
