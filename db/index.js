const {Client} = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'express'
})

client.connect()

module.exports = {
    query: (config, values, callback) => client.query(config, values, callback)
}