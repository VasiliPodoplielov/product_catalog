import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
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
                <span className="user__name">Имя юзера</span>
              </div>
              <div className="header__actions">
                <Link to="/auth">
                  <button type="button" className="btn btn-outline-primary btn-sm actions__login">Войти</button>
                </Link>
                <Link to="/registry">
                  <button type="button" className="btn btn-outline-primary btn-sm">Регистрация</button>
                </Link>
              </div>
            </div>
          </nav>
      </header>
  );
};

export default Header;
