## One API. All Blockchains {docsify-ignore}

TokenAnalyst's API provides a reliable, scalable, and lightning (no pun intended) fast way to access granular data across blockchains

```marked
API Endpoint
https://www.tokenanalyst.io/api/v1/
```

### Bitcoin

#### Wallet API

**Get wallet balance**
```marked

GET https://www.tokenanalyst.io/api/v1/btc/wallet_balance?apikey=API_KEY&wallet=1Nh7uHdvY6fNwtQtM1G5EZAFPLC33B59rB
```

**Expected Result**

```json
{
    "address": "1Nh7uHdvY6fNwtQtM1G5EZAFPLC33B59rB", 
    "balance": 45382128102, 
    "unit": "satoshi", 
    "n_tx": 7, 
}
```

**Get wallet transactions**
```marked

GET https://www.tokenanalyst.io/api/v1/btc/wallet_transactions?apikey=API_KEY&wallet=1Nh7uHdvY6fNwtQtM1G5EZAFPLC33B59rB
```

**Expected Result**

```json
{
    "address": "1Nh7uHdvY6fNwtQtM1G5EZAFPLC33B59rB", 
    "balance": 45382128102, 
    "unit": "satoshi",
    "n_tx": 7, 
    "txs": [
        {
            "block_height": 40403, 
            "confirmations": 2003, 
            "confirmed": "datetime.datetime(2018, 6, 12, 3, 46, 25, 0)", 
            "spent": False, 
            "tx_hash": "cb24ba4fa3ffa16c9f2f5a75ba78b2e220110ddbdb17973bd3f8ab8f0b1c0241", 
            "tx_input_n": -1, 
            "tx_output_n": 0, 
            "value": 20213,
            "unit": "btc",
        }, 
        {
            "block_height": 40433, 
            "confirmations": 2203, 
            "confirmed": "datetime.datetime(2018, 7, 22, 3, 46, 25, 0)", 
            "spent": False, 
            "tx_hash": "cb24ba4fa3ffa16c9f2f5a75ba78b2e220110ddbdb17973bd3f8ab8f0b1c0241", 
            "tx_input_n": -1, 
            "tx_output_n": 0, 
            "value": 20213,
            "unit": "btc",
        }, 
        ...
    ],
}
```
#### Transaction API

**Get details**
```marked

GET https://www.tokenanalyst.io/api/v1/btc/transaction_details?apikey=API_KEY&txn_hash=cb24ba4fa3ffa16c9f2f5a75ba78b2e220110ddbdb17973bd3f8ab8f0b1c0241
```

**Expected Result**

```json
    {
        "block_height": 40403, 
        "confirmations": 2003, 
        "confirmed": "datetime.datetime(2018, 6, 12, 3, 46, 25, 0)", 
        "spent": False, 
        "tx_hash": "cb24ba4fa3ffa16c9f2f5a75ba78b2e220110ddbdb17973bd3f8ab8f0b1c0241", 
        "tx_input_n": -1, 
        "tx_output_n": 0, 
        "value": 20213,
        "unit": "btc",
    },
```


### Ethereum


#### Wallet API

**Get wallet balance**
```marked

GET https://www.tokenanalyst.io/api/v1/eth/wallet_balance?apikey=API_KEY&wallet=0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98
```

**Expected Result**

```json
{
    "address": "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98", 
    "balance": 45382128102, 
    "unit": "wei", 
    "n_tx": 7, 
}
```

**Get wallet transactions**
```marked

GET https://www.tokenanalyst.io/api/v1/eth/wallet_transactions?apikey=API_KEY&wallet=0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98
```

**Expected Result**

```json
{
    "address": "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98", 
    "balance": 45382128102, 
    "unit": "wei", 
    "n_tx": 7,
    "txs": [
    	{
	        "id": 158129018,
	        "block_timestamp": 1517666534,
	        "block_number": 5023586,
	        "from_address": "0xa6f5ce3025d51311dc5d6b8aa9018ed83fa8a72d",
	        "to_address": "0x6fc82a5fe25a5cdb58bc74600a40a69c065263f8",
	        "value": "24922948800000000000",
	        "gas": 47008,
	        "gas_price": 22000000000,
	        "transaction_hash": "0x2f8cb4c8e48f3548e04e2c06e9a6475a868e9d95e52bfc49cac5850f1bb8d5e1",
	        "nonce": 9,
	        "unit": "wei", 
    	},
    	{
	        "id": 158129017,
	        "block_timestamp": 1517666534,
	        "block_number": 5023586,
	        "from_address": "0x09ff39d5e679f5f83d8c388cfd05017c01599656",
	        "to_address": "0xfa52274dd61e1643d2205169732f29114bc240b3",
	        "value": "200078853516134016",
	        "gas": 35000,
	        "gas_price": 22260000000,
	        "transaction_hash": "0x2cbe2cdd4bc5e031918846e0e7696f4b7d504a90dabfac586eba00b1bcdae20b",
	        "nonce": 49,
	        "unit": "wei", 
    	},
    	...
	]
}
```
#### Transactions API

**Get details**
```marked

GET https://www.tokenanalyst.io/api/v1/btc/transaction_details?apikey=API_KEY&txn_hash=0x2f8cb4c8e48f3548e04e2c06e9a6475a868e9d95e52bfc49cac5850f1bb8d5e1
```

**Expected Result**

```json
    {
        "id": 158129018,
        "block_timestamp": 1517666534,
        "block_number": 5023586,
        "from_address": "0xa6f5ce3025d51311dc5d6b8aa9018ed83fa8a72d",
        "to_address": "0x6fc82a5fe25a5cdb58bc74600a40a69c065263f8",
        "value": "24922948800000000000",
        "gas": 47008,
        "gas_price": 22000000000,
        "transaction_hash": "0x2f8cb4c8e48f3548e04e2c06e9a6475a868e9d95e52bfc49cac5850f1bb8d5e1",
        "nonce": 9,
        "unit": "wei", 
    }
```




