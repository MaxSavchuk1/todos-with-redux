import ACTION_TYPES from './actionTypes';

export const createTodo = values => {
  return {
    type: ACTION_TYPES.CREATE_TODO,
    values,
  };
};

export const deleteTodo = id => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    id,
  };
};

export const updateTodo = (isDone, id) => {
  return {
    type: ACTION_TYPES.UPDATE_TODO,
    isDone,
    id,
  };
};
