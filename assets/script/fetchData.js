export class GetNews {
  constructor(baseUrl, keyword) {
    this.baseUrl = baseUrl;
    this.keyword = keyword;

    // if the page says Error 429 Too Many Requests please use another APIKey below
    // this._APIkey = '&apiKey=e4ca032cdd8f468db6a0d54decab9ecc';
    this._APIkey = '&apiKey=277dad093058421980894250311f4805';
  }

  fetchData() {
    return fetch(`${this.baseUrl}${this.keyword}${this._APIkey}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
      .then((respose) => {
        return respose.json();
      })
      .then((responseJson) => {
        if (responseJson.status === 'ok') {
          return Promise.resolve(responseJson.articles);
        } else {
          return Promise.reject(responseJson.message);
        }
      });
  }
}
