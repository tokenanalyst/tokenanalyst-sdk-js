## Filters {docsify-ignore}

You can add one or more filters (or what we call ```predicates ```) to your subscription by including them when requiring the package and as a comma separated list in the parameter of the subscribe call.

### Example

Filtering for transactions greater than 0.5 ETH *and* where the sender has a label to identify them.

```javascript
const {TokenAnalyst, EthGreaterThan, FromLabelExists} = require('@tokenanalyst/sdk);

const ta = new TokenAnalyst()

ta.streams.transactionsWithLabelsAndPrice.subscribe(console.log,
  predicates = [
  new EthGreaterThan(0.5),
  new FromLabelExists()
]);
```

Expected Result

```json
{ PRICE: 121.4259976196289,
  MINEDAT: 1543081209,
  TXHASH: '0xaa6479f7a7b307d42a5d984aafed762ed22b715834dfe69625e1b3b5db0f5f55',
  FROMADDR: '0xd551234ae421e3bcba99a0da6d736074f22192ff',
  FROMLABEL: 'Binance_2',
  FROMCLASSIFICATION: 'Exchange',
  FROMENTITY: 'Binance',
  TOADDR: '0x01272722113101a5b6d90305faca154b6b9bc3c1',
  TOLABEL: null,
  TOCLASSIFICATION: null,
  TOENTITY: null,
  WEIVALUE: '2903703300000000000',
  TX:
   { BLOCKHASH: '0x16d884d6d0155319c6911d4f005252cd0b2aedb185edb76fee23d3ef678152b2',
     BLOCKNUMBER: 6765220,
     FROMADDR: '0xd551234ae421e3bcba99a0da6d736074f22192ff',
     GAS: 21000,
     GASPRICE: 30000000000,
     HASH: '0xaa6479f7a7b307d42a5d984aafed762ed22b715834dfe69625e1b3b5db0f5f55',
     NONCE: 1126992,
     TOADDR: '0x01272722113101a5b6d90305faca154b6b9bc3c1',
     TRANSACTIONINDEX: 7,
     WEIVALUE: '2903703300000000000',
     V: 37,
     R: '0xfaf4459a5df54e4c16f6ec2c5a1caabbb56de359728bb8b32af77fae4fea38c4',
     S: '0x174dd86e3558e3f3500cd0c8aa4af3d72e4b8dbeae3ed74edfe9887c584b7c33' } }
{ PRICE: 121.44356891087124,
  MINEDAT: 1543081221,
  TXHASH: '0x741cd810a5690e992312459e553a749cdb9c4097b9dd1a343bfc049c4634a362',
  FROMADDR: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',
  FROMLABEL: 'Ethermine',
  FROMCLASSIFICATION: 'Mining',
  FROMENTITY: '',
  TOADDR: '0xf5d8e78cf03239a347dfb3ff2d203eff4c339fc6',
  TOLABEL: null,
  TOCLASSIFICATION: null,
  TOENTITY: null,
  WEIVALUE: '7818471203667177798',
  TX:
   { BLOCKHASH: '0x498b350ee6c063ce3facb46c222fc084f04cd12e7620a2e1c066a5f41c97ebcc',
     BLOCKNUMBER: 6765221,
     FROMADDR: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',
     GAS: 50000,
     GASPRICE: 1000000000,
     HASH: '0x741cd810a5690e992312459e553a749cdb9c4097b9dd1a343bfc049c4634a362',
     NONCE: 16776537,
     TOADDR: '0xf5d8e78cf03239a347dfb3ff2d203eff4c339fc6',
     TRANSACTIONINDEX: 4,
     WEIVALUE: '7818471203667177798',
     V: 37,
     R: '0x6ca7e9e91f8cebef09d4695b7b46b547ccf3f16c4c67ac4c6d3704b2d2bbbbac',
     S: '0x5d80316ef97de5be898edbc7a7cb8a945e0854cdabcf1f88892d7cf3bba4df01' } }
```


### Available Filters

| Filter                   | Input Parameter Type | Example Usage                                                  | Description                                                                                                   |
|--------------------------|----------------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **EventSmartContractAddress**       | *string*             | new EventSmartContractAddress("0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b")                                        | Filter for events which were emitted by a particular address                            |
| **FunctionCallSmartContractAddress**          | *string*             | new FunctionCallSmartContractAddress("0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b")                                          | Filter for function calls which were sent to a particular address                             |
| **SignatureHash**           |  *string* | new SignatureHash("0xa9059cbb")                                          | Filter for events and function calls based on their signature hash                               |
| **EventName**       | *string*             | new EventName("Transfer(address,address,uint256)")                                     | Filter for events based on their human readable names           |
| **FunctionName**       | *string*             | new FunctionName("transfer(address,uint256)")                                     | Filter for function calls based on their human readable names           |
| **EthGreaterThan**       | *number*             | new EthGreaterThan(0.5)                                        | Filter for transactions where ETH transferred is greater than the specified amount                            |
| **EthLessThan**          | *number*             | new EthLessThan(25.5)                                          | Filter for transactions where ETH transferred is lesser than the specified amount                             |
| **EthBetween**           |  (*number*,*number*) | new EthBetween(10,55)                                          | Filter for transactions where ETH transferred is in between the specified values                              |
| **USDGreaterThan**       | *number*             | new USDGreaterThan(100000)                                     | Filter for transactions where the USD value of ETH transferred is greater than the specified amount           |
| **USDLessThan**          | *number*             | new USDLessThan(400)                                           | Filer for transactions where the USD value of ETH transferred is less than the specified amount               |
| **USDBetween**           | (*number*,*number*)  | new USDBetween(10,300)                                         | Filter for transactions where the USD value of ETH transferred is between the two specified values            |
| **ToLabelExists**        | -                    | new ToLabelExists()                                            | Filter for transactions where the recipient has a label to identify them in our database                      |
| **FromLabelExists**      | -                    | new FromLabelExists()                                          | Filter for transactions where the sender has a label to identify them in our database                         |
| **FromOrToLabelExists**  | -                    | new FromOrToLabelExists()                                      | Filter for transactions where either the sender or the recipient has a label to identify them in our database |
| **FromEntity**           | *string*             | new FromEntity("Binance")                                      | Filter for transactions where the entity of the sender matches the specified value                            |
| **ToEntity**             | *string*             | new ToEntity("Bitfinex")                                       | Filter for transactions where the entity of the receiver matches the specified value                          |
| **FromEntityExists**     | -                    | new FromEntityExists()                                         | Filter for transactions where the sender's entity has been tagged in our database                             |
| **ToEntityExists**       | -                    | new ToEntityExists()                                           | Filter for transactions where the recipient's entity has been tagged in our database                          |
| **FromOrToEntityExists** | -                    | new FromOrToEntityExists()                                     | Filter for transactions where either the sender or recipient has an entity tag in our database                |
| **FromAddress**          | *string*             | new FromAddress("0x0d070796395 2f2fba59dd06f2b425ace40b492fe") | Filter for transactions where the sender's address exactly matches the specified input.                       |
| **ToAddress**            | *string*             | new ToAddress("0xcbb490f8034d a4591c677865863dd50a89014ed")    | Filter for transactions where the recipient's address exactly matches the specified input.                    |


## List of Entities

Reference when filtering on entities in our database 

*We are constantly growing and updating this - so the below is not comprehensive*

| Entity     |
|------------|
| Binance    |
| Bitfinex   |
| BigONE     |
| Bitrex     |
| Cobinhood  |
| Gate.io    |
| Gemini     |
| HitBTC     |
| Hotbit     |
| Huobi      |
| Kraken     |
| Kucoin     |
| Liqui      |
| Okex       |
| Poloniex   |
| ShapeShift |
| Upbit      |
| Yunbi      |