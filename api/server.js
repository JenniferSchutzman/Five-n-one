const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const starwarsRoutes = require('./routes/starwars')
const buzzwordRoutes = require('./routes/buzzwords')
const cookieRoutes = require('./routes/fortune-cookies')
const emojiRoutes = require('./routes/emojis')
const bodyParser = require('body-parser')
const app = express()

app.use(cors({ credentials: true }))
app.use(bodyParser.json())
// load routes here
colorRoutes(app)
starwarsRoutes(app)
buzzwordRoutes(app)
cookieRoutes(app)
emojiRoutes(app)

app.get('/', (req, res) => res.send('5n1 API Server'))

app.listen(5000)
console.log('Server listening at 5000')
