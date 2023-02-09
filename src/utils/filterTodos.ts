import { FilterBy } from '../types/FilterBy';
import { Todo } from '../types/Todo';

export const getVisibleTodosByFilter = (
  todos: Todo[],
  filterBy: FilterBy,
) => {
  return todos.filter(todo => {
    switch (filterBy) {
      case FilterBy.Active:
        return !todo.completed;
      case FilterBy.Completed:
        return todo.completed;
      default:
        return todo;
    }
  });
};