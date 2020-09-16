import React, {useEffect, useState} from 'react';
import './AuthForm.css';

const AuthForm = (props) => {
  const {formTitle, buttonTitle, authCallback} = props.options;
  const {registrationSuccessful, errorMessage} = props;
  const [email, setEmail] = useState(props.email || '');
  const [password, setPassword] = useState(props.password || '');
  const [isEmailFieldValid, setEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setPasswordFieldValid] = useState(true);


  useEffect(() => {
    if (registrationSuccessful) {
      setEmail('');
      setPassword('');
    }
  }, '');


  function onFormSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setEmailFieldValid(false);
      return;
    }
    if (!password.trim()) {
      setPasswordFieldValid(false);
      return;
    }

    authCallback(email, password);
  }

  let registrationResult = (
      <div className="registration-successful text-success">Вы успешно зарегистрированы</div>
  );

  return (
      <div className='auth__wrapper'>
        <form className="auth__form">
          <p className="form__title">{formTitle}</p>
          {
            errorMessage
            ? <p className='text-danger'>{errorMessage}</p>
                : null
          }
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
          {registrationSuccessful ? registrationResult : null}
          <button type="submit" className="btn btn-primary" onClick={e => onFormSubmit(e)}>{buttonTitle}</button>
        </form>
      </div>
  );
};

export default AuthForm;
