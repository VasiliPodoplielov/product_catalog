import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFieldValid, setEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setPasswordFieldValid] = useState(true);

  return (
      <div className='auth__wrapper'>
        <form className="auth__form">
          <p className="form__title">Вход</p>
          <div className="auth__form-group form-group">
            <label htmlFor="email">Логин</label>
            <input
                type="email"
                className="form-control"
                id="email" aria-describedby="emailHelp"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailFieldValid ? <small className="form-text text-danger">Поле обязательно для заполнения</small> : ''}
          </div>
          <div className="auth__form-group form-group">
            <label htmlFor="password">Пароль</label>
            <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordFieldValid ? <small className="form-text text-danger">Поле обязательно для заполнения</small> : ''}
          </div>
          <button type="submit" className="btn btn-primary">Вход</button>
        </form>
      </div>
  );
};

export default Auth;
