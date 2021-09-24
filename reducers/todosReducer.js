import ACTION_TYPES from './../actions/actionTypes';

const initialState = {
  todos: [{ id: Date.now(), todo: '' }],
};

function todosReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}

export default todosReducer;
