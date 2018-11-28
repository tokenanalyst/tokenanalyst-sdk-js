## Data Streams {docsify-ignore}

### transactionsWithLabelsAndPrice
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

### ethVolume24hToEntity
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


### ethVolume24hFromEntity
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



### ethVolume3hToEntity
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



### ethVolume3hFromEntity
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


