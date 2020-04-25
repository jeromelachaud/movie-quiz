module.exports = {
  maxNumberOfCorrectAnswers: 15,
  minNumberOfCorrectAnswers: 13,
  tmdbApiKey: process.env.REACT_APP_TMDB_API_API_KEY,
  tmdbApiBaseUrl: 'https://api.themoviedb.org/3/movie',
  tmdbApiImagesBaseUrl: 'https://image.tmdb.org/t/p/w200',
  jwtToken: process.env.REACT_APP_JWT_TOKEN,
  baseUrl:
    process.env.REACT_APP_NODE_ENV === 'production'
      ? `https://${process.env.REACT_APP_HOST}`
      : 'http://localhost:9000',
}
