import { useState } from "react";

import { useDispatch } from "react-redux";

import { RotatingLines } from 'react-loader-spinner';

import { logOut } from "redux/auth/operations";
import { useAuth } from "Hooks/useAuth";

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
    setIsLogout(true);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
        {<RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="15"
          visible={isLogout}
        />}
      </button>
    </div>
  );
};