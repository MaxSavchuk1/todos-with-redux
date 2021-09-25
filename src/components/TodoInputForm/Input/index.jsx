import { useField } from 'formik';
import React from 'react';

function Input (props) {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
}

export default Input;
