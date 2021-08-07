class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  //Шаблон запроса
  _sendRequest(path, parameters) {
    return fetch(`${this._url}/${path}`, parameters).then((res) =>
      res.ok ? res.json() : Promise.reject(res)
    );
  }

  getCardList(token) {
    return this._sendRequest(`cards`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  //getUserInfo() {
  //  return this._sendRequest(`users/me`, {
  //    method: "GET",
  //    headers: this._headers,
  //  });
  //}

  postCard(token, name, link) {
    return this._sendRequest(`cards`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  changeUserInfo(token, formValues) {
    return this._sendRequest(`users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.name,
        about: formValues.about,
      }),
    });
  }

  changeAvatar(token, avatarLink) {
    return this._sendRequest(`users/me/avatar`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    });
  }

  changeLikeCardStatus(token, id, notLikedYet) {
    if (notLikedYet) {
      return this._sendRequest(`cards/${id}/likes`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } else {
      return this._sendRequest(`cards/${id}/likes`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    }
  }

//  putLike(token, id) {
//    return this._sendRequest(`cards/likes/${id}`, {
//      method: "PUT",
//      headers: {
//        Authorization: `Bearer ${token}`,
//        "Content-Type": "application/json",
//      },
//    });
//  }

//  deleteLike(token, id) {
//    return this._sendRequest(`cards/likes/${id}`, {
//      method: "DELETE",
//      headers: {
//        Authorization: `Bearer ${token}`,
//        "Content-Type": "application/json",
//      },
//    });
//  }

  deleteCard(token, id) {
    return this._sendRequest(`cards/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
}

export const api = new Api({
  baseUrl: "https://api.mesto.maratb.nomoredomains.monster",
});
