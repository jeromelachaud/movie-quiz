const HighScore = require('./models')
const { auth } = require('./auth')

module.exports = server => {
  server.get('/highscores', auth, async (req, res, next) => {
    const { limit } = req.query
    try {
      const highScores = await HighScore.find({}, null, {
        sort: { score: -1 },
      }).limit(parseInt(limit))
      res.status(201).send(highScores)
      next()
    } catch (error) {
      console.log('error', error)
      res.status(404).send({ error: 'an error occurred' })
    }
  })

  server.delete('/highscores', auth, async (req, res, next) => {
    try {
      await HighScore.deleteMany({})
      res.status(200).send('OK')
      next()
    } catch (error) {
      console.log('error', error)
      res.status(500).send({ error: 'an error occurred' })
    }
  })

  server.post('/highscore', auth, async (req, res, next) => {
    const { name, score, time } = req.body.data
    const highScore = new HighScore({
      name,
      score,
      time,
    })

    try {
      const newHighScore = await highScore.save()
      res.status(201).send(newHighScore)
      next()
    } catch (error) {
      console.log('error', error)
      res.status(500).send({ error: 'an error occurred' })
    }
  })
}
