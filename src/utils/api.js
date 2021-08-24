class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkErrors(res) {
        if (res.ok) {
          return res.json()
        } else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }

    getInitialCards() {
        return fetch(this._url + '/cards', {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkErrors)
    }

    getUserInfo() {
        return fetch(this._url + '/users/me', {
          method: 'GET',
          headers: this._headers
        })
        .then(this._checkErrors)
    }

    setUserInfoByApi(userData) {
        return fetch(this._url + '/users/me', {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: userData.name,
            about: userData.about
          })
        })
        .then(this._checkErrors)
    }

    addCard(data) {
        return fetch(this._url + '/cards', {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            link: data.link
          })
        })
        .then(this._checkErrors)
    }

    changeLikeCardStatus(id, isLiked) {
      return fetch(this._url + `/cards/likes/${id}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: this._headers
      })
        .then(this._checkErrors)
    }

    deleteCard(id) {
        return fetch(this._url + `/cards/${id}`, {
          method: 'DELETE',
          headers: this._headers
        })
        .then(this._checkErrors)
    }

    changeUserAvatar(userData) {
        console.log(userData);
        return fetch(this._url + '/users/me/avatar', {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: userData.avatar
          })
        })
        .then(this._checkErrors)
    }

    getData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }
}

export default new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
      authorization: '1e3ace66-7bc0-4085-a74d-3975b1264152',
      'Content-Type': 'application/json'
  }
});