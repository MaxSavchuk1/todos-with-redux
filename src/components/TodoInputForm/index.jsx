import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../actions';
import styles from './TodoInputForm.module.sass';
import Input from './Input';
import classNames from 'classnames';

function TodoInputForm () {
  const dispatch = useDispatch();
  const { createTodo } = bindActionCreators(actionCreators, dispatch);
  const initialValues = { todo: '' };
  const submitHandler = ({ todo }, formikBag) => {
    createTodo(todo);
    formikBag.resetForm();
  };
  const classes = {
    valid: styles.valid,
    invalid: styles.invalid,
    input: styles.input,
  };
  const TODO_SCHEMA = yup.object({
    todo: yup
      .string()
      .max(50, 'Too big task :)')
      .matches(/^\S+.*/, 'No spaces in start')
      .required('Enter task'),
  });
  const [isVisible, setIsVisible] = useState(false);
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
        <Field
          type='text'
          name='todo'
          placeholder='Enter todo here'
          className={styles.input}
          onFocus={focusHandler}
        />

        <button type='submit' className={buttonStyles}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default TodoInputForm;
