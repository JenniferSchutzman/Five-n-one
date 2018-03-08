const starwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const names = starwarsObj.all

const createStarwars = n => ({
  id: uuid.v4(),
  name: n,
  value: null
})

const starwars = map(createStarwars, names)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
