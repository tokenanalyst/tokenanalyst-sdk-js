/*jshint esversion: 6 */
import * as io from "socket.io-client";
import * as predicates from "./predicates";
import axios from "axios";

declare function require(path: string): any;

export class TokenAnalyst {
  private onConnected: Promise<SocketIOClient.Socket>;
  private streams: object;

  constructor(
    url = "https://api.tokenanalyst.io:8000/v1",
    streamdataUrl = "https://api.tokenanalyst.io/streamdata"
  ) {
    console.log(`connecting to ${url}`);

    this.onConnected = new Promise(function(resolve, reject) {
      const socket = io.connect(url, {
        transports: ["websocket"]
      });
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
      // ethereum
      transactionsWithLabelsAndPrice: new Stream(
        streamdataUrl,
        this.onConnected,
        "S_ETH_ONGOING_TRANSACTIONS_TOFROMLABEL_SYMBOL_PRICE",
        "Last transactions which have 6 confirmations with labels and USD price"
      ),
      ethLargeTransactions: new Stream(
        streamdataUrl,
        this.onConnected,
        "S_ETH_ONGOING_TRANSACTIONS_GT500KUSDVALUE",
        "ETH transactions with 6 confirmations or more, with a value of more than USD 500k"
      ),
      erc20TokenTransferWithSymbolAndUSDValue: new Stream(
        streamdataUrl,
        this.onConnected,
        "API_ERC20_TRANSFERS_WSYMBOL_WPRICE",
        "Parsed ERC20 token transfers with USD value"
      ),
      erc20TokenTransfer100k: new Stream(
        streamdataUrl,
        this.onConnected,
        "API_ERC20_TRANSFERS_WSYMBOL_GT100KUSDVALUE",
        "ERC20 token transfer with a value of more than USD 100k"
      ),
      erc20StableCoinTransferWithSymbolAndUSDValue: new Stream(
        streamdataUrl,
        this.onConnected,
        "API_ERC20_TRANSFERS_STABLE_WSYMBOL_WUSDVALUE",
        "ERC20 stable coin transfer with USD value"
      ),
      erc20StableCoinTransfer100k: new Stream(
        streamdataUrl,
        this.onConnected,
        "API_ERC20_TRANSFERS_STABLE_WSYMBOL_GT100KUSDVALUE",
        "ERC20 stable coin transfer with a value of more than USD 100k"
      )
    };
  }
}

class Stream {
  private description: string;
  private topicName: string;
  private socket: Promise<SocketIOClient.Socket>;
  private streamPredicates: Array<predicates.Predicate>;
  private endpoint: string;

  constructor(
    endpoint: string,
    socket: Promise<SocketIOClient.Socket>,
    topicName: string,
    description: string,
    streamPredicates: Array<predicates.Predicate> = Array()
  ) {
    this.topicName = topicName;
    this.description = description;
    this.socket = socket;
    this.streamPredicates = streamPredicates;
    this.endpoint = endpoint;
  }

  recent(limit: Number) {
    return axios
      .get(`${this.endpoint}/${this.topicName}`, {
        params: {
          limit: `${limit}`
        }
      })
      .then(r => r.data.map((d: { data: any }) => d.data));
  }

  subscribe(
    onEvent: Function,
    predicates: Array<predicates.Predicate> = Array()
  ) {
    this.socket.then((s: SocketIOClient.Socket) => {
      s.on(`${this.topicName}_event`, (event: any) => {
        predicates.push(...this.streamPredicates);
        if (predicates.map(p => p.isTrue(event)).every(b => b)) onEvent(event);
      });
    });
  }
}

export * from "./predicates";
