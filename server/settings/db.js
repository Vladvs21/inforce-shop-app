const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inforce-shop-app-db'
})

connection.connect((error) => {
    if(error) return console.log("Connection error!")
    else console.log("Connection successfull")
})

module.exports = connection