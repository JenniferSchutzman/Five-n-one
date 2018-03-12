const buzzObj = require('buzzwords')
const { map, keys, prop, propOr, append } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

// const createBuzzword = b => ({
//   id: uuid.v4(),
//   name: b,
//   value: prop(b, buzzObj)
// })

const createBuzzword = b => ({
  id: uuid.v4(),
  name: b,
  value: null
})

var buzzwords = map(createBuzzword, buzzObj)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })
  app.post('/buzzwords', bodyParser.json(), (req, res) => {
    const newBuzzword = propOr(null, 'body', req)
    if (newBuzzword) {
      buzzwords = append(createBuzzword(newBuzzword.name), buzzwords)
      res.send({ ok: true })
    } else {
      res.status(400).send({ ok: false })
    }
  })
}
