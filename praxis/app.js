const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})


app.post('/tambah', (req, res) => {
    let a, b, c

    a = parseInt(req.body.a,10)
    b = parseInt(req.body.b,10)
    c = a + b
    
    return res.send(`Hasil dari ${a} dan ${b} ternyata ${c}`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})