export const FLAPPER_ABI = [{
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
    }, {"indexed": false, "internalType": "uint256", "name": "bid", "type": "uint256"}],
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
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
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
    "inputs": [{"internalType": "uint256", "name": "lot", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "bid",
        "type": "uint256"
    }],
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
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "bid", "type": "uint256"}],
    "name": "tend",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
export const FLOPPER_ABI = [{
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
export const FLIPPER_ABI = [{
    inputs: [{
        internalType: "address",
        name: "vat_",
        type: "address"
    }, {
        internalType: "bytes32",
        name: "ilk_",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "address",
        name: "gal",
        type: "address"
    }],
    name: "Kick",
    type: "event"
}, {
    anonymous: true,
    inputs: [{
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
    }, {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "LogNote",
    type: "event"
}, {
    constant: true,
    inputs: [],
    name: "beg",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "bids",
    outputs: [{
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "address",
        name: "guy",
        type: "address"
    }, {
        internalType: "uint48",
        name: "tic",
        type: "uint48"
    }, {
        internalType: "uint48",
        name: "end",
        type: "uint48"
    }, {
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        internalType: "address",
        name: "gal",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "deal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "dent",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "bytes32",
        name: "what",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "data",
        type: "uint256"
    }],
    name: "file",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "ilk",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        internalType: "address",
        name: "gal",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "kick",
    outputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "kicks",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "tau",
    outputs: [{
        internalType: "uint48",
        name: "",
        type: "uint48"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "tend",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "tick",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "ttl",
    outputs: [{
        internalType: "uint48",
        name: "",
        type: "uint48"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "vat",
    outputs: [{
        internalType: "contract VatLike",
        name: "",
        type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "wards",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "yank",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}];

export const MEDIANIZER_ABI = [{
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
export const OSM_ABI = [{
    inputs: [{
        internalType: "address",
        name: "src_",
        type: "address"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: true,
    inputs: [{
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
    }, {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "LogNote",
    type: "event"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32"
    }],
    name: "LogValue",
    type: "event"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "bud",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "src_",
        type: "address"
    }],
    name: "change",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address[]",
        name: "a",
        type: "address[]"
    }],
    name: "diss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "diss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "hop",
    outputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address[]",
        name: "a",
        type: "address[]"
    }],
    name: "kiss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "kiss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "pass",
    outputs: [{
        internalType: "bool",
        name: "ok",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "peek",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "peep",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "poke",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "read",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "src",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "start",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint16",
        name: "ts",
        type: "uint16"
    }],
    name: "step",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "stop",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "stopped",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "void",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "wards",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "zzz",
    outputs: [{
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}];

export const VAT_ABI = [{
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

export const VOW_ABI = [{
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

export const CAT_ABI = [{
    "inputs": [{"internalType": "address", "name": "vat_", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "urn",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "ink", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "art",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "tab", "type": "uint256"}, {
        "indexed": false,
        "internalType": "address",
        "name": "flip",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "Bite",
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
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "address",
        "name": "urn",
        "type": "address"
    }],
    "name": "bite",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "bytes32",
        "name": "what",
        "type": "bytes32"
    }, {"internalType": "address", "name": "flip", "type": "address"}],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "name": "ilks",
    "outputs": [{"internalType": "address", "name": "flip", "type": "address"}, {
        "internalType": "uint256",
        "name": "chop",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "lump", "type": "uint256"}],
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
    "name": "vat",
    "outputs": [{"internalType": "contract VatLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vow",
    "outputs": [{"internalType": "contract VowLike", "name": "", "type": "address"}],
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