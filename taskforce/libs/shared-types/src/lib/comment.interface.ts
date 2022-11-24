export interface Comment {
  _id?: string,
  userId: string,
  workerId: string,
  taskId: number,
  content: string,
  rating: number,
  creationDate?: Date,
}
