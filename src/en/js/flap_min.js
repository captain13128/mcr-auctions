"use strict";const WS_RPC_URL="wss://mainnet.infura.io/ws/v3/683836c8b9384898a9f99d483ae389bc",FLAP_ADDRESS="0xeFCAc4615721Ba90796BeCB8e633b38F8bF8FbF4",MEDIANIZER_ADDRESS="0xd4553Ee5693A926E0b9f5B0726ee51773F97df85",VAT_ADDRESS="0x851F61280295837588373fFdc3d3315Ac085119f",VOW_ADDRESS="0xAE491648E939c69724cD43e34ddF8C7B13868682",FLAPPER_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"},{internalType:"address",name:"gem_",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lot",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bid",type:"uint256"}],name:"Kick",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"beg",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"bids",outputs:[{internalType:"uint256",name:"bid",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"address",name:"guy",type:"address"},{internalType:"uint48",name:"tic",type:"uint48"},{internalType:"uint48",name:"end",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"rad",type:"uint256"}],name:"cage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"deal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"gem",outputs:[{internalType:"contract GemLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"kick",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kicks",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"live",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tau",outputs:[{internalType:"uint48",name:"",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"tend",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"tick",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"ttl",outputs:[{internalType:"uint48",name:"",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"yank",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],MEDIANIZER_ABI=[{constant:!1,inputs:[{name:"owner_",type:"address"}],name:"setOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"",type:"bytes32"}],name:"poke",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"poke",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"compute",outputs:[{name:"",type:"bytes32"},{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"wat",type:"address"}],name:"set",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"wat",type:"address"}],name:"unset",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"indexes",outputs:[{name:"",type:"bytes12"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"next",outputs:[{name:"",type:"bytes12"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"read",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"peek",outputs:[{name:"",type:"bytes32"},{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes12"}],name:"values",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"min_",type:"uint96"}],name:"setMin",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"authority_",type:"address"}],name:"setAuthority",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"void",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pos",type:"bytes12"},{name:"wat",type:"address"}],name:"set",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"authority",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"pos",type:"bytes12"}],name:"unset",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"next_",type:"bytes12"}],name:"setNext",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"min",outputs:[{name:"",type:"uint96"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"val",type:"bytes32"}],name:"LogValue",type:"event"},{anonymous:!0,inputs:[{indexed:!0,name:"sig",type:"bytes4"},{indexed:!0,name:"guy",type:"address"},{indexed:!0,name:"foo",type:"bytes32"},{indexed:!0,name:"bar",type:"bytes32"},{indexed:!1,name:"wad",type:"uint256"},{indexed:!1,name:"fax",type:"bytes"}],name:"LogNote",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"authority",type:"address"}],name:"LogSetAuthority",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"}],name:"LogSetOwner",type:"event"}],VOW_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"},{internalType:"address",name:"flapper_",type:"address"},{internalType:"address",name:"flopper_",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"Ash",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"Sin",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bump",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"cage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"dump",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tab",type:"uint256"}],name:"fess",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"data",type:"address"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"flap",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"flapper",outputs:[{internalType:"contract FlapLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"era",type:"uint256"}],name:"flog",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"flop",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"flopper",outputs:[{internalType:"contract FlopLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"rad",type:"uint256"}],name:"heal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"hump",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"rad",type:"uint256"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"live",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"sin",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"sump",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"wait",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],VAT_ABI=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg3",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"Line",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"cage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"can",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"dai",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"debt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"address",name:"src",type:"address"},{internalType:"address",name:"dst",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"flux",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"i",type:"bytes32"},{internalType:"address",name:"u",type:"address"},{internalType:"int256",name:"rate",type:"int256"}],name:"fold",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"address",name:"src",type:"address"},{internalType:"address",name:"dst",type:"address"},{internalType:"int256",name:"dink",type:"int256"},{internalType:"int256",name:"dart",type:"int256"}],name:"fork",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"i",type:"bytes32"},{internalType:"address",name:"u",type:"address"},{internalType:"address",name:"v",type:"address"},{internalType:"address",name:"w",type:"address"},{internalType:"int256",name:"dink",type:"int256"},{internalType:"int256",name:"dart",type:"int256"}],name:"frob",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"},{internalType:"address",name:"",type:"address"}],name:"gem",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"i",type:"bytes32"},{internalType:"address",name:"u",type:"address"},{internalType:"address",name:"v",type:"address"},{internalType:"address",name:"w",type:"address"},{internalType:"int256",name:"dink",type:"int256"},{internalType:"int256",name:"dart",type:"int256"}],name:"grab",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"rad",type:"uint256"}],name:"heal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"hope",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"ilks",outputs:[{internalType:"uint256",name:"Art",type:"uint256"},{internalType:"uint256",name:"rate",type:"uint256"},{internalType:"uint256",name:"spot",type:"uint256"},{internalType:"uint256",name:"line",type:"uint256"},{internalType:"uint256",name:"dust",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"}],name:"init",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"live",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"src",type:"address"},{internalType:"address",name:"dst",type:"address"},{internalType:"uint256",name:"rad",type:"uint256"}],name:"move",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"nope",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"sin",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"address",name:"usr",type:"address"},{internalType:"int256",name:"wad",type:"int256"}],name:"slip",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"u",type:"address"},{internalType:"address",name:"v",type:"address"},{internalType:"uint256",name:"rad",type:"uint256"}],name:"suck",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"},{internalType:"address",name:"",type:"address"}],name:"urns",outputs:[{internalType:"uint256",name:"ink",type:"uint256"},{internalType:"uint256",name:"art",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}];var usingRemoteProvider=!0;if(void 0!==window.ethereum&&window.ethereum.networkVersion&&"1"===window.ethereum.networkVersion&&window.ethereum.isMetaMask)try{web3=new Web3(window.ethereum),web3.eth.subscribe("newBlockHeaders").unsubscribe(),console.log("Using local web3 provider"),usingRemoteProvider=!1}catch(t){usingRemoteProvider=!0}if(usingRemoteProvider){var provider=new Web3.providers.WebsocketProvider(WS_RPC_URL);web3=new Web3(provider),console.log("Using remote web3 provider")}const flapContract=new web3.eth.Contract(FLAPPER_ABI,FLAP_ADDRESS),osmContract=new web3.eth.Contract(MEDIANIZER_ABI,MEDIANIZER_ADDRESS),vowContract=new web3.eth.Contract(VOW_ABI,VOW_ADDRESS),vatContract=new web3.eth.Contract(VAT_ABI,VAT_ADDRESS);var events=[],getFlipEvents=function(t){return console.log(`Get auction events from block: ${t}`),flapContract.getPastEvents("allEvents",{fromBlock:t,toBlock:"latest"},function(t,e){t?console.log(t):(console.log("Received Events:",e.length),events=e)})},medianizerPrice=0,updateMedianizerPrice=function(t){return osmContract.getPastEvents("LogValue",{fromBlock:t-2e3,toBlock:t},function(t,e){if(t)console.log(t);else{var n=e[e.length-1];if(!n)return 0;var a=web3.utils.toBN(n.returnValues[0]),i=web3.utils.fromWei(a);medianizerPrice=parseFloat(i).toFixed(2)}return medianizerPrice})};const TEND="0x4b43ed1200000000000000000000000000000000000000000000000000000000",DEAL="0xc959c42b00000000000000000000000000000000000000000000000000000000",TICK="0xfc7b6aee00000000000000000000000000000000000000000000000000000000",FILE="0x29ae811400000000000000000000000000000000000000000000000000000000",DENY="0x9c52a7f100000000000000000000000000000000000000000000000000000000",RELY="0x65fae35e00000000000000000000000000000000000000000000000000000000";var auctions={},eventsLoaded=!1,showEvents=async function(t){0===Object.keys(auctions).length&&(document.getElementById("app").innerHTML=""),events.length>0&&hideFilterSearch();for(let e=0;e<events.length;e++){let n=events[e],a="",i=new Date;await web3.eth.getBlock(n.blockNumber).then(function(t){if(t){let e=t.timestamp;i=new Date(1e3*e),a=i.toLocaleString()+" | "}else a=(new Date).toLocaleString()+" | "});let s="UNKNOWN",p=0;if("Kick"===n.event){s="KICK",p=parseInt(n.returnValues.id,10),a+="ID: <b>"+p+"</b> | ";let t=n.returnValues.lot/1e27/1e18;a+="lot: "+t.toFixed(2)+" mcr | ";let e=n.returnValues.bid/1e18;a+="bid: "+e.toFixed(4)+" mdt | ",medianizerPrice=0,await updateMedianizerPrice(n.blockNumber),auctions[p]={id:p,kickDate:i.toUTCString().slice(5),kickPrice:medianizerPrice.toString(),kickLot:t,tends:0,dents:0,bid:e,bidFrom:null,bidDate:null,bidPrice:null,lot:null,tab:0,guy:null,paidPrice:null,dealDate:null,dealPrice:null,state:"OPEN"},a+=medianizerPrice>0?"Monolithos MED Price: ₽"+auctions[p].kickPrice+" | ":"Monolithos MED Price: ₽---,-- | "}else if(n.raw.topics[0]===TEND){if(s="TEND",p=parseInt(n.raw.topics[2],16),!auctions[p])continue;a+="ID: <b>"+p+"</b> | ";let t=parseInt(n.raw.topics[3],16)/1e27/1e18;a+="lot: "+t.toFixed(2)+" mcr | ";let e=n.raw.data.slice(288,-248),u=parseInt(e,16)/1e18;if(a+="bid: "+u.toFixed(3)+" mdt | ",medianizerPrice=0,await updateMedianizerPrice(n.blockNumber),auctions[p].tends+=1,auctions[p].bid=u,auctions[p].bidDate=i.toUTCString().slice(5),auctions[p].bidPrice=medianizerPrice.toString(),auctions[p].lot=t,auctions[p].paidPrice=(t/u).toFixed(2),medianizerPrice>0){let t=100*(auctions[p].paidPrice/auctions[p].bidPrice-1);a+=t>0?"+"+t.toFixed(2)+" % | ":t.toFixed(2)+" % | ",a+="Price: ₽"+auctions[p].bidPrice+" | "}else a+="--,-- % | Price: ₽---,-- | "}else if(n.raw.topics[0]===DEAL){if(s="DEAL",p=parseInt(n.raw.topics[2],16),!auctions[p])continue;if(a+="ID: <b>"+p+"</b> | ",medianizerPrice=0,await updateMedianizerPrice(n.blockNumber),auctions[p].dealDate=i.toUTCString().slice(5),auctions[p].dealPrice=medianizerPrice.toString(),auctions[p].state="CLOSE",medianizerPrice){a+="Took Rate: ₽"+auctions[p].paidPrice+" mcr/mdt ";let t=100*(auctions[p].paidPrice/auctions[p].dealPrice-1);t>0?(a+="(+"+t.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${p})'>Won! 📋</b> | `):(a+="("+t.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${p})'>Lost 📋</b> | `),a+="Price: ₽"+auctions[p].dealPrice+" | "}else a+="Took Rate: ₽"+auctions[p].paidPrice+" mcr/mdt (+-.--%) | ",a+="--,-- % | Price: ₽---,-- | "}else if(n.raw.topics[0]===TICK)s="TICK",p=parseInt(n.raw.topics[2],16),a+="ID: <b>"+p+"</b> | ",a+="Time extended! | ";else if(n.raw.topics[0]===FILE){auctions[0]={id:0,type:"FILE"},s="FILE";const t="0x6265670000000000000000000000000000000000000000000000000000000000",e="0x7461750000000000000000000000000000000000000000000000000000000000",i="0x74746c0000000000000000000000000000000000000000000000000000000000";if(n.raw.topics[2]===t){a+="WHAT: <b> BEG </b> (minimum bid increase) | ";let t=parseInt(n.raw.topics[3])/1e18;a+="VALUE: <b>"+(t=100*(t-1)).toFixed(2)+" %</b> | "}else if(n.raw.topics[2]===e){a+="WHAT: <b> TAU </b> (maximum auction duration) | ";let t=parseInt(n.raw.topics[3]);a+="VALUE: <b>"+(t=t/60/60).toFixed(1)+" hours</b> | "}else if(n.raw.topics[2]===i){a+="WHAT: <b> TTL </b> (bid lifetime / max bid duration) | ";let t=parseInt(n.raw.topics[3]);a+="VALUE: <b>"+(t/=60).toFixed(1)+" minutes</b> | "}else a+="WHAT: <b>UKNOWN</b> | ",console.log(n.raw.topics);a+="New Flapper Update! | "}else if(n.raw.topics[0]===RELY){s="RELY",a+="WHAT: <b>Allow to call auth'ed methods --</b> | ";let t=n.raw.topics[2];a+="TO: <b>0x"+t.slice(-40)+"</b> | "}else if(n.raw.topics[0]===DENY){s="DENY",a+="WHAT: <b>Disallow to call auth'ed methods</b> | ";let t=n.raw.topics[2];a+="TO: <b>0x"+t.slice(-40)+"</b> | "}else console.log("Uknown event"),console.log(n);await web3.eth.getTransaction(n.transactionHash).then(function(t){let e=t.from.slice(0,6)+"..."+t.from.slice(-4);auctions[p]&&("TEND"===s&&(auctions[p].bidFrom=t.from),auctions[p].txFrom=t.from);let i=`<a target="_blank" href="${`https://etherscan.io/tx/${n.transactionHash}`}">Tx:..${n.transactionHash.slice(-3)} Info</a>`;a+=`from: ${e} | ${i} >>`});let u=document.getElementById("app").innerHTML,y="";0!==t&&t!==p||(y='<div class="row flip-'+p+" "+s.toLowerCase()+'">'+s+" >> "+a+"</div>"),document.getElementById("app").innerHTML=y+u}Object.keys(auctions).length>0?showFilter():showEmptyMessage(),eventsLoaded=!0},lastBlockfetch=0,blocksBack=18095,fetchAuctions=async function(t){let e=(lastBlockfetch=await web3.eth.getBlockNumber())-blocksBack;await getFlipEvents(e),await showEvents(t)};async function newBlock(t,e){if(e){if(!eventsLoaded)return;updateGlobals(),eventsLoaded=!1;let t=e.number;await getFlipEvents(t),await showEvents(0)}else console.log(t)}function showFilter(){let t=document.getElementById("filter-panel");if(t){t.style.display="block",document.getElementById("search").style.display="inline",document.getElementById("no-results").style.display="none",showLastUpdate()}}function showLastUpdate(){let t=document.getElementById("last-update"),e=(new Date).toLocaleString();t.innerHTML=`- Updated to: ${e}`}function hideFilterSearch(){let t=document.getElementById("search");t&&(t.style.display="none")}function hideEmptyMessage(){document.getElementById("no-results").style.display="none"}function showEmptyMessage(){let t=document.getElementById("filter-panel");if(t){t.style.display="block",document.getElementById("search").style.display="none",document.getElementById("no-results").style.display="inline",showLastUpdate()}}function filterAuctionById(){let t=$("#fliter-id").val(),e=$(".row");e.hide(),t?$(".flip-"+t).show():e.show()}function showAuctionDetails(t){let e=auctions[t];if(!e)return void alert("Error showing auction details");let n=$("#auction-details");n&&n.hide();let a=`> <b>AUCTION ID: ${t}</b>`;a+="<hr/>",a+="Started: <br/>",a+=`- DATE: ${e.kickDate} <br/>`,a+=`- LOT: ${e.kickLot.toLocaleString("en")} mcr - BID: ${e.bid.toLocaleString("en")} mdt <br/>`,a+=`- MDT MEDIANIZER: ₽${e.kickPrice} mdt/mcr <br/><br/>`,a+=`Bids received: ${e.tends+e.dents} <br/><br/>`,a+="Last Bid:<br/>",a+=`- DATE: ${e.bidDate} <br/>`,a+=`- FROM: ${e.bidFrom} <br/>`,a+=`- LOT: ${e.lot.toLocaleString("en")} mcr - BID: ${e.bid.toLocaleString("en")} mdt <br/>`,a+=`- TOOK RATE: ₽${e.paidPrice} mdt/mcr <br/>`,a+=`- MDT MEDIANIZER: ₽${e.bidPrice} mdt/mcr <br/><br/>`,a+="Ended: <br/>",a+=`- DATE: ${e.dealDate} <br/>`,a+=`- FROM: ${e.txFrom} <br/>`,a+=`- TOOK RATE: ₽${e.paidPrice} mdt/mcr <br/>`,a+=`- MDT MEDIANIZER: ₽${e.dealPrice} mdt/mcr <br/><br/>`,a+="Results: <br/>",a+=`- TOOK RATE DIFF: ${(100*(e.paidPrice/e.dealPrice-1)).toFixed(2)}% <br/>`,a+=`- PROFIT: <b>${(e.lot-e.bid*e.dealPrice).toLocaleString("en")} mcr</b>`,a+="<hr/>",a+='<a style="float: right;" onclick="hideAuctionDetails()">CLOSE<a/>',n&&(n.html(a),n.fadeIn("normal"))}function hideAuctionDetails(){let t=$("#auction-details");t&&t.fadeOut("normal")}async function updateGlobals(){let t=$("#globals");vatContract.methods.dai(VOW_ADDRESS).call().then(function(e){let n=e/10**45;vatContract.methods.sin(VOW_ADDRESS).call().then(function(e){let a=e/10**45;vowContract.methods.hump().call().then(function(e){let i=e/10**45,s=Math.round(100*(n-a-i))/100;t.find("#available").text(s.toLocaleString("en"))})})}),vowContract.methods.bump().call().then(function(e){let n=Math.round(e/10**45*10)/10;t.find("#bump").text(n.toLocaleString("en"))}),flapContract.methods.beg().call().then(function(e){let n=100*(e/1e18-1);t.find("#beg").text(n.toFixed(2))}),flapContract.methods.ttl().call().then(function(e){let n=e/60;t.find("#ttl").text(n.toFixed(1))}),flapContract.methods.tau().call().then(function(e){let n=e/60/60;t.find("#tau").text(n.toFixed(1))});let e=await web3.eth.getBlockNumber();await updateMedianizerPrice(e),t.find("#mdt").text("₽"+medianizerPrice)}async function loadAllHistory(){if(usingRemoteProvider){alert("Sorry, this feature is disabled using the remote ETH provider.\n\nTry to install MetaMask and select Mainnet network")}else hideFilterSearch(),hideEmptyMessage(),events=[],auctions={},eventsLoaded=!1,blocksBack=await web3.eth.getBlockNumber(),fetchAuctions(0)}updateGlobals(),fetchAuctions(0),setTimeout(function(){console.log("Getting new data from chain..."),web3.eth.subscribe("newBlockHeaders",newBlock)},5e3);