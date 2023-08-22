import Realm from 'realm';
import {TodoModel} from './TodoModel';

let repository = new Realm({
  schema: [
    {
      name: 'Todo',
      primaryKey: 'id',
      properties: {
        id: {type: 'string', indexed: true},
        title: 'string',
        completed: 'bool',
        createdAt: 'date',
        updatedAt: 'date',
      },
    },
  ],
});

let TodoService = {
  findAll: function (sortBy?: any) {
    if (!sortBy) {
      sortBy = [
        ['completed', false],
        ['updatedAt', true],
      ];
    }
    return repository.objects('Todo').sorted(sortBy);
  },

  find: (name: any) => {
    return repository.objects('Todo').filtered('title == $0', name);
  },

  remove: (name: any) => {
    repository.write(() => {
      repository.delete(
        repository.objects('Todo').filtered('title == $0', name),
      );
    });
  },

  save: function (todo: TodoModel) {
    if (
      repository.objects('Todo').filtered("title = '" + todo.title + "'").length
    ) {
      return;
    }

    repository.write(() => {
      todo.createdAt = new Date();
      todo.updatedAt = new Date();
      repository.create('Todo', todo);
    });
  },

  update: function (todo: any, callback: any) {
    if (!callback) {
      return;
    }
    repository.write(() => {
      callback();
      todo.updatedAt = new Date();
    });
  },
};

export {repository, TodoService};
