const emojiObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createEmoji = e => ({
  id: uuid.v4(),
  name: e,
  value: prop(e, emojiObj)
})
const emojis = map(createEmoji, keys(emojiObj))

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
