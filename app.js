/* Imports
*/
const config = require('./config')

const express = require('express')
const path = require('path')

/**
 * Init
 */
const app = new express()

/**
 * Variables
 */
const host = config.web.host
const port = config.web.port

/**
 * Config
 */
app.use(express.static(__dirname + '/public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

/**
 * Routes
 */
app.get('/', (req, res) => {
    let data = {
        title: 'home'
    }

    res.render('home', data)
})

app.get('/lab', (req, res) => {
    let data = {
        title: 'lab'
    }

    res.render('lab', data)
})

/**
 * Server
 */
app.listen(port, () => {
    console.log(`Running @ ${host}:${port}`)
})