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


### ethVolume24hToEntity
> Stream containing the total amount of ETH (and it's corresponding USD value) that has flowed into specific entities during a 24 hour window. 


Subscribe to the stream (similar to above)

```javascript
const ta = new TokenAnalyst()

ta.streams.ethVolume24hToEntity.subscribe(console.log);
```

Expected Result

```json
{ TOENTITY: null,
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 631137,
  USD_VALUE: 76530049.27645175 }
{ TOENTITY: '',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 10086,
  USD_VALUE: 1221871.141281756 }
{ TOENTITY: 'Hotbit',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 216,
  USD_VALUE: 26121.005422495535 }
{ TOENTITY: null,
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 631166,
  USD_VALUE: 76533550.18161371 }
{ TOENTITY: '',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 10087,
  USD_VALUE: 1221991.8621494106 }
```



### ethVolume24hFromEntity
> Stream containing the total amount of ETH (and it's corresponding USD value) that has flowed out of specific entities during a 24 hour window. 

Subscribe to the stream (similar to above)

```javascript
const ta = new TokenAnalyst()

ta.streams.ethVolume24hFromEntity.subscribe(console.log);
```

Expected Result

```json
{ FROMENTITY: '',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 3607,
  USD_VALUE: 436771.0933458832 }
{ FROMENTITY: 'Bitrex',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 10982,
  USD_VALUE: 1335475.554996891 }
{ FROMENTITY: 'Binance',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 85055,
  USD_VALUE: 10344880.07675392 }
{ FROMENTITY: null,
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 676555,
  USD_VALUE: 82000394.80895928 }
{ FROMENTITY: 'Poloniex',
  STARTTIME: 1542931200000,
  ENDTIME: 1543017600000,
  ETH_VALUE: 2401,
  USD_VALUE: 290775.96243005444 }
```

