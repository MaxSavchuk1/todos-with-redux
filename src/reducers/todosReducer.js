import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  todos: [],
};

function todosReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TODO: {
      const { todo } = action;
      const { todos } = state;
      const newTodo = {
        id: Date.now(),
        todo,
      };
      const newTodos = [...todos, newTodo];
      return { todos: newTodos };
    }
    case ACTION_TYPES.DELETE_TODO: {
      const { id } = action;
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(
        newTodos.findIndex(todo => id === todo.id),
        1
      );
      return { todos: newTodos };
    }
    default:
      return state;
  }
}

export default todosReducer;
