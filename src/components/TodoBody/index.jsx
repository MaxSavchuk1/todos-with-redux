import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../actions';
import styles from './TodoBody.module.sass';

function TodoBody () {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { deleteTodo } = bindActionCreators(actionCreators, dispatch);

  const mapTodos = ({ id, todo }) => {
    const deleteHandler = () => deleteTodo(id);
    return (
      <li key={id} className={styles.listItem}>
        <input type='checkbox' />
        {todo}
        <button onClick={deleteHandler}>
          <DeleteIcon fontSize='small' />
        </button>
      </li>
    );
  };
  return (
    <div className={styles.listContainer}>
      <ul>{todos.map(mapTodos)}</ul>
    </div>
  );
}

export default TodoBody;
