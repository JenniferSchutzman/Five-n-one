const starwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createStarwars = n => ({
  id: uuid.v4(),
  name: n,
  value: n
})

const starwars = map(createStarwars, keys(starwarsObj.all))

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
