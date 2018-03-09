const cookieObj = require('fortune-cookie')
const fortuneCookies = require('fortune-cookie')
const { map, keys, prop, append } = require('ramda')
const uuid = require('uuid')
// create color document
/*  TAKES IN K AND RETURN AN OBJECT WITH 3 PROPS  */
const createCookie = c => ({
  id: uuid.v4(),
  name: c,
  value: prop(c, cookieObj)
})
/*
- NEXT THE COLORS MAPS OVER THE ...... AND RETURN AN ARRAY OF THE PROPS
 */
const fortune = map(createCookie, keys(cookieObj))

var cookies = map(createCookie, fortuneCookies)
/* */
module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(cookies)
  })
}
