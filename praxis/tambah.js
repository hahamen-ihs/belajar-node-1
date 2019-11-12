const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    let a, b ,c
    a = 10
    b = 23
    c = a + b

    return res.send('The value of z is +z')
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send('The email value is +email')
})

app.post('/tambah', (req, res) => {
    let a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send('Hasil dari '+a+' dan '+b+' adalah '+c)
})

app.post('/kurang', (req, res) => {
    let a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a - b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send('Hasil dari '+a+' dan '+b+' adalah '+c)
})

app.post('/kali', (req, res) => {
    let a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a * b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send('Hasil dari '+a+' dan '+b+' adalah '+c)
})

app.post('/bagi', (req, res) => {
    let a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a / b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send('Hasil dari '+a+' dan '+b+' adalah '+c)
})



app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})