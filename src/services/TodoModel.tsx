import {Utils} from '../utils/Utils';

class TodoModel {
  id: string;
  title: any;
  completed: any;
  createdAt: Date;
  updatedAt: Date;
  constructor(title: any, completed: any) {
    this.id = Utils.guid();
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export {TodoModel};
