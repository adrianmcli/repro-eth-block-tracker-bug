const Web3 = require("web3");
const PollingBlockTracker = require("eth-block-tracker")

const web3 = new Web3("http://127.0.0.1:8545"); // HttpProvider

// patch sendAsync method
web3.currentProvider.sendAsync = web3.currentProvider.send;

// create block tracker
const blockTracker = new PollingBlockTracker({ provider: web3.currentProvider });

// listen
blockTracker
  .on("latest", async blockNum => {
    // get full block info with `web3.eth.getBlock`
    const block = await web3.eth.getBlock(blockNum, true);
    console.log(block)
  })
  .on("error", err => console.error(err));
