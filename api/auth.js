const jwt = require('jsonwebtoken')
const config = require('./config')
const verifyToken = authorizationHeader => {
  try {
    if (authorizationHeader === undefined) return false
    const token = authorizationHeader.split(' ')[1]
    const verifiedToken = jwt.verify(token, config.JWT_SECRET)
    return verifiedToken
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = {
  async auth(req, res, next) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      const token = await verifyToken(req.headers.authorization)
      if (token === false || token === undefined) {
        return res.status(401).send({
          error: 'no token found',
        })
      } else next()
    } else {
      return res.status(401).send({
        error: 'token is invalid',
      })
    }
  },
}
