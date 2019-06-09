# Bug reproduction repo for Eth-Block-Tracker

[Eth-Block-Tracker](https://github.com/MetaMask/eth-block-tracker) appears to no longer work with the latest version of [Web3.js](https://github.com/ethereum/web3.js) (i.e. beta 55). This repo provides an example of using Eth-Block-Tracker with [Infura](https://infura.io) and [Ganache](https://github.com/trufflesuite/ganache-cli) (they both provide different errors).

## To run with Infura

0. Run `npm install`.
1. Replace Line 4 of `infura.js` (where it says `API_KEY_HERE`) with an Infura API key.
2. Run `node infura.js` in your terminal.
3. Observe the resulting error (see the "Infura error" section below).

## To run with Ganache

0. Run `npm install`.
1. In a separate terminal, run `ganache-cli` globally (make sure it's listening on `127.0.0.1:8545`).
2. Run `node ganache.js` in your terminal.
3. Observe the resulting error (see the "Ganache error" section below).

## Infura error

```
(node:10128) UnhandledPromiseRejectionWarning: Error: Node error: {"code":-32600,"message":"invalid json request"}
    at Function.validate (/Users/adrianli/dev/repro-infura-block-track/node_modules/web3-providers/dist/web3-providers.cjs.js:114:18)
    at HttpProvider._callee$ (/Users/adrianli/dev/repro-infura-block-track/node_modules/web3-providers/dist/web3-providers.cjs.js:710:61)
    at tryCatch (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:45:40)
    at Generator.invoke [as _invoke] (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:271:22)
    at Generator.prototype.(anonymous function) [as next] (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:97:21)
    at asyncGeneratorStep (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
    at _next (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/helpers/asyncToGenerator.js:25:9)
    at processTicksAndRejections (internal/process/task_queues.js:86:5)
```

## Ganache error

```
(node:10151) UnhandledPromiseRejectionWarning: Error: Node error: {"message":"Method [object Object] not supported.","code":-32000,"data":{"stack":"Error: Method [object Object] not supported.\n    at u.handleRequest (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:517233)\n    at t (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380864)\n    at a.handleRequest (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:516220)\n    at t (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380864)\n    at s.f.handleRequest (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:509350)\n    at s.handleRequest (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:507176)\n    at t (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380864)\n    at c.handleRequest (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:515234)\n    at t (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380864)\n    at a.handleRequest (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:514681)\n    at t (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380864)\n    at d._handleAsync (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380900)\n    at Timeout._onTimeout (/Users/adrianli/n/lib/node_modules/ganache-cli/build/ganache-core.node.cli.js:52:380325)\n    at listOnTimeout (internal/timers.js:535:17)\n    at processTimers (internal/timers.js:479:7)","name":"Error"}}
    at Function.validate (/Users/adrianli/dev/repro-infura-block-track/node_modules/web3-providers/dist/web3-providers.cjs.js:114:18)
    at HttpProvider._callee$ (/Users/adrianli/dev/repro-infura-block-track/node_modules/web3-providers/dist/web3-providers.cjs.js:710:61)
    at tryCatch (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:45:40)
    at Generator.invoke [as _invoke] (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:271:22)
    at Generator.prototype.(anonymous function) [as next] (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:97:21)
    at asyncGeneratorStep (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
    at _next (/Users/adrianli/dev/repro-infura-block-track/node_modules/@babel/runtime/helpers/asyncToGenerator.js:25:9)
    at processTicksAndRejections (internal/process/task_queues.js:86:5)
```