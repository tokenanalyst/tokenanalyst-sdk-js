/*jshint esversion: 6 */
import * as io from "socket.io-client";
import * as predicates from "./predicates";

export class TokenAnalyst {
  private onConnected: Promise<SocketIOClient.Socket>;
  private streams: object;

  constructor(url = "http://ws.tokenanalyst.io:8000/v1") {
    console.log(`connecting to ${url}`);

    this.onConnected = new Promise(function(resolve, reject) {
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
      transactionsWithLabelsAndPrice: new Stream(
        this.onConnected,
        "API_S_TXS6_LABELS_JPRICE_FETH_GMINUTE_event",
        "Last transactions which have 6 confirmations with labels and USD price"
      ),
      ethVolume24hToEntity: new Stream(
        this.onConnected,
        "API_T_TXS6_LABELS_JPRICE_GTOENTITY_WDAY_event",
        "24h ETH volume towards labelled entities",
        Array(new predicates.ToEntityExists())
      ),
      ethVolume24hFromEntity: new Stream(
        this.onConnected,
        "API_T_TXS6_LABELS_JPRICE_GFROMENTITY_WDAY_event",
        "24h ETH volume from labelled entities",
        Array(new predicates.FromEntityExists())
      )
    };
  }
}

class Stream {
  private description: string;
  private eventName: string;
  private socket: Promise<SocketIOClient.Socket>;
  private streamPredicates: Array<predicates.Predicate>;

  constructor(
    socket: Promise<SocketIOClient.Socket>,
    eventName: string,
    description: string,
    streamPredicates: Array<predicates.Predicate> = Array()
  ) {
    this.eventName = eventName;
    this.description = description;
    this.socket = socket;
    this.streamPredicates = streamPredicates;
  }

  subscribe(onEvent: Function, predicates: Array<predicates.Predicate> = Array()) {
    this.socket.then((s: SocketIOClient.Socket) => {
      s.on(this.eventName, (event: any) => {
        predicates.push(...this.streamPredicates)
        if (predicates.map(p => p.isTrue(event)).every(b => b)) 
          onEvent(event);
      });
    });
  }
}

export * from "./predicates";
