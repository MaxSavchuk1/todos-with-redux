import React from 'react';
import TodoBody from '../../components/TodoBody';
import TodoForm from '../../components/TodoForm';
import styles from './TodoPage.module.sass';

function TodoPage () {
  return (
    <div className={styles.todosContainer}>
      <TodoForm />
      <TodoBody />
    </div>
  );
}

export default TodoPage;
