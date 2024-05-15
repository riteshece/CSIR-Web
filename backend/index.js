const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jaipal123@",
    database:"users"
})
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;        
    }
    console.log('Connected to MySQL database');
});

// app.post('/signup',(req,res)=>{
//     const sql ="INSERT INTO login ('name','email','password' ) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql,[values],(err,data)=>{
//         if(err){
//             return res.json("Error")  
//         }
//         return res.json(data);
//     })
// })
// Define '/signup' route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Insert user details into the database
    const sql = 'INSERT INTO signup (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user details:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log('User signed up successfully');
        res.status(201).json({ message: 'User signed up successfully' });
    });
});
app.post('/login',(req,res)=>{
    // console.log("bdfcdlfsdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",req.body)
    const query = `SELECT * FROM signup WHERE email = ? AND password = ?`;
    db.query(query,[ req.body.email, req.body.password],(err,data)=>{
        console.log(data)
        if(err){
            return res.json("Error")  
        }
        if(data.length > 0){
            return res.json("Success");
            
        } else {
            return res.json("Failed")
        }
    })
})

app.listen(8081,()=>{
    console.log("Server Successfully Running on Port 8081");
})
