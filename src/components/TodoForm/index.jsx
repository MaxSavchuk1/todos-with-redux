import { Form, Formik } from 'formik';
import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../actions';
import styles from './TodoForm.module.sass';
import Input from '../Input';
import { TODO_SCHEMA } from '../../utils/validationSchemas';

function TodoForm () {
  const dispatch = useDispatch();
  const { createTodo } = bindActionCreators(actionCreators, dispatch);
  const initialValues = { todo: '', isDone: false };
  const submitHandler = (values, formikBag) => {
    createTodo(values);
    formikBag.resetForm();
  };
  const inputClasses = {
    valid: styles.valid,
    invalid: styles.invalid,
    input: styles.input,
    errorStyle: styles.error,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TODO_SCHEMA}
    >
      <Form className={styles.formContainer}>
        <Input
          type='text'
          name='todo'
          placeholder='Enter todo here'
          classes={inputClasses}
        />
        <button type='submit' className={styles.button}>
          SUBMIT
        </button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
