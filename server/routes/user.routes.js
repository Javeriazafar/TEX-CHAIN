const  express =  require("express");
const router = express.Router();
const db = require('../db');

const Userctl = require("../server");


// router.get("/getusers", Userctl.apiGetAllUsers);
router.route('/getall').get((req,res)=>{
 
        db.query('select * from user', (err, result)=>{
    
            if(err)
            {
                console.log(err)
            }
            res.send(result);
        })
    }
        )
router.route('/createuser').post((req, res) => {
  const data= req.body;
  console.log(req.body.us_name)
        const user_name = data.us_name;
        const password = data.password;
        const role_id = data.role;
        const account_address =data.Createdby;
        const email =data.email;
        const location =data.location;
    
        
      console.log(req.body.user_name)
        db.query(
          "INSERT INTO user (user_name,password,role_id,account_address,email,location) VALUES (?,?,?,?,?,?)",
          [user_name, password, role_id, account_address,email,location],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(req.body);
            }
          }
        );
    
      });
module.exports =  router;