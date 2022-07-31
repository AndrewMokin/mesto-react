export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  getUserInfo() {
    return fetch(`${this._address}/users/me `, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }
  addCard(item) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    }).then(this._checkResponse);
  }
  deleteCard(data) {
    return fetch(`${this._address}/cards/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  changeAvatar(item) {
    return fetch(`${this._address}/users/me/${"avatar"} `, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: item.avatar,
      }),
    }).then(this._checkResponse);
  }
  setUserInfo(item) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      }),
    }).then(this._checkResponse);
  }
  changeLikeCardStatus(data, isLiked) {

    if (isLiked) {
      return fetch(`${this._address}/cards/${data._id}/likes`, {
        method: "PUT",
        headers: {
          authorization: this._token,
        },
      }).then(this._checkResponse);
    }
    else {
      return fetch(`${this._address}/cards/${data._id}/likes`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
        },
      }).then(this._checkResponse);
    }

  }
}
