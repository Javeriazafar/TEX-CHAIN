import React from 'react';
//import web3 from '../web3';
import Provider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import {abi,bytecode} from '../contracts/Supplychain.json';
import { Button, Form, Container,Table} from 'semantic-ui-react';
import web3 from '../web3';

class Order extends React.Component{
    state={
        desc:'',
        _upc:'',
        i:0,
        machine:'',
        productupc:'',
        merch_id:'',
        treatments:'',
        empaddress:'',
        privatekey:'9ad55ba5bbefece176836f98bc15d15fdab54eecc7ba8f6e76d8e70fec27610c'


    }
    infuraKey =  'https://rinkeby.infura.io/v3/10cfdc60e2c841e4b03a5adf4abae931' ;

     

onSubmit=async(e)=>{
    e.preventDefault();
    const provider= new Provider(this.state.privatekey,this.infuraKey);
     const web3 =new Web3(provider);
     const supplychain_contract= new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
const response=await supplychain_contract.methods.orderByManufacturer(this.state.desc).call();

}

onpurchase=async(e)=>{
e.preventDefault();
const provider= new Provider(this.state.privatekey,this.infuraKey);
     const web3 =new Web3(provider);
     const supplychain_contract= new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
const accounts = '0x945eFB4DCaF6879dCC1D2b6924b9E7b3D81B2186';
console.log(web3.eth.getBalance(accounts).then(console.log));
const receiept= await supplychain_contract.methods.purchaseItemByManufacturer(this.state.upc,this.state.quantity,this.state.merch_address).send({
    from:accounts
})

console.log(receiept.transactionHash)
}

status=async(e)=>{
    e.preventDefault();
    const provider= new Provider(this.state.privatekey,this.infuraKey);
     const web3 =new Web3(provider);
     const supplychain_contract= new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
    const logger= await supplychain_contract.methods.fetchItemBufferOne(this.state.upc).call();
  console.log(logger);
}

createproduct=async(e)=>{
    e.preventDefault();
    const provider= new Provider(this.state.privatekey,this.infuraKey);
     const web3 =new Web3(provider);
     const supplychain_contract= new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
    const accounts = '0xebf665bf612b6d7c129d8926627d393e0a6a8199'
    console.log(this.state._upc,this.state.machine,this.state.productupc,this.state.merch_id,this.state.treatments,this.state.empaddress)
    const product= await supplychain_contract.methods.processedItemByManufacturer(this.state._upc,this.state.machine,this.state.productupc,this.state.merch_id,this.state.treatments,this.state.empaddress).send({
        from:accounts
    })
    console.log(product.transactionHash)
    //const output=receipt.events.logNewItem
//  const productupc =output.returnValues[0]
//  const sku=output.returnValues[2]
//  const sender=output.returnValues[3]
//  const treatments= output.returnValues[4]
//  const batch=output.returnValues[10]
 console.log(product.events.logNewItem)
 
}

productstatus=async(e)=>{
    e.preventDefault();
    const provider= new Provider(this.state.privatekey,this.infuraKey);
     const web3 =new Web3(provider);
     const supplychain_contract= new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
    const logger= await supplychain_contract.methods.fetchItemBufferThree(this.state.productupc).call();
  console.log(logger);
}

    render(){
        return(
            <div>
                 <Form onSubmit={this.onSubmit}>
                 <Form.Input type='text' value={this.state.desc} 
      onChange={(event)=>{this.setState({desc:event.target.value})}}
      label='desc' placeholder='Full Name' />
                       <Button loading={this.state.loading} type='submit' style={{border:'1px solid purple'}}>Submit</Button>

                 </Form>
            <h3>Purchase Raw Material from Supplier</h3>

            <Form onSubmit={this.onpurchase}>
                 <Form.Input type='text' value={this.state.upc} 
      onChange={(event)=>{this.setState({upc:event.target.value})}}
      label='upc' placeholder='Full Name' />
      
       <Form.Input type='text' value={this.state.quantity} 
      onChange={(event)=>{this.setState({quantity:event.target.value})}}
      label='quantity' placeholder='Full Name' />
       <Form.Input type='text' value={this.state.merch_address} 
      onChange={(event)=>{this.setState({merch_address:event.target.value})}}
      label='merch_address' placeholder='Full Name' />
                       <Button loading={this.state.loading} type='submit' style={{border:'1px solid purple'}}>Submit</Button>
<Button onClick={this.status}>CHECK STATUS</Button>
                 </Form>


                 <Form onSubmit={this.createproduct}>
                 <Form.Input type='text' value={this.state._upc} 
      onChange={(event)=>{this.setState({_upc:event.target.value})}}
      label='_upc' placeholder='Full Name' />
       <Form.Input type='text' value={this.state.merch_id} 
      onChange={(event)=>{this.setState({merch_id:event.target.value})}}
      label='merch_id' placeholder='Full Name' />
       <Form.Input type='text' value={this.state.empaddress} 
      onChange={(event)=>{this.setState({empaddress:event.target.value})}}
      label='empaddress' placeholder='Full Name' />
        <Form.Input type='text' value={this.state.treatments} 
      onChange={(event)=>{this.setState({treatments:event.target.value})}}
      label='treatments' placeholder='Full Name' />
        <Form.Input type='text' value={this.state.productupc} 
      onChange={(event)=>{this.setState({productupc:event.target.value})}}
      label='productupc' placeholder='Full Name' />
         <Form.Input type='text' value={this.state.machine} 
      onChange={(event)=>{this.setState({machine:event.target.value})}}
      label='machine' placeholder='Full Name' />
                       <Button loading={this.state.loading} type='submit' style={{border:'1px solid purple'}}>Submit</Button>
                       <Button onClick={this.productstatus}>CHECK STATUS</Button>
                 </Form>
            </div>
        )
    }
}

export default Order;