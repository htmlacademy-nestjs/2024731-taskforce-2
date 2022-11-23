import { UserCity } from './user-city.enum';
import { UserRole } from './user-role.enum';

export interface User {
  _id?: string,
  firstname: string,
  lastname: string,
  email: string,
  city: UserCity,
  role: UserRole,
  avatar: string,
  birthday: Date,
  passwordHash: string;
  registrationDate?: Date,
  aboutInfo?: string,
  skills?: string[],
}
