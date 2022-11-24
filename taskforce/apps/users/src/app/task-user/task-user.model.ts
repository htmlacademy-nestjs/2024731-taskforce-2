import { Document } from 'mongoose';
import { User, UserCity, UserRole } from '@taskforce/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
})
export class TaskUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public birthday: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstname: string;

  @Prop({
    required: true,
  })
  public lastname: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserCity,
  })
  public city: UserCity;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.Employer,
  })
  public role: UserRole;

  @Prop({
    required: false,
  })
  public registrationDate: Date;

  @Prop({
    required: false,
  })
  public aboutInfo: string;

  @Prop({
    required: false,
  })
  public skills: string[];

}

export const TaskUserSchema = SchemaFactory.createForClass(TaskUserModel);
