const AdminUser = artifacts.require("AdminUser");
const fs =require('fs')
const path= require('path')
module.exports = function (deployer) {
  deployer.deploy(AdminUser,{from:"0x53fe80034db699cb19663e8a7d9abab1e64e7f0c"}).then(() => {
    fs.writeFile(
      __dirname + path,
      'const ADDRESS = ' + "'" + AdminUser.address + "';",
      (err) => {
        if (err) {
          console.log(err)
        } else {
        }
      },
    )
    fs.appendFile(
      __dirname + path,
      '\nconst ABI = ' + JSON.stringify(AdminUser.abi) + ';',
      (err) => {
        if (err) {
          console.log(err)
        } else {
          fs.appendFile(
            __dirname + path,
            '\nmodule.exports = { ADDRESS, ABI };',
            (err) => {
              if (err) {
                console.log(err)
              }
            },
          )
        }
      },
    )
  })
};
