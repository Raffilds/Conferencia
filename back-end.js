const express = require("express");

const app = express();

//DB CONEXÃO My SQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'db_pdx',
    password: 'P3dr3x@2018',
    database: 'conferencia'
})

connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
})

connection.query('SELECT * FROM cadastro', function(err, rows, fileds){
    if (!err){
        console.log('Resultado: ', rows );
    }else{
        console.log('Erro ao realizar a consulta');
    }
})


app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.listen(8080)