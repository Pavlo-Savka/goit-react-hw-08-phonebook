import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

import css from './LogInForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) return;
    Notify.info('You have entered incorrect information. Please try again.');
  });
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" required/>
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" required/>
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};