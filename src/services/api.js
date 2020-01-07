export default class Api {
  _apiBase = `http://localhost:3000/api`;

  async callApi(method, uri, body) {
    const headers = {};
    const res = await fetch(`${this._apiBase}${uri}`, {
      method,
      mode: 'cors',
      headers,
      body: method !== 'GET' ? JSON.stringify(body) : null,
    });

    if (!res.ok) {
      const err = new Error(`Ошибка Авторизации`);
      err.subMessage = 'Неверное имя пользователя или пароль';
      throw err;
    }

    return await res.json();
  }

  //TODO Дописать вызов api

}