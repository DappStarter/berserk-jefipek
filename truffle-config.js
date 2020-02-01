const HDWalletProvider = require('@truffle/hdwallet-provider');

let devUrl = 'http://127.0.0.1:7545/';
let mnemonic = 'give clog orphan slab chase note praise proud harvest lobster food general';   
let testAccounts = [
"0xc89449f27c865319f07f55202f3196a5e8b69acb9aeb53dca904f0fd7b8fc6c7",
"0xdd1241c384eda5f9bb385a174bd4f7af85858c3f658d90ea9d8c14b8ae1dfacc",
"0x935bac381c729fcf59e12ef585413a5eb065e59a0b2092ca32491865ee0c8828",
"0x2165fdb483abf3d6fbbd71bcb90d48176f339df61362c9fe7c1a71860248218c",
"0xb3a8b5893bc1b3b1e0342ece1756bfc4b368f6c6a787303cbde73c5442b3b8cd",
"0xadb69abda1ab26ca0ccc5f712fd902243977cee5be9073f2786d8f2adc2baa49",
"0x2e9f175715eb4f8918fd9d0849f2fa4dc89dc8e9d379ba6e2d4ed8493555559b",
"0x6ff9a0003db8356a7846979ab7528428ef162ab791f9ded11eef3461bf5fbd2a",
"0xf7649c972bb2d3e79c64602e0bd4cfdafec99010fa4ee9f1ba9f4da7766f7173",
"0xdc2a9d8679073404a01854a39623d0b228caa44233353d050bf4cd1192b1ab74"
];  

module.exports = {
  networks: {
    development: {
      url: devUrl,  // Required for DappStarter config generation
      provider: () => new HDWalletProvider(
                                      testAccounts,
                                      devUrl,           // provider url
                                      0,                // address index
                                      10,               // number of addresses
                                      true,             // share nonce
                                      `m/44'/60'/0'/0/` // wallet HD path
                                    ),
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.5.11'
    }
  }
};
