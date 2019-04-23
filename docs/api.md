## API {docsify-ignore}

### How to get an API key

Please send us an email and we send you an API key as soon as possible. 

info@tokenanalyst.io

### Bitcoin On-Chain Volume

#### 30 Days Bitcoin On-Chain Volume

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=btc_volume_30day
&format=json&key=API_KEY
```

The result:

```
[{"date":"2019-03-25","volume_gross":"1424474.4020740585","volume_change":"726317.7514014196",
"volume_real":"698156.6506726407","price_usd":"3972.6216","volume_real_usd":"2.7735121781007843E9",
"volume_change_usd":"2.885385574629688E9"},{"date":"2019-03-26","volume_gross":"1233680.6832504491",
"volume_change":"481058.35905781004","volume_real":"752622.3241926412","price_usd":"3927.6804",
"volume_real_usd":"2.9560599663275304E9","volume_change_usd":"1.8894434977111075E9"},...]
```

### Ethereum On-Chain Volume

#### 30 Days Ethereum On-Chain Volume

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=eth_volume_30day
&format=json&key=API_KEY
```

The result:

```
[{"date":"2019-03-25","volume_internal":"250393.34769890737","volume_external":"2854623.8510549455",
"price_usd":"135.1177","volume_internal_usd":"3.383257481356132E7",
"volume_external_usd":"3.857102271004718E8"},{"date":"2019-03-26","volume_internal":"285759.7986938011",
"volume_external":"2544777.0246629696","price_usd":"134.0344",
"volume_internal_usd":"3.8301641250467636E7","volume_external_usd":"3.410876446113197E8"},
{"date":"2019-03-27","volume_internal":"250724.37136703957","volume_external":"2294748.5395002807",
"price_usd":"138.24472","volume_internal_usd":"3.466132063189097E7",
"volume_external_usd":"3.17236870366879E8"},...]
```

### Exchange Bitcoin Inflow/Outflow

Currently supported exchanges are: binance, bittrex, bitstamp, poloniex, bitmex, bitfinex

#### 24h Inflow to Exchanges

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=btc_Bittrex_inflow_stats_24h_v2
&format=json&key=API_KEY
```

The result:

```
[{"avg_txn_value":"2.74","entity":"Bittrex","inflow":"3165.94",
"number_of_entity_receiving_addresses":"1222","number_of_nonentity_sending_addresses":"4478",
"number_of_txns":"1157","period_ending_at":"2019-04-23T13:55:10.379Z","inflow_usd":"17237489.04198",
"avg_txn_value_usd":"14918.38758","inflow_usd_pct_change":"131.49932107346746",
"avg_txn_value_usd_pct_change":"83.11297391970622","inflow_pct_change":"124.93676641941627",
"avg_txn_value_pct_change":"77.92207792207793"}]
```

#### 24h Outflow from Exchanges

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=btc_Bitfinex_outflow_stats_24h_v1
&format=json&key=API_KEY
```

The result:

```
[{"avg_txn_value":"4.835","entity":"Bitfinex","number_of_entity_sending_addresses":"243",
"number_of_nonentity_receiving_addresses":"453","number_of_txns":"194","outflow":"2190.24",
"period_ending_at":"2019-04-23T14:10:18.972Z","outflow_usd":"11941250.463791998",
"avg_txn_value_usd":"26360.556830499998","outflow_usd_pct_change":"-46.86282314212957",
"avg_txn_value_usd_pct_change":"-60.58682864994116","outflow_pct_change":"-48.43582258216406",
"avg_txn_value_pct_change":"-61.7535616254143"}]
```

### Exchange Ethereum Inflow/Outflow

Currently supported exchanges are: binance, kraken, bitfinex, poloniex, bittrex, kucoin

#### 24h Inflow to Exchanges

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job\=eth_Bittrex_inflow_stats_24h_v2
&format=json&key=API_KEY
```

The result:

```
[{"interval":"0","inflow":"6136.065859441619","number_of_txns":"1999",
"avg_txn_value":"3.0695677135775985","inflow_usd":"1062148.5435320563",
"avg_txn_value_usd":"531.3399417368965","inflow_pct_change":"0.23325277173085998",
"avg_txn_value_pct_change":"-9.04296121664843","inflow_usd_pct_change":"2.0699796441326814",
"avg_txn_value_usd_pct_change":"-7.376216571057195","entity":"Bittrex"}]
```

#### 24h Outflow from Exchanges

```shell 
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=eth_Bittrex_outflow_stats_24h_v2
&format=json&key=API_KEY
```

The result:

``` 
[{"interval":"0","outflow":"15159.274565009997","number_of_txns":"726",
"avg_txn_value":"20.880543477975202","outflow_usd":"2626127.1162576023",
"avg_txn_value_usd":"3617.254981071078","outflow_pct_change":"71.47521370742083",
"avg_txn_value_pct_change":"54.70559914374745","outflow_usd_pct_change":"74.66308567699149",
"avg_txn_value_usd_pct_change":"57.58170952951711","entity":"Bittrex"}]%
```

### Stablecoins

We currently support the following stablecoins: TUSD, USDT, GUSD, PAX, DAI, USDC

#### Stablecoin 30 Days On-Chain Volumes

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=USDT_volume_30day
&format=json&key=API_KEY
```

The result:

```
[{"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","date":"2019-03-25",
"volume":"6324727.198829001","price_usd":"1.0041189","volume_usd":"6350778.240214406"},
{"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","date":"2019-03-26",
"volume":"8306890.382316997","price_usd":"1.0096095","volume_usd":"8386715.120070695"},
{"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","date":"2019-03-27",
"volume":"8175930.877583003","price_usd":"1.0038275","volume_usd":"8207223.86596517"},
{"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","date":"2019-03-28",
"volume":"6471772.751155003","price_usd":"1.0009104","volume_usd":"6477664.661767654"},
{"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","date":"2019-03-29",...]
```


#### Stablecoin 30 Days On-Chain Transaction Count

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=DAI_txn_count_30day
&format=json?key=API_KEY
```

The result:

```
[{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","date":"2019-03-25",
"number_of_token_transfers":"3377"},{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
"date":"2019-03-26","number_of_token_transfers":"2909"},
{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","date":"2019-03-27",
"number_of_token_transfers":"3693"},{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
"date":"2019-03-28","number_of_token_transfers":"2985"},
{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","date":"2019-03-29",
"number_of_token_transfers":"3671"},{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
"date":"2019-03-30","number_of_token_transfers":"4024"},
{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","date":"2019-03-31",
"number_of_token_transfers":"2236"},{"tokenaddress":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",...]

```

#### Stable coin prices

To retrieve stable coin prices use the following API endpoint. 

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=usdc_price_30day_v1
&format=json&key=API_KEY
```

The result:

```
[{"day":"2019-03-25","price":"1.008381"},{"day":"2019-03-26","price":"1.0093794"},{"day":"2019-03-27",
"price":"1.0099165"},{"day":"2019-03-28","price":"1.0099027"},{"day":"2019-03-29","price":"1.009777"},
{"day":"2019-03-30","price":"1.0099652"},{"day":"2019-03-31","price":"1.0099304"},{"day":"2019-04-01",
"price":"1.0089324"},{"day":"2019-04-02","price":"1.001023"},{"day":"2019-04-03","price":"0.99481905"},
{"day":"2019-04-04","price":"1.0005426"},{"day":"2019-04-05","price":"1.0011057"},{"day":"2019-04-06",
"price":"1.0020292"},...]%
```

### ERC-20 Tokens 

Currently we support: BNB, BAT, GNT, ZIL, MKR, OMG, ZRX, REP 

#### 24h ERC-20 Token On-Chain Transactions

```shell
$ curl https://ws.tokenanalyst.io/analytics/private/last?job=bat_txn_count_24h
&format=json&key=API_KEY
```

The result:

```
[{"current_24h":"5686","prior_24h":"5451","percent_change":"4"}]
```

#### 24h ERC-20 Token On-Chain Volumes

```shell
curl https://ws.tokenanalyst.io/analytics/private/last?job=bnb_volume_24h
format=json&key=API_KEY
```

The result:

```
[{"current_24h":"5584572.943664949","current_24h_usd":"1.348740917888936E8",
"prior_24h":"1228771.4819439338","prior_24h_usd":"2.9617328248510607E7",
"percent_change":"355.38912442474"}]
```