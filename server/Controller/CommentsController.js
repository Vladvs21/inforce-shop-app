'use strict'

const db = require('../settings/db')

exports.getAll = (req, res) => {

    const sql = "SELECT * FROM comment";
    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.send(results);
        }
    });
}

exports.create = (req, res) => {

    const sql = `INSERT INTO comment (
        id, 
        productId, 
        description, 
        date
    ) VALUES(
        '` + req.body.id + `',
        '` + req.body.productId + `',
        '` + req.body.description + `', 
        '` + req.body.date + `'
    )`;

    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else {
            res.send(results[0])
        }
    });
}

exports.delete = (req, res) => {
    
    const sql = 'DELETE FROM comment WHERE id = "' + req.params.id + '"';
    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else {
            res.send(results[0])
        }
    })
}