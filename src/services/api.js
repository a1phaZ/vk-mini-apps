export default class Api {
  _apiBase = `http://localhost:3000/api`;

  async callApi(method, uri, body) {
    const { token, ...bodyFields} = body;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token ? `Token ${token}` : '',
    };
    const res = await fetch(`${this._apiBase}${uri}`, {
      method,
      mode: 'cors',
      headers,
      body: method !== 'GET' ? JSON.stringify(bodyFields) : null,
    });

    if (!res.ok) {
      const err = new Error(`Ошибка Авторизации`);
      err.subMessage = 'Неверное имя пользователя или пароль';
      throw err;
    }

    return await res.json();
  }

  //TODO Дописать вызов api
  /**
   * User api
   */
  async userLogin(body) {
    return await this.callApi('POST', '/users/login', body);
  }

  async userRegister(body) {
    return await this.callApi('POST', '/users', body);
  }

  async userCurrent(body) {
    return await this.callApi('GET', '/users/current', body);
  }

  async userUpdate(body) {
    return await this.callApi('PUT', '/users/current', body);
  }
}
