import ACTION_TYPES from './actionTypes';

export const createTodo = todo => {
  return {
    type: ACTION_TYPES.CREATE_TODO,
    todo,
  };
};

export const deleteTodo = id => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    id,
  };
};
