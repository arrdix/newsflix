export class GetNews {
  constructor(baseUrl, keyword) {
    this.baseUrl = baseUrl;
    this.keyword = keyword;
    this._APIkey = '&apiKey=277dad093058421980894250311f4805';
    this._auth = '"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzAyNmFmYjgxNTZmYjk0M2IzOGZhYjc1ODBiNzg3OCIsInN1YiI6IjY1MzIzODZjNDgxMzgyMDBlMjg5Njg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JfSWLeYQU-I7u0y5nGo66ztnBnd9G6X-_Gbj3VIb3Rk"';
  }

  fetchData() {
    return fetch(`${this.baseUrl}${this.keyword}${this._APIkey}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `${this._auth}`
      }
    })
    .then(respose => {
      return respose.json();
    })
    .then(responseJson => {
      if (responseJson.articles.length < 4) {
        return Promise.reject(`Can't find headline news related to ${this.keyword}`);
      } else {
        return Promise.resolve(responseJson.articles);
      }
    })
  }
}