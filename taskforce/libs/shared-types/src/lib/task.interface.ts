import { TaskStatus } from './task-status.enum';

export interface Task {
  _id?: string,
  title: string,
  description: string,
  categorie: string,
  price?: number,
  deadlineDate?: Date,
  image?: string,
  address: string,
  tags?: string[],
  status: TaskStatus
}
