import {User, UserRole, UserCity} from '@taskforce/shared-types';
import {genSalt, hash, compare} from 'bcrypt';
import { UpdateUserDto } from '../auth/dto/update-user.dto';
import {SALT_ROUNDS} from './task-user.constant';

export class TaskUserEntity implements User {
  public _id: string;
  public avatar: string;
  public birthday: Date;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public role: UserRole;
  public city: UserCity;
  public aboutInfo: string;
  public registrationDate: Date;
  public skills: string[];

  constructor(taskUser: User) {
     this.fillEntity(taskUser);
  }

  public async setPassword(password: string): Promise<TaskUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(taskUser: User) {
    this._id = taskUser._id;
    this.avatar = taskUser.avatar;
    this.birthday = taskUser.birthday;
    this.email = taskUser.email;
    this.firstname = taskUser.firstname;
    this.lastname = taskUser.lastname;
    this.passwordHash = taskUser.passwordHash;
    this.role = taskUser.role;
    this.city = taskUser.city;
    this.aboutInfo = taskUser.aboutInfo;
    this.registrationDate = taskUser.registrationDate;
    this.skills = taskUser.skills;
  }

  public updateEntity(taskUser: UpdateUserDto) {
    this.avatar = taskUser.avatar ? taskUser.avatar : this.avatar;
    this.birthday = taskUser.birthday ? taskUser.birthday : this.birthday;
    this.email = taskUser.email ? taskUser.email : this.email;
    this.firstname = taskUser.firstname ? taskUser.firstname : taskUser.firstname;
    this.lastname = taskUser.lastname ? taskUser.lastname : this.lastname;
    this.city = taskUser.city ? taskUser.city : this.city;
    this.aboutInfo = taskUser.aboutInfo ? taskUser.aboutInfo : this.aboutInfo;
    this.skills = taskUser.skills ? taskUser.skills : this.skills;
    this.passwordHash = taskUser.passwordHash ? taskUser.passwordHash : this.passwordHash;
  }
}
