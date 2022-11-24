import {CRUDRepository} from '@taskforce/core';
import {TaskUserEntity} from './task-user.entity';
import {User} from '@taskforce/shared-types';
import {InjectModel} from '@nestjs/mongoose';
import {TaskUserModel} from './task-user.model';
import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TaskUserRepository implements CRUDRepository<TaskUserEntity, string, User> {
  constructor(
    @InjectModel(TaskUserModel.name) private readonly taskUserModel: Model<TaskUserModel>) {
  }

  public async create(item: TaskUserEntity): Promise<User> {
    const newTaskUser = new this.taskUserModel(item);
    return newTaskUser.save();
  }

  public async destroy(id: string): Promise<void> {
    this.taskUserModel
    .findByIdAndDelete(id)
    .exec();
  }

  public async findById(id: string): Promise<User | null> {
    return this.taskUserModel
      .findOne({id})
      .exec();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.taskUserModel
      .findOne({email})
      .exec();
  }

  public async update(id: string, item: TaskUserEntity): Promise<User> {
    return this.taskUserModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
