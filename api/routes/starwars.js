const starwarsObj = require('starwars-names')
const { map, keys, prop, append } = require('ramda')
const uuid = require('uuid')

const names = starwarsObj.all

const createStarwars = n => ({
  id: uuid.v4(),
  name: n,
  value: null
})

var starwars = map(createStarwars, names)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
  app.post('/starwars', (req, res) => {
    starwars = append(createStarwars(req.body.name), starwars)
    res.send({ ok: true })
  })
}
