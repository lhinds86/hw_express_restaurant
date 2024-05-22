const express = require('express')
const cors = require('cors')

const appetizersController = require('./controller/appetizersController')
const entreesController = require('./controller/entreesController')
const dessertsController = require('./controller/dessertsController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('OK Working')
})

// APPETIZERS
app.get('/appetizers', appetizersController.getAppetizers)
app.get('/appetizer/:id', appetizersController.getAppetizer)

// ENTREES
app.get('/entrees', entreesController.getEntrees)
app.get('/entree/:id', entreesController.getEntree)

// DESSERTS
app.get('/desserts', dessertsController.getDesserts)
app.get('/dessert/:id', dessertsController.getDessert)