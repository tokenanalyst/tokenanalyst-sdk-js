# TokenAnalyst SDK 

The full documentation for the SDK can be found on the official documentation website [https://docs.tokenanalyst.io/](https://docs.tokenanalyst.io/#/).

## How to use it in the browser

Just add it to the head of your HTML document. The function console.log is called everytime a new event arrives on that stream.

```
<head>
  <script src="https://s3.amazonaws.com/cdn.tokenanalyst.io/sdk.latest.js"></script>
  <script>
    const t = new ta.TokenAnalyst();
    t.streams.transactionsWithLabelsAndPrice.subscribe(console.log);
  </script>
</head>
```  

## How to use it in your NodeJS project

Create a new project

```
$ npm init
$ npm install @tokenanalyst/sdk
```

Then you are able to consume the latest transaction stream with prices and labels. 
The .subscribe function takes a callback function, called for every new event and 
optionally a list of predicates that have to match to filter the stream.

```
const {TokenAnalyst, FromAddress, FromOrToLabelExists, USDGreaterThan } =\
	require('@tokenanalyst/sdk');

const ta = new TokenAnalyst()
ta.streams.transactionsWithLabelsAndPrice.subscribe(console.log,
  predicates = [
  new FromAddress("0x0d0707963952f2fba59dd06f2b425ace40b492fe"),
  new FromOrToLabelExists(),
  new USDGreaterThan(100)
]);
```

## How to build the library 

```
$ npm install 
```

For building the browser library to interface the API 

```
$ npm run build-web
```

For building the NodeJS module to interface the API

```
$ npm run build-node
```

