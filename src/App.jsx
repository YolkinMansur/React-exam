import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input
          {...register('firstName', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов',
            },
          })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
      </div>
      <label>
        Last Name:
        <input
          {...register('lastName', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов',
            },
          })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
      </div>
      <input type="submit" disabled={!isValid} />
    </form>
  );
}

export default App;
