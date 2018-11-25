## Getting Started {docsify-ignore}

Install the SDK via npm

```
$ npm init
$ npm install @tokenanalyst/sdk
```

Then subscribe to the latest transaction stream with prices and labels.

The `.subscribe` function takes a callback function, called for every new event and 
optionally a list of [filters](predicates.md) (called `predicates` in the SDK) that filter the resulting stream of data according to your specifications.

```javascript
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


