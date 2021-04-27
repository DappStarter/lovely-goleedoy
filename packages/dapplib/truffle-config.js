require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hockey knife off suggest name recipe sad million grace casino tattoo genre'; 
let testAccounts = [
"0xb3bb7ddef074bd7782b3984033735ca896495d9c80208bb13c9ae2e46f5820a3",
"0x18dee2462f7383f735dd80534dbdc5bc8df8a2f58eb9cfbd4ca5baf69c98d01a",
"0x0d27ad8850fb2a37dee488f3ad5812b1578f7678cf873901bcd0a65fb463f94d",
"0x69ed46fa02ae8809b5a28303ec072e8ca735ba95b1eb8f537f534839e263f827",
"0x531ae8fa153e1f4024fb7c99f5a5b0f4f1f1bf979d5c82cc9ecd99706b4bee25",
"0x00db5a9ae9fb9eaec284656264c78a97680ad6ffab1f0eb9e9f765d8376e23fe",
"0xd9188cde3aec23091ae7fd96f266747eb7e199bb667245d98b5d542f2d5362ac",
"0xb6ff51378f956c209e3699cb8ca8307edf68b5021413ef3f33b03ba03d11ff92",
"0xf3461b707bc1dd24a691d0578566b7b2c045938b0a77c5ec0969046b19fd6e77",
"0x1c2adaf064b2f278f85c21c68c86d28e3b0a8b492ff595d0cbd4460e4019c844"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

