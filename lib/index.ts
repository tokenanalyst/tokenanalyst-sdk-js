/*jshint esversion: 6 */
import * as io from "socket.io-client";
import * as predicates from "./predicates";
import axios from 'axios';

declare function require(path: string): any;

export class TokenAnalyst {

  private onConnected: Promise<SocketIOClient.Socket>;
  private streams: object;

  constructor(url = "https://ws.tokenanalyst.io:8000/v1") {
    console.log(`connecting to ${url}`);

    if (typeof window !== 'undefined' && window) {
      const ga = require('./ga');
      ga.initialize('UA-113322596-4');
      ga.create('UA-113322596-4');
      ga.pageview('class-init');
    }

    this.onConnected = new Promise(function (resolve, reject) {
      const socket = io.connect(
        url,
        {
          transports: ["websocket"]
        }
      );
      socket.on("connect", () => {
        console.log("connected");
        resolve(socket);
      });
      socket.on("error", (error: any) => {
        console.log(error);
        reject(socket);
      });
    });

    this.streams = {
      // common
      prices: new Stream(
        this.onConnected,
        "price_stream",
        "Token prices stream",
      ),
      // btc
      btcBlocks: new Stream(
        this.onConnected,
        "graph-btc-confirmed-blocks",
        "BTC blocks with > 6 confirmations",
      ),
      btcTransactions: new Stream(
        this.onConnected,
        "graph-btc-confirmed-transactions",
        "BTC transactions with > 6 confirmations",
      ),
      // ethereum
      transactionsWithLabelsAndPrice: new Stream(
        this.onConnected,
        "API_S_TXS6_LABELS_JPRICE_FETH_GMINUTE",
        "Last transactions which have 6 confirmations with labels and USD price"
      ),
      ethVolume3hToEntity: new Stream(
        this.onConnected,
        "API_T_TXS6_LABELS_JPRICE_GTOENTITY_W3H",
        "3h ETH volume towards labelled entities",
        Array(new predicates.ToEntityExists())
      ),
      ethVolume3hFromEntity: new Stream(
        this.onConnected,
        "API_T_TXS6_LABELS_JPRICE_GFROMENTITY_W3H",
        "3h ETH volume from labelled entities",
        Array(new predicates.FromEntityExists())
      ),
      ethVolume24hToEntity: new Stream(
        this.onConnected,
        "API_T_TXS6_LABELS_JPRICE_GTOENTITY_WDAY",
        "24h ETH volume towards labelled entities",
        Array(new predicates.ToEntityExists())
      ),
      ethVolume24hFromEntity: new Stream(
        this.onConnected,
        "API_T_TXS6_LABELS_JPRICE_GFROMENTITY_WDAY",
        "24h ETH volume from labelled entities",
        Array(new predicates.FromEntityExists())
      ),
      smartContractEvents: new Stream(
        this.onConnected,
        "eth-ongoing-event",
        "Smart Contract emmited events",
      ),
      smartContractFunctionCalls: new Stream(
        this.onConnected,
        "eth-ongoing-functioncall",
        "Function calls to smart contracts",
      ),
      erc20TokenTransfer: new Stream(
        this.onConnected,
        "eth-ongoing-erc20tokentransfer",
        "Erc20 token transfer",
      ),
      erc20BalanceDiff: new Stream(
        this.onConnected,
        "eth-ongoing-erc20tokenbalancediff",
        "Erc20 balance diff",
      ),
      ethLargeTransactions: new Stream(
        this.onConnected,
        "API_S_TXS6_LABELS_JPRICE_FETH_GMINUTE_GT500KUSDVALUE",
        "ETH transactions with 6 confirmations or more, with a value of more than USD 500k",
      ),
      erc20TokenTransferWithSymbol: new Stream(
        this.onConnected,
        "API_ERC20_TRANSFERS_WSYMBOL",
        "Parsed ERC20 token transfers, including the token symbol",
      ),
      erc20TokenTransferWithSymbolAndUSDValue: new Stream(
        this.onConnected,
        "API_ERC20_TRANSFERS_WSYMBOL_WUSDVALUE",
        "Parsed ERC20 token transfers with USD value",
      ),
      erc20TokenTransfer500k: new Stream(
        this.onConnected,
        "API_ERC20_TRANSFERS_WSYMBOL_GT500KUSDVALUE",
        "ERC20 token transfer with a value of more than USD 500k",
      ),
      erc20TokenTransfer100k: new Stream(
        this.onConnected,
        "API_ERC20_TRANSFERS_WSYMBOL_GT100KUSDVALUE",
        "ERC20 token transfer with a value of more than USD 100k",
      )
    };
  }
}

class Stream {
  private description: string;
  private topicName: string;
  private socket: Promise<SocketIOClient.Socket>;
  private streamPredicates: Array<predicates.Predicate>;
  private streamData: string = "https://ws.tokenanalyst.io/streamdata";

  constructor(
    socket: Promise<SocketIOClient.Socket>,
    topicName: string,
    description: string,
    streamPredicates: Array<predicates.Predicate> = Array()
  ) {
    this.topicName = topicName;
    this.description = description;
    this.socket = socket;
    this.streamPredicates = streamPredicates;
  }

  recent(limit: Number) {
    return(axios.get(`${this.streamData}/${this.topicName}`,{
      params: {
        limit: `${limit}`
      }
    }).then(r => r.data.map((d: { data: any; }) => d.data)))
  }

  subscribe(onEvent: Function, predicates: Array<predicates.Predicate> = Array()) {
    this.socket.then((s: SocketIOClient.Socket) => {
      s.on(`${this.topicName}_event`, (event: any) => {
        predicates.push(...this.streamPredicates);
        if (predicates.map(p => p.isTrue(event)).every(b => b))
          onEvent(event);
      });
    });
  }
}

export * from "./predicates";
