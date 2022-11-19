import {Expose} from 'class-transformer';

export class UserRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public avatar: string;

  @Expose()
  public birthday: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;

  @Expose()
  public city: string;

  @Expose()
  public role: string;
}

export class UserEmployerRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public aboutInfo: string;

  @Expose()
  public registrationDate: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;

  @Expose()
  public city: string;

  @Expose()
  public role: string;

  @Expose()
  public tasksCount: string;

  @Expose()
  public newTasksCount: string;
}

export class UserWorkerRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public avatar: string;

  @Expose()
  public birthday: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;

  @Expose()
  public city: string;

  @Expose()
  public role: string;
}
