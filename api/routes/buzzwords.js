const buzzObj = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createBuzzword = b => ({
  id: uuid.v4(),
  name: b,
  value: prop(b, buzzObj)
})
const buzzwords = map(createBuzzword, keys(buzzObj))

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })
}
