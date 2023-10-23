export class GetNews {
  constructor(baseUrl, keyword) {
    this.baseUrl = baseUrl;
    this.keyword = keyword;
    this._APIkey = '&apiKey=e4ca032cdd8f468db6a0d54decab9ecc';
    this._auth = '"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzAyNmFmYjgxNTZmYjk0M2IzOGZhYjc1ODBiNzg3OCIsInN1YiI6IjY1MzIzODZjNDgxMzgyMDBlMjg5Njg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JfSWLeYQU-I7u0y5nGo66ztnBnd9G6X-_Gbj3VIb3Rk"';
  }

  fetchData() {
    return fetch(`${this.baseUrl}${this.keyword}${this._APIkey}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        // 'Authorization': `${this._auth}`
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