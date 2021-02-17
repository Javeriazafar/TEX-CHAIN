const express= require('express');
const db = require('./db');
const bodyParser = require('body-parser');
//const env= require('dotenv');
const cors= require('cors');
const app= express();
app.use(cors());
app.use(express.json());
const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:8545"
);
const truffle_connect = require('./connections/conn.js');

const port = 3000 || process.env.PORT;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/manufacturer',(req,res)=>{
  console.log('get items')
  console.log(req.params)


 
    db.query('select * from manufacturer', (err, result)=>{

        if(err)
        {
            console.log(err)
        }
        res.send(result);
    })
});

app.get('/manufacturer/:id',(req,res)=>{
    db.query('select * from manufacturer where manu_id=?',[req.params.id], (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        res.send(result);
    })
});

app.post("/create", (req, res) => {
    const manu_name = req.body.manu_name;
    const user_id = req.body.user_id;
    const description = req.body.description;
    const image =req.body.image;

    
  console.log(req.body)
    db.query(
      "INSERT INTO manufacturer (manu_name, user_id, description, image) VALUES (?,?,?,?)",
      [manu_name, user_id, description, image],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(req.body);
        }
      }
    );

  });

app.put("/updatemanufacturer",(req,res)=>{
  const manu_name= req.body.manu_name;
  const user_id = req.body.user_id;
  const manu_id = req.body.manu_id;
  const description = req.body.description;
  const image = req.body.image;

  db.query(
    "UPDATE manufacturer SET description = ? WHERE manu_id = ?",
    [description,manu_id],
  (error,result)=>{
    if(error){
      console.log(error.message)
    }
    else{
      res.send(result)
    }
  });

});


app.delete("/delete/:manu_id", (req,res)=>{
  const manu_id= req.params.manu_id;

  db.query('DELETE FROM manufacturer WHERE manu_id = ?',manu_id,(error,result)=>{
    if(error)
    console.log(error)
    else
    res.send('deleted!')
  })
})


app.listen(3001, ()=> {

  const provider = new Web3.providers.HttpProvider(
    "http://127.0.0.1:8545"
  );
  const web3 = new Web3(provider);
  console.log("No web3 instance injected, using Local web3.");
  let currentAcount= web3.eth.getAccounts();
  truffle_connect.web3 = new Web3(provider)
     truffle_connect.start(currentAcount[0], function(status) {
    console.log(status);
    
   })

   console.log(`server is running on : ${port}`)

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
 });