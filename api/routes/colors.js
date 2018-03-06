const csscolorsObj = require('css-color-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
/*  TAKES IN K AND RETURN AN OBJECT WITH 3 PROPS  */
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})
/*
- NEXT THE COLORS MAPS OVER THE ...... AND RETURN AN ARRAY OF THE PROPS
 */
const colors = map(createColor, keys(csscolorsObj))
/* */
module.exports = app => {
  app.get('/colors', (req, res) => {
    res.send(colors)
  })
}
