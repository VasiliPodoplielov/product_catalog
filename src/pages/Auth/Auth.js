import React, {useState} from 'react';
import '../../components/AuthForm/AuthForm.css';
import AuthForm from "../../components/AuthForm/AuthForm";
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {userAuth, userRegistry} from "./authActions";

const Auth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const registrationSuccessful = useSelector(state => state.authReducer.registrationSuccessful);
  const errorMessage = useSelector(state => state.authReducer.errorMessage);

  const authFormOptions = {
    formTitle: 'Вход',
    buttonTitle: 'Войти',
    authCallback: (email, password) => dispatch(userAuth(email, password))
  };

  const registryFormOptions = {
    formTitle: 'Регистрация',
    buttonTitle: 'Зарегистрировать',
    authCallback: (email, password) => dispatch(userRegistry(email, password))
  };


  return (
      <AuthForm
          options={location.pathname === '/auth' ? authFormOptions : registryFormOptions}
          registrationSuccessful={location.pathname === '/auth' ? false : registrationSuccessful}
          errorMessage={errorMessage}
      />
  );
};

export default Auth;
