import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import '../App.css';
import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import RemovePlacePopup from './RemovePlacePopup';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoToolTip';
import api from '../utils/api.js';
import * as auth from '../utils/auth.js';
import resolveIcon from '../images/res.png';
import rejectIcon from '../images/rej.png';

import { CurrentUserContext } from '../contexts/CurrentUserContext';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({
    icon: '',
    text: ''
  });
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const history = useHistory();
  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setEmail(email);
        setLoggedIn(true);
        history.push('/');
        setMessage({ 
          icon: resolveIcon, 
          text: 'Вы успешно вошли!' 
        });
        setInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.error(err);
        setMessage({ 
          icon: rejectIcon, 
          text: 'Что-то пошло не так! Попробуйте ещё раз.' 
        });
        setInfoTooltipOpen(true);
      });
  }

  function handleRegister(email, password) {
    auth.register(email, password)
      .then((data) => {
        if(data) {
          localStorage.setItem('jwt', data.jwt);
          setEmail(data.data.email);
        }
        history.push('/sign-in');
        setMessage({ 
          icon: resolveIcon, 
          text: 'Вы успешно зарегистрировались!' 
        });
        setInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.error(err);
        setMessage({ 
          icon: rejectIcon, 
          text: 'Что-то пошло не так! Попробуйте ещё раз.' 
        });
        setInfoTooltipOpen(true);
      });
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setEmail('');
    setLoggedIn(false);
    history.push('/sign-in');
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.getContent(jwt)
        .then((res) => {
          if (res){
            setEmail(res.data.email);
            }
            setLoggedIn(true);
            history.push('/');
        })
        .catch((err) => {
          console.error(err);
          setMessage({ 
            icon: rejectIcon, 
            text: 'Что-то пошло не так! Попробуйте ещё раз.' 
          });
          setInfoTooltipOpen(true);
        });
    }
  }, []);

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    owner: { name: '' }
  });
  const [currentUser, setCurrentUser] = useState({
    name: 'Loading...',
    about: ''
  });
  const [cards, setCards] = useState([]);
  const [useCardId, setUseCardId] = useState('');

  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isRemovePlacePopupOpen, setIsRemovePlacePopupOpen] = useState(false);
  

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }
  
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('mousedown', handleOverlayClose);
  
    return () => {
      window.removeEventListener('keydown', handleEscClose);
      window.removeEventListener('mousedown', handleOverlayClose);
    };
  })

  const handleAddPlaceSubmit = (values) => {
    api.addCard(values)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleUpdateAvatar = ({ avatar }) => {
    api.changeUserAvatar({ avatar })
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();

      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleUpdateUserInfo = (data) => {
    api.setUserInfoByApi(data)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then(res => {
        const newCards = cards.map(item => item._id === card._id ? res : item);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleCardDelete = () => {
    api.deleteCard(useCardId)
      .then(res => {
        const newCards = cards.filter(item => item._id === useCardId ? null : item);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleTrashClick = (card) => {
    setIsRemovePlacePopupOpen(true)
    setUseCardId(card._id)
  }
  function handleEditAvatarClick() {
      setIsAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
      setIsProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(data) {
      setSelectedCard({
        isOpen: true,
        ...data
      });
  }

  function closeAllPopups() {
      setSelectedCard({
        isOpen: false,
        owner: { name: '' }
      });
      setIsAddPlacePopupOpen(false);
      setIsAvatarPopupOpen(false);
      setIsProfilePopupOpen(false);
      setIsRemovePlacePopupOpen(false);
      setInfoTooltipOpen(false);
  }

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);
  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header 
        loggedIn={loggedIn}
        email={email}
        onLogout={handleLogout}
      />
      <Switch>
      <ProtectedRoute exact path="/" loggedIn={loggedIn} handleLogout={handleLogout} component={Main} 
      onCardClick={handleCardClick}
      isEditAvatarPopupOpen={handleEditAvatarClick}
      isEditProfilePopupOpen={handleEditProfileClick}
      isAddPlacePopupOpen={handleAddPlaceClick}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleTrashClick}
      />
      <Route path='/sign-in'>
                <Login 
                  onLogin={handleLogin}
                />
              </Route>
              <Route path='/sign-up'>
                <Register 
                  onRegister={handleRegister}
                />
              </Route>
              <Route>
                {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
              </Route>
      </Switch>
      <Footer />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        message={message}
        name={"tooltip"}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUserInfo}
      />
      <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
      />
      <RemovePlacePopup
          isOpen={isRemovePlacePopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
