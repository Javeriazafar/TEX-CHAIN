const AdminUser = artifacts.require("AdminUser");
const ganache = require('ganache-cli');
const assert = require('assert');
const truffleAssert = require('truffle-assertions')
var Contract = require('web3-eth-contract');
const Web3= require('web3');
const web3= new Web3(ganache.provider());

let accounts;
// let factory;
// let campaignaddress;
 let campaign;
let contract;
// beforeEach (async ()=>{
//     accounts = await new web3.eth.getAccounts();
//    console.log('attempting to deploy from', accounts[0]);
  
//   factory = await new web3.eth.Contract(Registration.abi)
//      .deploy({data: Registration.bytecode})
//     .send({from: accounts[0], gas: '1000000' });

   
   
   

// })

// describe('Campaigns', ()=>{
//   // console.log(JSON.parse(compiledCampaign.metadata).output.abi )
  
//     it('start to end testing ',async()=>{
       
// //console.log(web3.eth.getBalance(accounts[1]).then(console.log));
//         let balance= await web3.eth.getBalance(accounts[1]);
//         console.log(balance);
//         balance= web3.utils.fromWei(balance.toString(), 'ether');
//         console.log(balance);
//         balance= parseFloat(balance);
//        console.log(balance);

//         assert(balance>103);

//     })
// });

before('setup contract', async () => {
    contract = await AdminUser.deployed();
   // console.log(contract.address)
    accounts = await new web3.eth.getAccounts();
})
it('should register a new user', async () => {

    let balance= await web3.eth.getBalance(accounts[0]);
    //console.log(balance);
    assert.ok(contract.address);
})
it('create item',async()=>{
        console.log( campaign= await contract.contract.methods.authorizedCaller(accounts[0]).send({
            from: accounts[0], gas:'1000000'
        }).then(receipt=> {consol.log(receipt)}));
        assert.strictEqual(authorizedCaller,accounts[0])
})