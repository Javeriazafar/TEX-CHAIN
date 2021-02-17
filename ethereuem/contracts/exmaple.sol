// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.20;
 
 
 
 contract AdminUser {
     address public lastAccess;
     
     constructor() public {
         authorizedCaller[msg.sender] = 1;
        emit AuthorizedCaller(msg.sender);
     }
     
     event AuthorizedCaller(address caller);
     event DeAuthorizedCaller(address caller);
     
       modifier onlyAuthCaller(){
        lastAccess = msg.sender;
        require(authorizedCaller[msg.sender] == 1);
        _;
    }
     
    
     
     struct User{
         string us_name;
         string password;
        uint index;
        bytes32 email;
        string location;

         
     }
     
     struct items {
         string item_name;
         uint item_id;
     }
     
     mapping (uint=> items) itemlist;
     
     mapping(address => User) private usersdetail;
     mapping(address => string)  userroles;
     
     address[] private userindex;
     uint count = userindex.length;
     mapping(address => uint8) authorizedCaller;
     
  event LogNewUser   (address indexed _userAddress, uint index,string  name, string password,  bytes32 email, string location);
  event LogUpdateUser(address indexed _userAddress, uint index,string  name, string password,  bytes32 email, string location);



     function isUser(address _userAddress)  public returns(bool isIndeed) {
        if(userindex.length == 0) return false;
        return (userindex[usersdetail[_userAddress].index] == _userAddress);
  }
     
     function authorizeCaller(address _caller) public returns(bool) 
    {
        authorizedCaller[_caller] = 1;
        emit AuthorizedCaller(_caller);
        return true;
    }
    
    /* deauthorize caller */
    function deAuthorizeCaller(address _caller) public  returns(bool) 
    {
        authorizedCaller[_caller] = 0;
        emit DeAuthorizedCaller(_caller);
        return true;
    }
     
     
     function setUser(address _userAddress, string memory us_name, string memory password, bytes32  email, string memory  role) public  returns(address) {
        //require(authorizedCaller[msg.sender]==1);
        //authorizedCaller[msg.sender] = 0;
        //require(authorizedCaller[msg.sender]==0);
        
        require(isUser(_userAddress)); 
        address uniqueId = address(bytes20(sha256(abi.encodePacked(msg.sender,block.timestamp))));
        User storage detailss = usersdetail[uniqueId];
        
         detailss.us_name = us_name;
         detailss.password= password;
         
         userroles[_userAddress]=role;
         userindex.push(uniqueId);
         detailss[_userAddress].index = userindex.push(_userAddress)-1;
         return uniqueId;
     }
     function getUserCount() public returns(uint count) {
        return userindex.length;
        }
     function getUser(address _userAddress) public  view returns ( string memory us_name,
                                                                  string memory phone,
                                                                  string memory profilehash,
                                                                  string memory role)
        {
            User memory details = usersdetail[_userAddress];
            return (details.us_name, details.phone,details.profilehash, userroles[_userAddress]);
        }   
        
        
    function setItems ( uint id,string  memory name) public onlyAuthCaller returns(uint){
           
        items storage item = itemlist[id];
        item.item_id= id;
        item.item_name = name;
        
        return id;
    }
    
    
      function getItem(uint tx) public  view returns ( string memory item_name)
        {
            items storage item = itemlist[tx];
            return (item.item_name);
        }  


         
     
     
     
     
     
 }