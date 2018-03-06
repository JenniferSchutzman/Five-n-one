const starwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createStarwars = n => ({
  id: uuid.v4(),
  name: n,
  value: prop(n, starwarsObj)
})

const starwars = map(createStarwars, keys(starwarsObj))

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
