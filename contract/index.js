
var Web3 = require('web3');
var web3 = new Web3();
var rpc_url = process.env.rpc_url;
var address = process.env.contract_address;

web3.setProvider(new web3.providers.HttpProvider(rpc_url));

var pilot = {};

if(web3.isConnected()){
        
        var abi = [{"constant":true,"inputs":[{"name":"_hash","type":"address"}],"name":"AddressQuery","outputs":[{"name":"_address","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_BIK","type":"string"},{"name":"_hash","type":"address"},{"name":"_intID","type":"string"}],"name":"CustomerInsert","outputs":[{"name":"result","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"varex","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"HashToBIK","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"address"}],"name":"IntIDQuery","outputs":[{"name":"_intID","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"HashToIntID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"HashToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"address"}],"name":"BIKQuery","outputs":[{"name":"BIK","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isins","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"bananax","outputs":[{"name":"","type":"bytes8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"test","outputs":[{"name":"_BIK","type":"string"},{"name":"IntID","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor","payable":true},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Insert","type":"event"}];

        var coinbase = web3.eth.coinbase;

        pilot = web3.eth.contract(abi).at(address);
        
        web3.eth.defaultAccount = web3.eth.accounts[0];
} else {
    pilot.error = "Error created contract";
}        

module.exports.

module.exports.address = function(){
    return JSON.stringify(pilot);
}

module.exports.UpdateParty = function(address, perm){
    if(!!pilot){
        var result = pilot.UpdateParty.sendTransaction(address, perm);
        return result;
    }
}

module.exports.PartiesList = function(hash){
    if (!!pilot){
        var result = pilot.PartiesList.call(hash);
        return result;
    }
}

module.exports.AddHash = function(hash1, hash2, hash3, token){
    if(!!pilot){
        var result = pilot.AddHash.sendTransaction(hash1, hash2, hash3, token);
        return result;
    }
}

module.exports.RequestC = function(hash1, hash2, hash3, token){
    if (!!pilot){
        var result = pilot.RequestC.call(hash1, hash2, hash3, token);
        return result;
    }
}

module.exports.Request = function(hash1, hash2, hash3, token){
    if (!!pilot){
        var result = pilot.RequestC.sendTransaction(hash1, hash2, hash3, token);
        return result;
    }
}

module.exports.FullRequest = function(hash1, hash2, hash3, token){
    if (!!pilot){
        var result = pilot.FullRequest.Call(hash1, hash2, hash3);
        return result;
    }
}
