const express = require('express')

const app = express()



app.use(express.static(`${__dirname}/public`))

let carDatabase = ['Mercedes-Benz', 'Toyota', 'Lexus', 'Subaru', 'Dodge', 'Tesla']



app.get('/car', (req, res) => {
    let randomIndex = Math.floor(Math.random() * carDatabase.length + 1)
    
    res.status(200).send(carDatabase[randomIndex])
})



app.listen(4000, () => console.log('server is running on port 4000'))