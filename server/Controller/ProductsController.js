'use strict'

const db = require('../settings/db')

exports.getAll = (req, res) => {

    const sql = "SELECT * FROM product";
    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.send(results);
        }
    });
}

exports.create = (req, res) => {

    const sql = `INSERT INTO product (
        id,
        imageUrl,
        name,
        count,
        size,
        weight
    ) VALUES(
        '` + req.body.id + `',
        '` + req.body.imageUrl + `',
        '` + req.body.name + `',
        '` + req.body.count + `',
        '` + JSON.stringify(req.body.size) + `',
        '` + req.body.weight + `'
    )`;

    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else {
            res.send(results[0])
        }
    });
}

exports.update = (req, res) => {
    const sql = `UPDATE product SET 
        imageUrl = '` + req.body.imageUrl + `', 
        name = '` + req.body.name + `', 
        count = '` + req.body.count + `', 
        size = '` + JSON.stringify(req.body.size) + `', 
        weight = '` + req.body.weight + `' 
    WHERE id = ` + req.body.id + ``;

    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else {
            res.send(results[0])
        }
    })
}

exports.delete = (req, res) => {

    const sql = 'DELETE FROM product WHERE id = "' + req.params.id + '"';
    db.query(sql, (error, results) => {
        if(error){
            console.log(error);
        }else {
            res.send(results[0])
        }
    })
}