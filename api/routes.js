const errors = require('restify-errors')
const HighScore = require('./models')
const { auth } = require('./auth')

module.exports = server => {
  server.get('/highscores', auth, async (req, res, next) => {
    try {
      const highscore = await HighScore.find({}, null, {
        sort: { score: 1 },
      }).limit(10)
      res.send(highscore)
      next()
    } catch (err) {
      return next(new errors.InvalidContentError(err))
    }
  })

  server.post('/highscore', auth, async (req, res, next) => {
    const { name, score, time } = req.body
    const highScore = new HighScore({
      name,
      score,
      time,
    })

    try {
      const newHighScore = await highScore.save()
      res.send(201, newHighScore)
      next()
    } catch (error) {
      return next(new errors.InternalError(error.message))
    }
  })
}
