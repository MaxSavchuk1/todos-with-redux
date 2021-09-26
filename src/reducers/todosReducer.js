import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  todos: [],
};

function todosReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TODO: {
      const { values } = action;
      const { todos } = state;
      console.log(values, todos);
      const newTodo = {
        id: Date.now(),
        ...values,
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
    case ACTION_TYPES.UPDATE_TODO: {
      const { isDone, id } = action;
      const { todos } = state;
      console.log(todos);
      const newTodos = [...todos];
      newTodos[newTodos.findIndex(todo => id === todo.id)].isDone = !isDone;
      return { todos: newTodos };
    }
    default:
      return state;
  }
}

export default todosReducer;
