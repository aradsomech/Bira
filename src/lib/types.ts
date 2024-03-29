export type ITask = {
  _id: string;
  // taskNumber: number;
  title: string;
  status: string;
  priority: string;
  content: string;
  // createdAt: Date;
};

export type ITaskInput = {
  title: string;
  status: string;
  priority: string;
  content: string;
  assigneeId?: string;
};

export type IUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
