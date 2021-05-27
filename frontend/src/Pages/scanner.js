import React from 'react';
import Qrcode from 'qrcode';
import  QrcodeReader from 'react-qr-reader';
import Provider from '@truffle/hdwallet-provider';

import { Form, Input } from 'semantic-ui-react';
import web3 from '../web3';
 import {abi, bytecode} from '../contracts/Supplychain.json';
import Web3 from 'web3';


class Scan extends React.Component{


state={
    imageurl:'',
    code:'',
    scanResult:'',
    supplychain_contract:'',
    upc:'',
    supplier_name:'',
    longitutde:'',
    latitude:'',
    material:'',
    price:'',
    dye:'',
    supplier_address:'',
    quantity:'',
    reference_no:'',
    composition:'',
    privatekey:'9ad55ba5bbefece176836f98bc15d15fdab54eecc7ba8f6e76d8e70fec27610c'

}
 infuraKey =  'https://rinkeby.infura.io/v3/10cfdc60e2c841e4b03a5adf4abae931' ;

 //const fs = require('fs');
  mnemonic = "ribbon recipe fame lady brain elder peasant filter chunk danger fossil cloud";
// supplychain_contract = new web3.eth.Contract((abi),'0x54461BF3C444B783d6f59019AC57faf08E960bEA');


generate=async(e)=>{
    e.preventDefault();

    const provider= new Provider(this.state.privatekey,this.infuraKey);
    const web3 =new Web3(provider);
    const networkid= await web3.eth.net.getId();
    const supplychain_contract = new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
 const  accounts= '0xebf665bf612b6d7c129d8926627d393e0a6a8199';
 console.log(web3.eth.getBalance(accounts).then(console.log));   
 const receipt = await supplychain_contract.methods.itemBySupplier(this.state.upc,this.state.supplier_name,this.state.latitude,this.state.longitutde,this.state.material,this.state.price,this.state.quantity).send({
     from: accounts
 })
 console.log(receipt.transactionHash);


 const output=receipt.events.logNewItem
 const upc =output.returnValues[0]
 const user_address=output.returnValues[3]
 const quantity=output.returnValues[9]
 const price= output.returnValues[8]
 const material=output.returnValues[7]
     const value=` <div>
       Item Added Successfully: Product ID: ${upc} 
       <h3>Manaufactured By : ${user_address} </h3>
       <h3>Material : ${material} </h3>
       <h3>Longitude : ${receipt.events.logNewItem.returnValues[6]} </h3>
       <h3>Latitude : ${receipt.events.logNewItem.returnValues[5]} </h3>

     </div>`
     
     //console.log(value);
    const response=  Qrcode.toDataURL(value);
    console.log(response.then(res=>{
      
      //console.log(res)
      this.setState({imageurl:res});
    }));
  fetch('http://localhost:5000/user/createitem',{
    method :"POST",
    headers:{"content-type" : "application/json ;charset=UTF-8"},
    body:JSON.stringify({
      upc,
      user_address:this.state.supplier_address,
      composition:this.state.composition,
      quantity,
      price,
      material,
      reference_no:this.state.reference_no

    })
  })

}
handlescan=(result)=>{
    if(result){this.setState({scanResult:result})}

}
render(){
    return(


    <div>
        
            <Form onSubmit={this.onSubmit}>
            <Form.Group unstackable widths={2} >

<Form.Input type='text' value={this.state.supplier_name} 
onChange={(event)=>{this.setState({supplier_name:event.target.value})}}
label='supplier_name'  />

<Form.Input type='text' value={this.state.supplier_address} 
onChange={(event)=>{this.setState({supplier_address:event.target.value})}}
label='supplier_address'  />

</Form.Group>
<Form.Group unstackable widths={2} >

      <Form.Input type='text' value={this.state.longitutde} 
      onChange={(event)=>{this.setState({longitutde:event.target.value})}}
      label='longitutde'  />

      <Form.Input type='text' value={this.state.latitude} 
      onChange={(event)=>{this.setState({latitude:event.target.value})}}
      label='latitude'  />

    </Form.Group>
    <Form.Group unstackable widths={2} >

      <Form.Input type='text' value={this.state.quantity} 
      onChange={(event)=>{this.setState({quantity:event.target.value})}}
      label='quantity'  />

      <Form.Input type='text' value={this.state.material} 
      onChange={(event)=>{this.setState({material:event.target.value})}}
      label='material'  />

    </Form.Group>
    <Form.Group unstackable widths={2} >

<Form.Input type='text' value={this.state.price} 
onChange={(event)=>{this.setState({price:event.target.value})}}
label='price'  />

<Form.Input type='text' value={this.state.composition} 
onChange={(event)=>{this.setState({composition:event.target.value})}}
label='composition' />

</Form.Group>

<Form.Group unstackable widths={2} >



<Form.Input type='text' value={this.state.reference_no} 
onChange={(event)=>{this.setState({reference_no:event.target.value})}}
label='reference_no' />

<Form.Input type='text' value={this.state.upc} 
onChange={(event)=>{this.setState({upc:event.target.value})}}
label='upc' />

</Form.Group>

 
 <button onClick={this.generate}>GENERATE CODE</button>
 </Form>

 {this.state.imageurl?(<a href={this.state.imageurl} download><img src={this.state.imageurl} alt='imgcode'></img></a>):null}
       
       <QrcodeReader 
       delay={300}
       style={{width:'20%'}}
       onScan={this.handlescan}
       />
       <h3>scan result: {this.state.scanResult}</h3>
        </div>
        )
}
}

export default Scan;