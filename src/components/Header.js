import React from 'react';
import logoImage from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn, email, onLogout }) {
  const { pathname } = useLocation();
  const linkText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
  const linkPath = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

  return (
    <header className="header">
      <img className="header__logo" src={logoImage} alt="Логотип" />
      {loggedIn ? (
        <div className='header__auth-info'>
          <span className='header__email'>{email}</span>
          <button className='header__auth-info-signout' onClick={onLogout}>Выйти</button>
        </div>
        )
        : (<Link to={linkPath} className="header__link">{linkText}</Link>)
      }
    </header>
  );
}

export default Header;
