/**
 * Includes
 */
const config = require('./config')

const express = require('express')
const path = require('path')
const cors = require('cors')

/**
 * Variables
 */
const app = new express()

const host = config.web.host
const port = config.web.port

/**
 * Settings
 */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname + '/public')))

/**
 * Routes
 */
app.get('/', (req, res) => {
    let data = {
        page: 'home'
    }

    res.render('home', data)
})

app.get('/lab', (req, res) => {
    let data = {
        page: 'lab'
    }

    res.render('lab', data)
})

/**
 * Server
 */
app.listen(port, () => {
    console.log(`Running @ ${host}:${port}`)
})