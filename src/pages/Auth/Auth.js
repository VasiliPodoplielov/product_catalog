import React from 'react';
import './Auth.css';

const Auth = () => {
  return (
      <div className='auth__wrapper'>
        <form className="auth__form">
          <p className="form__title">Вход</p>
          <div className="auth__form-group form-group">
            <label htmlFor="exampleInputEmail1">Логин</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small className="form-text text-danger">Поле обязательно для заполнения</small>
          </div>
          <div className="auth__form-group form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
            <small className="form-text text-danger">Поле обязательно для заполнения</small>
          </div>
          <button type="submit" className="btn btn-primary">Вход</button>
        </form>
      </div>
  );
};

export default Auth;
