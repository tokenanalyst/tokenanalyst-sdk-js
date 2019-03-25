## Data Streams {docsify-ignore}

### BTC

#### btcBlocks
> Retrieves confirmed blocks from the Bitcoin network. Blocks are considered confirmed after they have had 6 confirmations or more

Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst();

ta.streams.btcBlocks.subscribe(console.log);
```

Expected result

```json

```

#### btcTransactions
> Retrieves confirmed transactions from the Bitcoin network. Transactions are considered confirmed after they have had 6 confirmation or more


Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst();

ta.streams.btcTransactions.subscribe(console.log);
```

Expected result

```json
{
  "transaction": {
    "transactionId": "6ed69f17e9fd0fec03aa54abd66b6222cf05d1c4716cc225019fbfeac4b12b7e",
    "blockHash": "00000000000000000008ca147511a6426fe1aa4b570b8cd77493bdfe98ad68d7",
    "hash": "4cde292cff6bfdb05c49b779a03afb86d9a27a48dcf666e45ab122c72bba1456",
    "version": 1,
    "size": 417,
    "vsize": 201,
    "weight": 801,
    "locktime": 568115
  },
  "inputs": [
    {
      "previousTransactionId": "e9604279a80a80f319dedda74792604e86fec7b4f4f96623812f77b1622fbc66",
      "vout": 1,
      "scriptSig": {},
      "sequence": 4294967293
    }
  ],
  "outputs": [
    {
      "index": 0,
      "bitcoinValue": 0.1272065,
      "scriptPubKey": {},
      "scriptPubKeyReqSigs": 1,
      "scriptPubKeyType": "pubkeyhash",
      "scriptPubKeyAddresses": [
        "1Pcjc5YVELMhYboUxjpcLifA8dmfqZsapH"
      ]
    },
    {
      "index": 1,
      "bitcoinValue": 0.89926925,
      "scriptPubKey": {},
      "scriptPubKeyReqSigs": 1,
      "scriptPubKeyType": "witness_v0_scripthash",
      "scriptPubKeyAddresses": [
        "bc1qy52ve9ygrducgvu3hylxupf3eescshjfglytsxsm025auazhcdmq6w3z24"
      ]
    }
  ]
}
```

### ETH

#### smartContractFunctionCalls
> Stream of internal and external Function calls that have been confirmed on the ethereum mainnet.

Connect to the websockets server after installing the package and subscribe to the stream


```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst()

ta.streams.smartContractFunctionCalls.subscribe(console.log);
```

Expected Result

```json
{ blockNumber: 7279239,
  transactionHash: '0x8c2e14bdb80887b7befe63fe3f37a70ede34ef19c0bd4643ba5631839d6c6dd9',
  traceAddress: [],
  callTo: '0xf429b7270F7078d5561789C15D301692e32B1e48',
  callFrom: '0x13FB97da9d2407DA6dBc2D6C175b51d0f5d9d903',
  transactionFrom: '0x13FB97da9d2407DA6dBc2D6C175b51d0f5d9d903',
  signatureHash: '0x0f15f4c0',
  function: 'activate()',
  inputValues: <Buffer >,
  decodedInputValues: [],
  outputValues: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 5c 79 51 91>,
  decodedOutputValues: [],
  callType: 'call',
  timestamp: 1551368209,
  status: true }
{ blockNumber: 7279239,
  transactionHash: '0xcbdd65d342a2bc69d6401c2a335335448d0ffac0d4091beb9d509af7d331dc70',
  traceAddress: [],
  callTo: '0xc21022C5B4d5Dba5EE61044c065fc90D79DfB933',
  callFrom: '0x30F770867b21F58e018F878b467b6635eCb3b1Ef',
  transactionFrom: '0x30F770867b21F58e018F878b467b6635eCb3b1Ef',
  signatureHash: '0xa9059cbb',
  function: 'transfer(address,uint256)',
  inputValues: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 c7 ba 3d 96 f2 d2 33 1e ba 78 6b 73 0e c1 3b 93 a3 fc 64 13 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >,
  decodedInputValues: 
   [ '0xC7bA3d96F2D2331EBA786b730ec13B93A3fC6413',
     '42900000000000000000' ],
  outputValues: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01>,
  decodedOutputValues: [],
  callType: 'call',
  timestamp: 1551368209,
  status: true }
```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `blockNumber`| *integer*  | Hash of the block that this function call was mined in         |
| `transactionHash` | *string* | Hash of the transaction which contained this function call             |
| `traceAddress`   | *array* | Location of this function call in the trace of this transaction              |
| `callTo` | *string*   | Address where this function call was sent to                |
| `callFrom` | *string*   | Address where this function call initiated from |
| `transactionFrom`| *string*  | Address which initialized this transaction       |
| `signatureHash` | *string* | Signature hash of the function   https://www.4byte.directory/         |
| `function`   | *string* | Decoded names and types of this function              |
| `inputValues` | *bytes*   | Input values of the function in bytes                |
| `decodedInputValues` | *array*   | Decoded inputs based on function input types |
| `outputValues`| *bytes*  | Output values of the function in bytes       |
| `decodedOutputValues` | *array* | Decoded output values of the function output types |
| `timestamp`   | *integer* | Unix epoch time in which this function call was mined              |
| `status` | *boolean*   | Success or failure of this function call                |


#### smartContractEvents
> Stream of Events that have been confirmed on the ethereum mainnet.

Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst()

ta.streams.smartContractEvents.subscribe(console.log);
```

Expected Result

```json
{ blockNumber: 7279280,
  transactionHash: '0x4dd7d68d838916d92425f340ffbb8e28103a63a6d691e6814703509e9cd3d34a',
  logIndex: 133,
  address: '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b',
  signatureHash: '0x5152abf959f6564662358c2e52b702259b78bac5ee7842a0f01937e670efcc7d',
  event: 'OrderCancelled(bytes32)',
  parameterValues: <Buffer 2f 23 fb 13 d3 4a bd e4 5e 06 b0 3c ef 44 3d 2e 98 8d 73 09 53 29 7d c3 e7 56 ed 0e b4 26 54 af>,
  decodedParameterValues: 
   [ 'b\'/#\\xfb\\x13\\xd3J\\xbd\\xe4^\\x06\\xb0<\\xefD=.\\x98\\x8ds\\tS)}\\xc3\\xe7V\\xed\\x0e\\xb4&T\\xaf\'' ],
  timestamp: 1551369160 }
{ blockNumber: 7279280,
  transactionHash: '0xa4bbca44ba36e0b1894c1bf0eadb197fdcc85057f102e13e84b5c3051767d417',
  logIndex: 134,
  address: '0x4ED25d8577feb83946B1548998fB7b157EAd8Bb9',
  signatureHash: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  event: 'Transfer(address,address,uint256)',
  parameterValues: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 30 f7 70 86 7b 21 f5 8e 01 8f 87 8b 46 7b 66 35 ec b3 b1 ef 00 00 00 00 00 00 00 00 00 00 00 00 09 80 e2 6a 1f 27 ... >,
  decodedParameterValues: 
   [ '0x30F770867b21F58e018F878b467b6635eCb3b1Ef',
     '0x0980E26a1f273200F25eF9256Bc3Af5476bA2152',
     '10000000000000000000000' ],
  timestamp: 1551369160 }
```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `blockNumber`| *integer*  | Hash of the block that this Event was mined in         |
| `transactionHash` | *string* | Hash of the transaction which contained this Event             |
| `logIndex`   | *integer* | Location of the log which contains this Event              |
| `address` | *string*   | Address where this Event originated from                |
| `signatureHash` | *string*   | Signature hash of the event |
| `event`| *string*  | Decoded event based on signature hash       |
| `parameterValues` | *bytes* | Parameters of this event in bytes         |
| `decodedParameterValues`   | *array* | Decoded parameters of this event |
| `timestamp`   | *integer* | Unix epoch time in which this event was mined              |

#### erc20TokenTransfer
> Stream of erc20 token transfers that have been confirmed on the ethereum mainnet.

Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst()

ta.streams.erc20TokenTransfer.subscribe(console.log);
```

Expected Result

```json
{ blockNumber: 7366486,
  transactionHash: '0xaf297e497b3010fddd75aacb851e8eb3c18f7c4bf2075e8ec5354c9204624650',
  tokenAddress: '0x05f4a42e251f2d52b8ed15E9FEdAacFcEF1FAD27',
  callFrom: '0xD551234Ae421e3BCBA99A0Da6d736074f22192FF',
  transactionFrom: '0xD551234Ae421e3BCBA99A0Da6d736074f22192FF',
  fromAddress: '0xD551234Ae421e3BCBA99A0Da6d736074f22192FF',
  toAddress: '0x24B314EF41911DE1377F8DCF8e7061a2B630dE41',
  tokenValue: '5753000000000000',
  logIndex: 0,
  traceAddress: [],
  status: true,
  timestamp: 1552557692 }
{ blockNumber: 7366486,
  transactionHash: '0x8943175a73ee70f55ceceac34a14aa2f43336af810899c7afa8b4b05c13efe24',
  tokenAddress: '0x17609152b35dcc57c5CDe9Fffa204f30767c462e',
  callFrom: '0x093Bff3639B42295Aee51821D444996b9178E03b',
  transactionFrom: '0x093Bff3639B42295Aee51821D444996b9178E03b',
  fromAddress: '0x093Bff3639B42295Aee51821D444996b9178E03b',
  toAddress: '0x8c7D8E634344E16964B9922C42Af359912EC732c',
  tokenValue: '13478000000000',
  logIndex: 1,
  traceAddress: [],
  status: true,
  timestamp: 1552557692 }

```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `blockNumber`| *integer*  | Hash of the block that this function call was mined in         |
| `transactionHash` | *string* | Hash of the transaction which contained this function call             |
| `tokenAddress`   | *string* | Address of the erc20 token |
| `callFrom` | *string*   | Address which initiated this erc20 token transfer  |
| `transactionFrom` | *string*   | Address which initiated the transaction which initiated erc20 token transfer |
| `fromAddress`| *string*  | Address from which these tokens are sent      |
| `toAddress` | *string* |  Address into which these tokens are received      |
| `tokenValue`   | *string* | Number of tokens transferred |
| `logIndex` | *integer*   | Location of the log which contains this Event       |
| `traceAddress` | *array*   | Location of this function call in the trace of this transaction |
| `status`| *boolean*  | Success or failure of this token transfer       |
| `timestamp` | *integer* | Unix epoch time in which this function call was mined              |
#### erc20BalanceDiff
> Stream of erc20 token balance diffs that have been confirmed on the ethereum mainnet.

Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst()

ta.streams.erc20BalanceDiff.subscribe(console.log);
```

Expected Result

```json
{ blockNumber: 7366583,
  transactionHash: '0xc00235373e28058c188b403bd7e8d35075d0ac049a84a4e4518f21bddafc52b8',
  transactionIndex: 105,
  tokenAddress: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
  holderAddress: '0xcd166AF227279dD0FBbd9b8b4A7385716813CFab',
  balanceFrom: '1134938463080000000000',
  balanceTo: '1499033045270000000000',
  timestamp: 1552558989 }
{ blockNumber: 7366583,
  transactionHash: '0xbf72fbe93e45f4d94c008f42cf610266e072c2db607bab2c2cc233021fddfc72',
  transactionIndex: 110,
  tokenAddress: '0x954b5De09A55e59755aCBda29e1Eb74A45D30175',
  holderAddress: '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208',
  balanceFrom: '5671226144255697762481040',
  balanceTo: '5207932777807932213638498',
  timestamp: 1552558989 }

```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `blockNumber`| *integer*  | Hash of the block that this function call was mined in         |
| `transactionHash` | *string* | Hash of the transaction which contained this function call             |
| `tokenAddress`   | *string* | Address of the erc20 token |
| `holderAddress` | *string*   | Address of the token holder  |
| `balanceFrom` | *string*   | Final balance after the transaction |
| `balanceTo`| *string*  | Initial balance before the transaction      |
| `timestamp` | *integer* | Unix epoch time in which this function call was mined              |

#### transactionsWithLabelsAndPrice
> Stream of transactions that have been confirmed on the Ethereum Mainnet with labels for certain addresses and USD value of ETH transacted

Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst()

ta.streams.transactionsWithLabelsAndPrice.subscribe(console.log);
```

Expected Result

```json
{ PRICE: 120.30333455403645,
  MINEDAT: 1542999842,
  TXHASH: '0x946c9d094d8f26b8ad8b45d2c759ecda0bcfe0041aae8b5df4f6f4ace63dd329',
  FROMADDR: '0x3aea1735c5d6603561ad89046ea48553a4969b82',
  FROMLABEL: null,
  FROMCLASSIFICATION: null,
  FROMENTITY: null,
  TOADDR: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
  TOLABEL: 'Storj',
  TOCLASSIFICATION: 'Token Contract',
  TOENTITY: '',
  WEIVALUE: '0',
  TX:
   { BLOCKHASH: '0xd8bccaefb57cbe5ec4db13a2aaba0a3bdbc27999826b42808e994567876e9088',
     BLOCKNUMBER: 6759420,
     FROMADDR: '0x3aea1735c5d6603561ad89046ea48553a4969b82',
     GAS: 36752,
     GASPRICE: 2100000001,
     HASH: '0x946c9d094d8f26b8ad8b45d2c759ecda0bcfe0041aae8b5df4f6f4ace63dd329',
     NONCE: 3,
     TOADDR: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
     TRANSACTIONINDEX: 63,
     WEIVALUE: '0',
     V: 38,
     R: '0xe5ac1ececf59de80516346935e04ad2d502086396b490e697a76592984dcef75',
     S: '0x16ad01900b34722e86ad6fec80a2aeef67028c0e90e43173331f7a19765d56e7' } }
```

**Return result description**

| Attribute             | Type      | Description                                                                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------------------------------------------------------|
| `PRICE`               | *float*   | Price of ETH at the time of the transaction                                                                                |
| `MINEDAT`             | *integer* | Unix timestamp of when the transaction was mined on the blockchain                                                         |
| `TXHASH`              | *string*  | Hash of the transaction                                                                                                    |
| `FROMADDR`            | *string*  | Hash of the sender address                                                                                                 |
| `FROMLABEL`           | *string*  | Label specifically identifying the senders address in our database (ex: 'Binance_1'). ```null``` if no label               |
| `FROMCLASSIFICATION`  | *string*  | Tag classifying the sender in our database (ex: 'Exchange'). ```null``` if no label                                        |
| `FROMENTITY`          | *string*  | Entity tag in our database identifying who/what is the owner of the sender address (ex: 'Binance'). ```null``` if no label |
| `TOADDR`              | *string*  | Hash of the receiver address                                                                                               |
| `TOLABEL`             | *string*  | Label specifically identifying the receivers address in our database. ```null``` if no label                               |
| `TOCLASSIFICATION`    | *string*  | Tag classifying the receiver in our database (ex: 'Exchange'). ```null``` if no label                                      |
| `TOENTITY`            | *string*  | Entity tag in our database identifying who/what is the owner of the sender address. ```null``` if no label                 |
| `WEIVALUE`            | *string*  | Wei value of the amount transferred in this transaction                                                                    |
| `TX.BLOCKHASH`        | *string*  | Hash of the block that this transaction was mined in                                                                       |
| `TX.BLOCKNUMBER`      | *integer* | Number of the block that this transaction was mined in                                                                     |
| `TX.FROMADDR`         | *string*  | Hash of the sender address (same as above)                                                                                 |
| `TX.GAS`              | *integer* | Amount of gas spent for this transaction                                                                                   |
| `TX.GASPRICE`         | *integer* | Price of the gas for this transaction in Wei                                                                               |
| `TX.HASH`             | *string*  | Hash of this transaction (same as above)                                                                                   |
| `TX.NONCE`            | *integer* | the number of transactions made by the sender prior to this one                                                            |
| `TX.TOADDR`           | *string*  | Hash of the sender (same as above)                                                                                         |
| `TX.TRANSACTIONINDEX` | *integer* | Integer of the transaction's index position in the block                                                                   |
| `TX.WEIVALUE`         | *string*  | Wei value of the amount transferred in this transaction (same as above)                                                    |
| `TX.V`                | *integer* | ECDSA recovery id                                                                                                          |
| `TX.R`                | *string*  | ECDSA signature r                                                                                                          |
| `TX.S`                | *string*  | ECDSA signature s                                                                                                          |

#### ethVolume24hToEntity
> Stream containing the total amount of ETH (and it's corresponding USD value) that has flowed into specific entities during a 24 hour window. 


Subscribe to the stream (similar to above)

```javascript
const ta = new TokenAnalyst()

ta.streams.ethVolume24hToEntity.subscribe(console.log);
```

Expected Result

```json
{ FROMENTITY: 'Hotbit',
  STARTTIME: 1543276800000,
  ENDTIME: 1543363200000,
  ETH_VALUE: 1174.2391,
  USD_VALUE: 135019.7084925632 }
{ FROMENTITY: 'Binance',
  STARTTIME: 1543276800000,
  ENDTIME: 1543363200000,
  ETH_VALUE: 21934.7165,
  USD_VALUE: 2323761.293137457 }
```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `TOENTITY`  | *string*  | Entity tag in our database identifying who/what is the owner of the sender address         |
| `STARTTIME` | *integer* | Unix epoch time in **milliseconds** of the start time of the aggregation window            |
| `ENDTIME`   | *integer* | Unix epoch time in **milliseconds** of the end time of the aggregation window              |
| `ETH_VALUE` | *float*   | Amount of ETH that has flowed to this entity in the specified time window                  |
| `USD_VALUE` | *float*   | USD value of the amount of ETH that has flowed to this entity in the specified time window |


#### ethVolume24hFromEntity
> Stream containing the total amount of ETH (and it's corresponding USD value) that has flowed out of specific entities during a 24 hour window. 

Subscribe to the stream (similar to above)

```javascript
const ta = new TokenAnalyst()

ta.streams.ethVolume24hFromEntity.subscribe(console.log);
```

Expected Result

```json
{ FROMENTITY: 'Kucoin',
  STARTTIME: 1543276800000,
  ENDTIME: 1543363200000,
  ETH_VALUE: 3174.2391,
  USD_VALUE: 335019.7084925632 }
{ FROMENTITY: 'HitBTC',
  STARTTIME: 1543276800000,
  ENDTIME: 1543363200000,
  ETH_VALUE: 21934.7165,
  USD_VALUE: 2323761.293137457 }
```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `FROMENTITY`| *string*  | Entity tag in our database identifying who/what is the owner of the receiver address       |
| `STARTTIME` | *integer* | Unix epoch time in **milliseconds** of the start time of the aggregation window            |
| `ENDTIME`   | *integer* | Unix epoch time in **milliseconds** of the end time of the aggregation window              |
| `ETH_VALUE` | *float*   | Amount of ETH that has flowed from this entity in the specified time window                |
| `USD_VALUE` | *float*   | USD value of the amount of ETH that has flowed from this entity in the specified window    |



#### ethVolume3hToEntity
> Stream containing the total amount of ETH (and it's corresponding USD value) that has flowed into specific entities during a 3 hour time window. 


Subscribe to the stream (similar to above)

```javascript
const ta = new TokenAnalyst()

ta.streams.ethVolume3hToEntity.subscribe(console.log);
```

Expected Result

```json
{ FROMENTITY: 'Hotbit',
  STARTTIME: 1543276800000,
  ENDTIME: 1543287600000,
  ETH_VALUE: 1174.2391,
  USD_VALUE: 135019.7084925632 }
{ FROMENTITY: 'Binance',
  STARTTIME: 1543276800000,
  ENDTIME: 1543287600000,
  ETH_VALUE: 21934.7165,
  USD_VALUE: 2323761.293137457 }
```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `TOENTITY`  | *string*  | Entity tag in our database identifying who/what is the owner of the sender address         |
| `STARTTIME` | *integer* | Unix epoch time in **milliseconds** of the start time of the aggregation window            |
| `ENDTIME`   | *integer* | Unix epoch time in **milliseconds** of the end time of the aggregation window              |
| `ETH_VALUE` | *float*   | Amount of ETH that has flowed to this entity in the specified time window                  |
| `USD_VALUE` | *float*   | USD value of the amount of ETH that has flowed to this entity in the specified time window |



#### ethVolume3hFromEntity
> Stream containing the total amount of ETH (and it's corresponding USD value) that has flowed out of specific entities during a 3 hour time window. 

Subscribe to the stream (similar to above)

```javascript
const ta = new TokenAnalyst()

ta.streams.ethVolume3hFromEntity.subscribe(console.log);
```

Expected Result

```json
{ FROMENTITY: 'Kucoin',
  STARTTIME: 1543276800000,
  ENDTIME: 1543276800000,
  ETH_VALUE: 3174.2391,
  USD_VALUE: 335019.7084925632 }
{ FROMENTITY: 'HitBTC',
  STARTTIME: 1543276800000,
  ENDTIME: 1543276800000,
  ETH_VALUE: 21934.7165,
  USD_VALUE: 2323761.293137457 }
```

**Return result description**

| Attribute   | Type      | Description                                                                                |
|-------------|-----------|--------------------------------------------------------------------------------------------|
| `FROMENTITY`| *string*  | Entity tag in our database identifying who/what is the owner of the receiver address       |
| `STARTTIME` | *integer* | Unix epoch time in **milliseconds** of the start time of the aggregation window            |
| `ENDTIME`   | *integer* | Unix epoch time in **milliseconds** of the end time of the aggregation window              |
| `ETH_VALUE` | *float*   | Amount of ETH that has flowed from this entity in the specified time window                |
| `USD_VALUE` | *float*   | USD value of the amount of ETH that has flowed from this entity in the specified window    |


#### ethLargeTransactions
> Retrieves confirmed transactions from the Ethereum network (with 6 or more confirmations) which have a value of more than 
500,000 USD. 

Connect to the websockets server after installing the package and subscribe to the stream

```javascript
const {TokenAnalyst} = require('@tokenanalyst/sdk');

const ta = new TokenAnalyst();

ta.streams.ethLargeTransactions.subscribe(console.log);
```

#### erc20TokenTransferWithSymbol
> Parsed ERC20 token transfers, including the token symbol

#### erc20TokenTransferWithSymbolAndUSDValue
> Parsed ERC20 token transfers with USD value

#### erc20LargeTokenTransfer
> ERC20 token transfer with a value of more than USD 500k