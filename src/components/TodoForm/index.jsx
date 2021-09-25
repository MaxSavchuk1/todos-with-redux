import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import * as actionCreators from '../../actions';
import styles from './TodoForm.module.sass';
import Input from '../Input';
import { TODO_SCHEMA } from '../../utils/validationSchemas';

function TodoForm () {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { createTodo } = bindActionCreators(actionCreators, dispatch);
  const initialValues = { todo: '' };
  const submitHandler = ({ todo }, formikBag) => {
    createTodo(todo);
    formikBag.resetForm();
  };
  const inputClasses = {
    valid: styles.valid,
    invalid: styles.invalid,
    input: styles.input,
    errorStyle: styles.error,
  };

  const focusHandler = () => setIsVisible(!isVisible);
  const buttonStyles = classNames(styles.button, {
    [styles.buttonDisplay]: isVisible,
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TODO_SCHEMA}
    >
      <Form className={styles.formContainer} onBlur={focusHandler}>
        <Input
          type='text'
          name='todo'
          placeholder='Enter todo here'
          classes={inputClasses}
          onFocus={focusHandler}
        />
        <button type='submit' className={buttonStyles}>
          SUBMIT
        </button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
