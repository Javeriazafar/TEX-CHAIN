import React from 'react';
import web3 from '../web3';
import Provider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import {abi,bytecode} from '../contracts/Supplychain.json';
import { Form, Input } from 'semantic-ui-react';


class Brand extends React.Component{
    state={
        desc:'',
        productupc:'',
        privatekey:'9ad55ba5bbefece176836f98bc15d15fdab54eecc7ba8f6e76d8e70fec27610c'

    }
    infuraKey =  'https://rinkeby.infura.io/v3/10cfdc60e2c841e4b03a5adf4abae931' ;
//supplychain_contract= new web3.eth.Contract((abi),'0x54461BF3C444B783d6f59019AC57faf08E960bEA')

handlechange=async(e)=>{
 e.preventDefault();
 const provider= new Provider(this.state.privatekey,this.infuraKey);
     const web3 =new Web3(provider);
     const supplychain_contract= new web3.eth.Contract((abi),'0xCf77731Cb0C5459a5237BEAF5Df65526BE2Ff12a');
 const accounts= '0xebf665bf612b6d7c129d8926627d393e0a6a8199';

const logger= await supplychain_contract.methods.purchaseItemByBrand(this.state.productupc).send({
    from:accounts
})

console.log(logger.transactionHash);
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
                Pick up your order
                <Form.Input type='text' value={this.state.productupc} 
onChange={(event)=>{this.setState({productupc:event.target.value})}}
label='productupc' />            
<button onClick={this.handlechange}>click here</button>
<button onClick={this.productstatus}>click to check sttaus</button>
</div>
        )
    }
}

export default Brand;
