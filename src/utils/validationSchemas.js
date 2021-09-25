import * as yup from 'yup';

export const TODO_SCHEMA = yup.object({
  todo: yup
    .string()
    .max(50, 'Too big task :)')
    .matches(/^[0-9A-Za-zА-Яа-я]+.*$/, 'Input correct task')
    .required('Enter task'), // тут оно, по сути, и не надо))
});
