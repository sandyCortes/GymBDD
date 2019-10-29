const express = require('express')
const router = express.Router()

const connection = require('./../connection')

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Users;', (err, rows, fiels) => {
        if(!err){
            res.json(rows)
        }else 
            console.log('Error: ', err)
    })
})

module.exports = router