import React from 'react';
import TodoBody from '../../components/TodoBody';
import TodoInputForm from '../../components/TodoInputForm';
import styles from './TodoPage.module.sass';

function TodoPage () {
  return (
    <div className={styles.todosContainer}>
      <TodoInputForm />
      <TodoBody />
    </div>
  );
}

export default TodoPage;
