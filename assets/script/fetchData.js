export class GetNews {
  constructor(baseUrl, keyword) {
    this.baseUrl = baseUrl;
    this.keyword = keyword;
    this._APIkey = '&apiKey=277dad093058421980894250311f4805';
  }

  fetchData() {
    return fetch(`${this.baseUrl}${this.keyword}${this._APIkey}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      }
    })
    .then(respose => {
      return respose.json();
    })
    .then(responseJson => {
      if (responseJson.status === 'ok') {
        return Promise.resolve(responseJson.articles);
      } else {
        return Promise.reject(responseJson.message);
      }
    })
  }
}