
import React from 'react';
import {Route,Switch,link} from 'react-router-dom';
import {abi,bytecode} from '../contracts/AdminUser.json';
import web3 from '../web3';
import Provider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import { Button, Form, Container,Table} from 'semantic-ui-react';

import Axios from 'axios';

class AdminForm extends React.Component {
//const AdminForm = () => {

  state={
    us_name:'',
    email:'',
    role_id:0,
    account_address:'',
    location:'',
    password:'',
    data:[],
    loading:false,
    hash:'',
    user_contract:'',
    privateKey: '52dc8848ff04da7239a974e9343cdb1a0b801fe55688304a4844687e01ee3188= '
    
   // user:''
}

infuraKey =  'https://rinkeby.infura.io/v3/10cfdc60e2c841e4b03a5adf4abae931' ;

onSubmit= async(e)=>{

        e.preventDefault();
        this.setState({loading:true});
    try{

        let data=[...this.state.data];
        const provider= new Provider(this.state.privateKey,this.infuraKey);
        const web3 =new Web3(provider);
        const user_contract=   new web3.eth.Contract((abi),'0x9898BA4F1157E3E86490C68E8b498fB1009477dD');
        const accounts = '0x406cec9d151290688812cd6ccfa0e808a9352569';
        console.log(web3.eth.getBalance(accounts).then(console.log));
        const reciept = await user_contract.methods.setUser(this.state.account_address,this.state.user_name,this.state.password,this.state.email,this.state.location,this.state.role_id).send({
          from:accounts
        });
        console.log(reciept.transactionHash)
        console.log(reciept)
        const log =reciept.events.LogNewUser.returnValues[6];

        this.setState({hash:log});
        const output =await  user_contract.methods.getdata(log).call();
        const {us_name,email,location,password,role,Createdby}= output
        data.push({
          user_name: us_name,
          email: email,
          location: location,
          password:password,
          role_id: role,
          account_address: Createdby
        });
        
        this.setState({data:data});

        fetch('http://localhost:5000/user/createuser', {
          method: "POST",
          body: JSON.stringify({us_name,email,location,password,role,Createdby}),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        this.setState({loading:false});
    }
    catch(error){
    console.log(error)
    }
    };

    render(){
      const { Header, Row, HeaderCell,Body}=Table;
      const data=this.state.data;

      return ( 

    <Container>
        <h1 style={{marginTop: '60px'}}>Add User</h1>
        <div className="formDiv" style={{backgroundColor:'#eae6f0', padding:'20px', borderRadius:'5px', border:'1px solid purple'}}>
           

  <Form onSubmit={this.onSubmit}>

    <Form.Group unstackable widths={2} >

      <Form.Input type='text' value={this.state.user_name} 
      onChange={(event)=>{this.setState({user_name:event.target.value})}}
      label='user_name' placeholder='Full Name' />

      <Form.Input type='text' value={this.state.email} 
      onChange={(event)=>{this.setState({email:event.target.value})}}
      label='email' placeholder='Phone No' />

    </Form.Group>

    <Form.Group widths={2}>
      
      <Form.Input  type='text' value={this.state.location} 
      onChange={(event)=>{this.setState({location:event.target.value})}}
      label='Location' placeholder='location' />

      <Form.Input type='text' value={this.state.role_id} 
      onChange={(event)=>{this.setState({role_id:event.target.value})}}
      label='User role_id' placeholder='Role' />

    </Form.Group>

    <Form.Group widths={2} >
      <Form.Input  type='text' value={this.state.account_address} 
      onChange={(event)=>{this.setState({account_address:event.target.value})}}
      label='Profile Hash' placeholder='Account Address'
    />
    <Form.Input  type='text' value={this.state.password} 
      onChange={(event)=>{this.setState({password:event.target.value})}}
      label='password' placeholder='Account Address'
    />
    </Form.Group>
    
    <Button loading={this.state.loading} type='submit' style={{border:'1px solid purple'}}>Submit</Button>
  </Form>
  </div>
 

    <Table style={{marginTop:"40px",  border: '2px solid Purple' }}>
        <Header>
            <Row> 
                
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Phone No</HeaderCell>
                <HeaderCell>Location</HeaderCell>
                <HeaderCell>User Role</HeaderCell>
                <HeaderCell>Profile Hash</HeaderCell>
                <HeaderCell>ACTION</HeaderCell>
            </Row>
        </Header>
        <Body>
     
        {data.map((data,index) => {
            
              return (
                <Table.Row key={"item-" + index}>
        <Table.Cell>{data.user_name}</Table.Cell>
        <Table.Cell>{data.email}</Table.Cell>
        <Table.Cell>{data.location}</Table.Cell>
        <Table.Cell>{data.role_id}</Table.Cell>
        <Table.Cell>{data.account_address}</Table.Cell>
        {/* <Table.Cell><Button
    onClick={this.handleItemDelete(index)}>
    Delete
  </Button>
  </Table.Cell> */}
        
        </Table.Row>
         
        );
            })}
      
              
        </Body>
    </Table>
    <Button onClick={this.clickme}></Button>
</Container>

      )}}

export default AdminForm;