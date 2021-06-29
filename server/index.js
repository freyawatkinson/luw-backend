const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors)

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "paswordhere",
  database: "databasenamehere"
});

app.post('/register', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result) => {
    console.log(err)
  });

});


app.post('/login', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, result) => {

    if (err) {
      res.send({ err: err });

    } 
      if (result.length > 0) {
        res.send(result)
      } else {
        res.send("Wrong Username or Password")
      }
    
  });

});

app.listen(3002, () => {
  console.log('Server is working! Hello from Freya')
});


// const PORT = process.env.PORT || 3001;

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });



// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });