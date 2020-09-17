import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser, signOut} from "../../pages/Auth/authActions";
import firebase from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();
  let userEmail = useSelector(state => state.authReducer.userEmail);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(setCurrentUser(user.email));
      }
    });
  }, []);

  let actionsButtons;

  if (userEmail) {
    actionsButtons = (
        <button
            type="button"
            className="btn btn-outline-primary btn-sm actions__logout"
            onClick={() => dispatch(signOut())}
        >
          Выйти
        </button>
    )
  } else {
    actionsButtons = (
        <React.Fragment>
          <Link to="/auth">
            <button type="button" className="btn btn-outline-primary btn-sm actions__login">Войти</button>
          </Link>
          <Link to="/registry">
            <button type="button" className="btn btn-outline-primary btn-sm">Регистрация</button>
          </Link>
        </React.Fragment>
    )
  }

  return (
      <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navigation">
              <Link to="/">
                <span className="navbar-brand">Каталог</span>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="header__right">
              <div className="user__info">
                {userEmail ? <span className="user__name">{userEmail}</span> : null}
              </div>
              <div className="header__actions">
                {actionsButtons}
              </div>
            </div>
          </nav>
      </header>
  );
};

export default Header;
