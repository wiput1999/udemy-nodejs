const express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v.1.0'
    })
})

app.get('/users', (req, res) => {
    res.status(200).send([{
            name: 'Mark',
            age: 30
        }, {
            name: 'Bill',
            age: 25
        }, {
            name: 'Elon',
            age: 28
        }])
})

app.listen(3000)

module.exports.app = app
