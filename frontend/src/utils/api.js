class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  //Шаблон запроса
  _sendRequest(path, parameters) {
    return fetch(`${this._url}/${path}`, parameters).then((res) =>
      res.ok ? res.json() : Promise.reject(res.status)
    );
  }

  getCardList() {
    return this._sendRequest(`cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._sendRequest(`users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  postCard(name, link) {
    return this._sendRequest(`cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  changeUserInfo(formValues) {
    return this._sendRequest(`users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: formValues.name,
        about: formValues.about,
      }),
    });
  }

  changeAvatar(avatarLink) {
    return this._sendRequest(`users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this._sendRequest(`cards/likes/${id}`, {
        method: "PUT",
        headers: this._headers,
      });
    } else {
      return this._sendRequest(`cards/likes/${id}`, {
        method: "DELETE",
        headers: this._headers,
      });
    }
  }

  putLike(id) {
    return this._sendRequest(`cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteLike(id) {
    return this._sendRequest(`cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  deleteCard(id) {
    return this._sendRequest(`cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-23",
  headers: {
    authorization: "ac575190-0d35-42fd-b4c8-6b2b3e6183a4",
    "Content-Type": "application/json",
  },
});
