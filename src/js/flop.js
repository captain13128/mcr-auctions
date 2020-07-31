"use strict";


// Contracts ABI
const FLOPPER_ABI = [{
    "inputs": [{
        "internalType": "address",
        "name": "vat_",
        "type": "address"
    }, {"internalType": "address", "name": "gem_", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "bid", "type": "uint256"}, {
        "indexed": true,
        "internalType": "address",
        "name": "gal",
        "type": "address"
    }],
    "name": "Kick",
    "type": "event"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "internalType": "bytes4", "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {"indexed": true, "internalType": "bytes32", "name": "arg1", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg2",
        "type": "bytes32"
    }, {"indexed": false, "internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "constant": true,
    "inputs": [],
    "name": "beg",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "bids",
    "outputs": [{"internalType": "uint256", "name": "bid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"internalType": "address", "name": "guy", "type": "address"}, {
        "internalType": "uint48",
        "name": "tic",
        "type": "uint48"
    }, {"internalType": "uint48", "name": "end", "type": "uint48"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "cage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "deal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "bid", "type": "uint256"}],
    "name": "dent",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "gem",
    "outputs": [{"internalType": "contract GemLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "gal", "type": "address"}, {
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "bid", "type": "uint256"}],
    "name": "kick",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "kicks",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "live",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "pad",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "tau",
    "outputs": [{"internalType": "uint48", "name": "", "type": "uint48"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "tick",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ttl",
    "outputs": [{"internalType": "uint48", "name": "", "type": "uint48"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vat",
    "outputs": [{"internalType": "contract VatLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vow",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "wards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "yank",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];
const MEDIANIZER_ABI = [{
    "constant": false,
    "inputs": [{"name": "owner_", "type": "address"}],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "", "type": "bytes32"}],
    "name": "poke",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "poke",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "compute",
    "outputs": [{"name": "", "type": "bytes32"}, {"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "wat", "type": "address"}],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "wat", "type": "address"}],
    "name": "unset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "indexes",
    "outputs": [{"name": "", "type": "bytes12"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "next",
    "outputs": [{"name": "", "type": "bytes12"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "read",
    "outputs": [{"name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "peek",
    "outputs": [{"name": "", "type": "bytes32"}, {"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "bytes12"}],
    "name": "values",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "min_", "type": "uint96"}],
    "name": "setMin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "authority_", "type": "address"}],
    "name": "setAuthority",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "void",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "pos", "type": "bytes12"}, {"name": "wat", "type": "address"}],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "authority",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "pos", "type": "bytes12"}],
    "name": "unset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "next_", "type": "bytes12"}],
    "name": "setNext",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "min",
    "outputs": [{"name": "", "type": "uint96"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "val", "type": "bytes32"}],
    "name": "LogValue",
    "type": "event"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "name": "guy",
        "type": "address"
    }, {"indexed": true, "name": "foo", "type": "bytes32"}, {
        "indexed": true,
        "name": "bar",
        "type": "bytes32"
    }, {"indexed": false, "name": "wad", "type": "uint256"}, {"indexed": false, "name": "fax", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "authority", "type": "address"}],
    "name": "LogSetAuthority",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
    "name": "LogSetOwner",
    "type": "event"
}];
const VOW_ABI = [{
    "inputs": [{"internalType": "address", "name": "vat_", "type": "address"}, {
        "internalType": "address",
        "name": "flapper_",
        "type": "address"
    }, {"internalType": "address", "name": "flopper_", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "internalType": "bytes4", "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {"indexed": true, "internalType": "bytes32", "name": "arg1", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg2",
        "type": "bytes32"
    }, {"indexed": false, "internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "constant": true,
    "inputs": [],
    "name": "Ash",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "Sin",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "bump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "cage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "dump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "tab", "type": "uint256"}],
    "name": "fess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "address",
        "name": "data",
        "type": "address"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "flap",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "flapper",
    "outputs": [{"internalType": "contract FlapLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "era", "type": "uint256"}],
    "name": "flog",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "flop",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "flopper",
    "outputs": [{"internalType": "contract FlopLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "heal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "hump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "kiss",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "live",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "sin",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "sump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vat",
    "outputs": [{"internalType": "contract VatLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "wait",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "wards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
const VAT_ABI = [{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "internalType": "bytes4", "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg1",
        "type": "bytes32"
    }, {"indexed": true, "internalType": "bytes32", "name": "arg2", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg3",
        "type": "bytes32"
    }, {"indexed": false, "internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "constant": true,
    "inputs": [],
    "name": "Line",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "cage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "can",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "dai",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "debt",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "bytes32",
        "name": "what",
        "type": "bytes32"
    }, {"internalType": "uint256", "name": "data", "type": "uint256"}],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "address",
        "name": "src",
        "type": "address"
    }, {"internalType": "address", "name": "dst", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "flux",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "i", "type": "bytes32"}, {
        "internalType": "address",
        "name": "u",
        "type": "address"
    }, {"internalType": "int256", "name": "rate", "type": "int256"}],
    "name": "fold",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "address",
        "name": "src",
        "type": "address"
    }, {"internalType": "address", "name": "dst", "type": "address"}, {
        "internalType": "int256",
        "name": "dink",
        "type": "int256"
    }, {"internalType": "int256", "name": "dart", "type": "int256"}],
    "name": "fork",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "i", "type": "bytes32"}, {
        "internalType": "address",
        "name": "u",
        "type": "address"
    }, {"internalType": "address", "name": "v", "type": "address"}, {
        "internalType": "address",
        "name": "w",
        "type": "address"
    }, {"internalType": "int256", "name": "dink", "type": "int256"}, {
        "internalType": "int256",
        "name": "dart",
        "type": "int256"
    }],
    "name": "frob",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "gem",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "i", "type": "bytes32"}, {
        "internalType": "address",
        "name": "u",
        "type": "address"
    }, {"internalType": "address", "name": "v", "type": "address"}, {
        "internalType": "address",
        "name": "w",
        "type": "address"
    }, {"internalType": "int256", "name": "dink", "type": "int256"}, {
        "internalType": "int256",
        "name": "dart",
        "type": "int256"
    }],
    "name": "grab",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "heal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "hope",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "name": "ilks",
    "outputs": [{"internalType": "uint256", "name": "Art", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "rate",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "spot", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "line",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "dust", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}],
    "name": "init",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "live",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "src", "type": "address"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }, {"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "move",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "nope",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "sin",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {"internalType": "int256", "name": "wad", "type": "int256"}],
    "name": "slip",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "u", "type": "address"}, {
        "internalType": "address",
        "name": "v",
        "type": "address"
    }, {"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "suck",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "urns",
    "outputs": [{"internalType": "uint256", "name": "ink", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "art",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "wards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

var WS_RPC_URL = "wss://mainnet.infura.io/ws/v3/683836c8b9384898a9f99d483ae389bc";


const FLOP_ADDRESS = "0x1C1cAc8D42D44c1F9b1427E8B9511355a8e0AE0a";
const MEDIANIZER_ADDRESS = "0xd4553Ee5693A926E0b9f5B0726ee51773F97df85";
const VOW_ADDRESS = "0xAE491648E939c69724cD43e34ddF8C7B13868682";
const VAT_ADDRESS = "0x851F61280295837588373fFdc3d3315Ac085119f";

var web3;
var usingRemoteProvider = true;
if (typeof window.ethereum !== 'undefined' && window.ethereum.networkVersion &&
    window.ethereum.networkVersion === "1" && window.ethereum.isMetaMask) {
    try {
        web3 = new Web3(window.ethereum);
        let subscription = web3.eth.subscribe('newBlockHeaders');
        subscription.unsubscribe();
        console.log("Using local web3 provider");
        usingRemoteProvider = false;
    } catch (e) {
        usingRemoteProvider = true;
    }
}
if (usingRemoteProvider) {
    var provider = new Web3.providers.WebsocketProvider(WS_RPC_URL);
    web3 = new Web3(provider);
    console.log("Using remote web3 provider");
}

// Get instance of contracts
const flopContract = new web3.eth.Contract(FLOPPER_ABI, FLOP_ADDRESS);
const osmContract = new web3.eth.Contract(MEDIANIZER_ABI, MEDIANIZER_ADDRESS);
const vowContract = new web3.eth.Contract(VOW_ABI, VOW_ADDRESS);
const vatContract = new web3.eth.Contract(VAT_ABI, VAT_ADDRESS);

// Get new events and populate last events global variable
var events = [];
var getFlipEvents = function getFlipEvents(fromBlockNumber) {
    console.log(`Get auction events from block: ${fromBlockNumber}`);
    return flopContract.getPastEvents("allEvents", {
            fromBlock: fromBlockNumber,
            toBlock: "latest"
        },
        function (err, result) {
            if (!err) {
                console.log("Received Events:", result.length);
                events = result;
            } else {
                console.log(err);
            }
        });
};

// Get the price in the given block number and populate last price global variable
var medianizerPrice = 0;
var updateMedianizerPrice = function getOsmPrice(blockNumber) {
    // Only for debug
    // medianizerPrice = 200.5;

    return osmContract.getPastEvents("LogValue", {
            fromBlock: blockNumber - 2000,
            toBlock: blockNumber
        },
        function (err, result) {
            if (!err) {
                var logEvent = result[result.length - 1];
                if (!logEvent) {
                    return 0;
                }
                var priceInWei = web3.utils.toBN(logEvent.returnValues[0]);
                var price = web3.utils.fromWei(priceInWei);
                medianizerPrice = parseFloat(price).toFixed(2);
            } else {
                console.log(err);
            }
            return medianizerPrice;
        });
};

// Events types signatures to be processed
const TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
const DENT = "0x5ff3a38200000000000000000000000000000000000000000000000000000000";
const DEAL = "0xc959c42b00000000000000000000000000000000000000000000000000000000";
const TICK = "0xfc7b6aee00000000000000000000000000000000000000000000000000000000";
const FILE = "0x29ae811400000000000000000000000000000000000000000000000000000000";
const DENY = "0x9c52a7f100000000000000000000000000000000000000000000000000000000";
const RELY = "0x65fae35e00000000000000000000000000000000000000000000000000000000";

// Variable to summarize by ID all auctions currently registered
var auctions = {};

// Show last events received
var eventsLoaded = false;
var showEvents = async function showEvents(someID) {
    // Clear loading msg in body
    if (Object.keys(auctions).length === 0) {
        document.getElementById("app").innerHTML = "";
    }

    // Disable filter when populating
    if (events.length > 0) {
        hideFilterSearch();
    }

    // Iterate over events
    for (let i = 0; i < events.length; i++) {
        let event = events[i];
        let values = "";
        let blockDate = new Date();
        await web3.eth.getBlock(event.blockNumber).then(function (block) {
            if (block) {
                let blockTime = block.timestamp;
                blockDate = new Date(blockTime * 1000);
                values = blockDate.toLocaleString() + " | ";
            } else {
                values = new Date().toLocaleString() + " | ";
            }
        });
        let eventType = "UNKNOWN";
        let flapId = 0;

        // Event types cases
        if (event.event === "Kick") {
            eventType = "KICK";
            flapId = parseInt(event.returnValues.id, 10);
            values += "ID: <b>" + flapId + "</b> | ";

            let lot = event.returnValues.lot / 10 ** 18;
            values += "лот (lot): " + lot.toFixed(4) + " mdt | ";

            let tab = event.returnValues.bid / 10 ** 27 / 10 ** 18;
            values += "предложение (bid): " + tab.toFixed(2) + " mcr | ";

            // Clear and Get current price value
            medianizerPrice = 0;
            await updateMedianizerPrice(event.blockNumber);

            // Register KICK over Auction dictionary
            auctions[flapId] = {
                id: flapId,
                kickDate: blockDate.toUTCString().slice(5),
                kickPrice: medianizerPrice.toString(),
                kickLot: lot,
                tends: 0,
                dents: 0,
                bidFrom: null,
                bidDate: null,
                bidPrice: null,
                bid: tab,
                lot: null,
                tab: 0,
                guy: null,
                paidPrice: null,
                dealDate: null,
                dealPrice: null,
                state: "OPEN"
            };

            if (medianizerPrice > 0) {
                values += "Официальная цена Monolithos: ₽" + auctions[flapId]["kickPrice"] + " | ";
            } else {
                values += "Официальная цена Monolithos: ₽---,-- | ";
            }

        } else if (event.raw.topics[0] === DENT) {
            eventType = "DENT";
            flapId = parseInt(event.raw.topics[2], 16);

            // Avoid showing DENT without a KICK
            if (!auctions[flapId]) {
                continue;
            }

            values += "ID: <b>" + flapId + "</b> | ";

            let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
            values += "лот (lot): " + lot.toFixed(4) + " mdt | ";

            let raw = event.raw.data.slice(288, -248);
            let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
            values += "предложение (bid): " + bid.toFixed(2) + " mcr | ";

            medianizerPrice = 0;
            await updateMedianizerPrice(event.blockNumber);

            // Register DENT over Auction dictionary
            auctions[flapId]["dents"] += 1;
            auctions[flapId]["bid"] = bid;
            auctions[flapId]["bidDate"] = blockDate.toUTCString().slice(5);
            auctions[flapId]["bidPrice"] = medianizerPrice.toString();
            auctions[flapId]["lot"] = lot;
            auctions[flapId]["paidPrice"] = (bid / lot).toFixed(2);

            if (medianizerPrice > 0) {
                // Calculate diff percentage
                let diff = ((auctions[flapId]["paidPrice"] / auctions[flapId]["bidPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "+" + diff.toFixed(2) + " % | ";
                } else {
                    values += "" + diff.toFixed(2) + " % | ";
                }
                values += "Цена: ₽" + auctions[flapId]["bidPrice"] + " | ";
            } else {
                values += "--,-- % | Цена: ₽---,-- | ";
            }
        } else if (event.raw.topics[0] === DEAL) {
            eventType = "DEAL";
            flapId = parseInt(event.raw.topics[2], 16);

            // Avoid showing DEAL without a KICK
            if (!auctions[flapId]) {
                continue;
            }

            values += "ID: <b>" + flapId + "</b> | ";

            medianizerPrice = 0;
            await updateMedianizerPrice(event.blockNumber);

            // Register DEAL over Auction dictionary
            auctions[flapId]["dealDate"] = blockDate.toUTCString().slice(5);
            auctions[flapId]["dealPrice"] = medianizerPrice.toString();
            auctions[flapId]["state"] = "CLOSE";

            if (!medianizerPrice) {
                values += "Цена сделки: ₽" + auctions[flapId]["paidPrice"] + " mcr/mdt (+-.--%) | ";
                values += "--,-- % | Цена: ₽---,-- | ";
            } else {
                values += "Цена сделки: ₽" + auctions[flapId]["paidPrice"] + " mcr/mdt ";
                let diff = ((auctions[flapId]["paidPrice"] / auctions[flapId]["dealPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "(+" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${flapId})'>Lost 📋</b> | `
                } else {
                    values += "(" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${flapId})'>Won! 📋</b> | `
                }
                values += "Цена: ₽" + auctions[flapId]["dealPrice"] + " | ";
            }
        } else if (event.raw.topics[0] === TICK) {
            eventType = "TICK";
            flapId = parseInt(event.raw.topics[2], 16);
            values += "ID: <b>" + flapId + "</b> | ";
            values += "Время продлено! | ";
        } else if (event.raw.topics[0] === FILE) {
            auctions[0] = {id: 0, type: "FILE"};
            eventType = "FILE";
            const BEG = "0x6265670000000000000000000000000000000000000000000000000000000000";
            const TAU = "0x7461750000000000000000000000000000000000000000000000000000000000";
            const TTL = "0x74746c0000000000000000000000000000000000000000000000000000000000";
            const PAD = "0x7061640000000000000000000000000000000000000000000000000000000000";
            if (event.raw.topics[2] === BEG) {
                values += "КЛЮЧ: <b> BEG </b> (увеличение минимальной ставки) | ";
                let file_value = parseInt(event.raw.topics[3]) / 10 ** 18;
                file_value = (file_value - 1) * 100;
                values += "ЗНАЧЕНИЕ: <b>" + file_value.toFixed(2) + " %</b> | ";
            } else if (event.raw.topics[2] === TAU) {
                values += "КЛЮЧ: <b> TAU </b> (максимальная продолжительность аукциона) | ";
                let file_value = parseInt(event.raw.topics[3]);
                file_value = file_value / 60 / 60;
                values += "ЗНАЧЕНИЕ: <b>" + file_value.toFixed(1) + " hours</b> | ";
            } else if (event.raw.topics[2] === TTL) {
                values += "КЛЮЧ: <b> TTL </b> (срок действия ставки / максимальная продолжительность ставки) | ";
                let file_value = parseInt(event.raw.topics[3]);
                file_value = file_value / 60;
                values += "ЗНАЧЕНИЕ: <b>" + file_value.toFixed(1) + " minutes</b> | ";
            } else if (event.raw.topics[2] === PAD) {
                values += "КЛЮЧ: <b> PAD </b> (Increase for lot size during tick) | ";
                let file_value = parseInt(event.raw.topics[3]);
                file_value = file_value / 10 ** 18;
                values += "ЗНАЧЕНИЕ: <b>" + file_value.toFixed(4) + " mdt</b> | ";
            } else {
                values += "КЛЮЧ: <b>UKNOWN</b> | ";
                console.log(event.raw.topics);
            }
            values += "Новое обновление Flopper! | ";
        } else if (event.raw.topics[0] === RELY) {
            eventType = "RELY";
            values += "ДЕЙСТВИЕ: <b>Разрешить вызывать методы auth'ed --</b> | ";
            let usr = event.raw.topics[2];
            values += "СУБЪЕКТ: <b>0x" + usr.slice(-40) + "</b> | ";
        } else if (event.raw.topics[0] === DENY) {
            eventType = "DENY";
            values += "ДЕЙСТВИЕ: <b>Запретить вызывать методы auth'ed</b> | ";
            let usr = event.raw.topics[2];
            values += "СУБЪЕКТ: <b>0x" + usr.slice(-40) + "</b> | ";
        } else {
            console.log("Uknown event");
            console.log(event);
        }

        // Get event tx info
        await web3.eth.getTransaction(event.transactionHash).then(function (tx) {
            let from = tx.from.slice(0, 6) + "..." + tx.from.slice(-4);
            if (auctions[flapId]) {
                if (eventType === "DENT") {
                    auctions[flapId]["bidFrom"] = tx.from;
                }
                auctions[flapId]["txFrom"] = tx.from;
            }
            let txHref = `https://etherscan.io/tx/${event.transactionHash}`;
            let txLink = `<a target="_blank" href="${txHref}">Tx:..${event.transactionHash.slice(-3)} информация</a>`;
            values += `from: ${from} | ${txLink} >>`;
        });

        // Get old page and Render new line in app
        let oldPage = document.getElementById("app").innerHTML;
        let newLine = "";
        if (someID === 0 || someID === flapId) {
            newLine = "<div class=\"row flip-" + flapId + " " + eventType.toLowerCase() + "\">" +
                eventType + " >> " + values + "</div>";
        }
        document.getElementById("app").innerHTML = newLine + oldPage;
    }

    // Verify if there is any registered auction to show
    if (Object.keys(auctions).length > 0) {
        showFilter();
    } else {
        showEmptyMessage();
    }
    eventsLoaded = true;
};

// Fetch old events to populate list at initial load
var lastBlockfetch = 0;
var blocksBack = 18095; // 18095 -> 3.14 days blocks count
var fetchAuctions = async function fetchAuctions(someID) {
    lastBlockfetch = await web3.eth.getBlockNumber();
    let fromBlock = lastBlockfetch - blocksBack;
    await getFlipEvents(fromBlock);
    await showEvents(someID);
};

// New block event handler
async function newBlock(error, result) {
    if (result) {
        // Avoid running the some events are currently being processed
        if (!eventsLoaded) return;

        // Update async globals
        updateGlobals();

        // Clear events and fetch new ones
        eventsLoaded = false;
        let newBlockNumber = result.number;
        await getFlipEvents(newBlockNumber);
        await showEvents(0);
    } else {
        console.log(error);
    }
}

// Utility/helpers functions
function showFilter() {
    let filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        let searchTag = document.getElementById("search");
        searchTag.style.display = "inline";
        let noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "none";
        showLastUpdate();
    }
}

function showLastUpdate() {
    let lastUpdateTag = document.getElementById("last-update");
    let now = new Date().toLocaleString();
    lastUpdateTag.innerHTML = `- Updated to: ${now}`;
}

function hideFilterSearch() {
    let filterPanelSearch = document.getElementById("search");
    if (filterPanelSearch) {
        filterPanelSearch.style.display = "none";
    }
}

function hideEmptyMessage() {
    let noResultsTag = document.getElementById("no-results");
    noResultsTag.style.display = "none";
}

function showEmptyMessage() {
    let filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        let searchTag = document.getElementById("search");
        searchTag.style.display = "none";
        let noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "inline";
        showLastUpdate();
    }
}

function filterAuctionById() {
    let flapId = $("#fliter-id").val();
    let allRows = $(".row");
    allRows.hide();
    if (flapId) {
        $(".flip-" + flapId).show()
    } else {
        allRows.show();
    }
}

function showAuctionDetails(id) {
    let auction = auctions[id];
    if (!auction) {
        alert('Error showing auction details');
        return;
    }

    let detailPanel = $('#auction-details');
    if (detailPanel) {
        detailPanel.hide();
    }

    let msg = `> <b>АУКЦИОН ID: ${id}</b>`;
    msg += '<hr/>';

    msg += 'Начало: <br/>';
    msg += `- ДАТА: ${auction.kickDate} <br/>`;
    msg += `- ЛОТ (LOT): ${auction.kickLot.toLocaleString('en')} mdt - ПРЕДЛОЖЕНИЕ (BID): ${auction.bid.toLocaleString('en')} mcr <br/>`;
    msg += `- Monolithos MEDIANIZER: ₽${auction.kickPrice} mdt/mcr <br/><br/>`;

    msg += `Полученные заявки: ${auction.dents} <br/><br/>`;

    msg += 'Последнее предложение:<br/>';
    msg += `- ДАТА: ${auction.bidDate} <br/>`;
    msg += `- ОТПРАВИТЕЛЬ: ${auction.bidFrom} <br/>`;
    msg += `- ЛОТ (LOT): ${auction.lot.toLocaleString('en')} mdt - ПРЕДЛОЖЕНИЕ (BID): ${auction.bid.toLocaleString('en')} mcr <br/>`;
    msg += `- ЦЕНА СДЕЛКИ: ₽${auction.paidPrice} mdt/mcr <br/>`;
    msg += `- Monolithos MEDIANIZER: ₽${auction.bidPrice} mdt/mcr <br/><br/>`;

    msg += 'Ended: <br/>';
    msg += `- ДАТА: ${auction.dealDate} <br/>`;
    msg += `- ОТПРАВИТЕЛЬ: ${auction.txFrom} <br/>`;
    msg += `- ЦЕНА СДЕЛКИ: ₽${auction.paidPrice} mdt/mcr <br/>`;
    msg += `- Monolithos MEDIANIZER: ₽${auction.dealPrice} mdt/mcr <br/><br/>`;


    msg += 'РЕЗУЛЬТАТЫ: <br/>';
    let priceDiff = ((auction["paidPrice"] / auction["dealPrice"]) - 1) * 100;
    msg += `- РАЗНИЦА В ЦЕНЕ: ${priceDiff.toFixed(2)}% <br/>`;
    let daiProfit = (auction.lot * auction.dealPrice) - auction.bid;
    msg += `- ПРИБЫЛЬ: <b>${daiProfit.toLocaleString('en')} mcr</b>`;

    msg += '<hr/>';
    msg += '<a style="float: right;" onclick="hideAuctionDetails()">CLOSE<a/>';

    if (detailPanel) {
        detailPanel.html(msg);
        detailPanel.fadeIn('normal');
    }
}

function hideAuctionDetails() {
    let detailPanel = $('#auction-details');
    if (detailPanel) {
        detailPanel.fadeOut('normal');
    }
}

async function updateGlobals() {
    let globalsPanel = $('#globals');

    vatContract.methods.sin(VOW_ADDRESS).call().then(function (value) {
        let vow_debt = value / 10 ** 45;
        vowContract.methods.Sin().call().then(function (value) {
            let total_sin = value / 10 ** 45;
            vowContract.methods.Ash().call().then(function (value) {
                let total_ash = value / 10 ** 45;
                let available = Math.round((vow_debt - total_sin - total_ash) * 100) / 100;

                globalsPanel.find('#available').text(available.toLocaleString('en'));
            });
        });
    });

    vowContract.methods.sump().call().then(function (value) {
        let sump = Math.round((value / 10 ** 45) * 10) / 10;
        globalsPanel.find('#sump').text(sump.toLocaleString('en'));
    });

    vowContract.methods.dump().call().then(function (value) {
        let dump = Math.round((value / 10 ** 18) * 10) / 10;
        globalsPanel.find('#dump').text(dump.toFixed(2));
    });

    flopContract.methods.beg().call().then(function (value) {
        let beg = ((value / 10 ** 18) - 1) * 100;
        globalsPanel.find('#beg').text(beg.toFixed(2));
    });

    flopContract.methods.ttl().call().then(function (value) {
        let ttl = value / 60;
        globalsPanel.find('#ttl').text(ttl.toFixed(1));
    });

    flopContract.methods.tau().call().then(function (value) {
        let tau = value / 60 / 60;
        globalsPanel.find('#tau').text(tau.toFixed(1));
    });

    let lastBlock = await web3.eth.getBlockNumber();
    await updateMedianizerPrice(lastBlock);
    globalsPanel.find('#mkr').text("₽" + medianizerPrice);
}

async function loadAllHistory() {
    if (usingRemoteProvider) {
        let msg = 'Sorry, this feature is disabled using the remote ETH provider.\n\n' +
            'Try to install MetaMask and select Mainnet network';
        alert(msg);
        return;
    }

    hideFilterSearch();
    hideEmptyMessage();
    events = [];
    auctions = {};
    eventsLoaded = false;
    blocksBack = await web3.eth.getBlockNumber() - 1;
    fetchAuctions(0);
}


// ## Start Main function
updateGlobals();
fetchAuctions(0);

// Only in DEV version (comment this line before minimize it)
//console.log('Loaded not optimized file');

// ## Subscribe to new blocks
setTimeout(function () {
    console.log('Getting new data from chain...');
    web3.eth.subscribe('newBlockHeaders', newBlock);
}, 5000);