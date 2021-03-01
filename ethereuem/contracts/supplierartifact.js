module.exports={
    bytecode:`60806040523480156100115760006000fd5b505b6100223361003460201b60201c565b4260006000508190909055505b6101f0565b61004f81600160005061009660201b61013a1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167fa9f13e94f3f7dbf69ac8405e3aa6f43a6f162984687d099c7a5cd9b602552cc260405160405180910390a25b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156100d35760006000fd5b6100e3828261015260201b60201c565b1515156100f05760006000fd5b60018260000160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156101915760006000fd5b8260000160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506101ea565b92915050565b610546806101ff6000396000f3fe60806040523480156100115760006000fd5b50600436106100515760003560e01c806317df474514610057578063463365421461007357806392024888146100a3578063d8270dce146100ad57610051565b60006000fd5b610071600480360381019061006c9190610425565b6100cb565b005b61008d60048036038101906100889190610425565b6100fa565b60405161009a9190610470565b60405180910390f35b6100ab61011f565b005b6100b5610131565b6040516100c2919061048c565b60405180910390f35b6100da336100fa63ffffffff16565b15156100e65760006000fd5b6100f5816101f663ffffffff16565b5b5b50565b600061011382600160005061025490919063ffffffff16565b905061011a565b919050565b61012e336102f263ffffffff16565b5b565b60006000505481565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156101775760006000fd5b610187828261025463ffffffff16565b1515156101945760006000fd5b60018260000160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050565b61020d81600160005061013a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fa9f13e94f3f7dbf69ac8405e3aa6f43a6f162984687d099c7a5cd9b602552cc260405160405180910390a25b50565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156102935760006000fd5b8260000160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506102ec565b92915050565b61030981600160005061035090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f278a641d7aa9abcb166cd13a30fc6d7f21034d4c003ce509a84214e11faa77c060405160405180910390a25b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561038d5760006000fd5b61039d828261025463ffffffff16565b15156103a95760006000fd5b60008260000160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50505661050f565b60008135905061041e816104f4565b5b92915050565b6000602082840312156104385760006000fd5b60006104468482850161040f565b9150505b92915050565b610459816104bb565b82525b5050565b610469816104e9565b82525b5050565b60006020820190506104856000830184610450565b5b92915050565b60006020820190506104a16000830184610460565b5b92915050565b60006104b3826104c8565b90505b919050565b600081151590505b919050565b600073ffffffffffffffffffffffffffffffffffffffff821690505b919050565b60008190505b919050565b6104fd816104a8565b8114151561050b5760006000fd5b5b50565bfea2646970667358221220e14612b5a17ffe03183ca947684d5514f92685fec16f945351886e770c64923064736f6c63430008000033`
    , abi:`[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SupplierAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SupplierRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"addSupplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"isSupplier","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceSupplier","outputs":[],"stateMutability":"nonpayable","type":"function"}]`
}