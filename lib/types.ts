interface DomainTransaction {
    blockHash: string;
    blockNumber: string;
    fromAddr: string;
    toAddr: string;
    gas: number;
    gasPrice: number;
    hash: string;
    input: Buffer;
    nonce: number;
    transactionIndex: number;
    weiValue: string;
    v: number;
    r: string;
    s: string;
  }
  
class Transaction {
    private blockHash: string;
    private blockNumber: string;
    private fromAddr: string;
    private toAddr: string;
    private gas: number;
    private gasPrice: number;
    private hash: string;
    private input: Buffer;
    private nonce: number;
    private transactionIndex: number;
    private weiValue: number;
    private v: number;
    private r: string;
    private s: string;
  
    constructor(tx: DomainTransaction) {
      this.blockHash = tx.blockHash;
      this.blockNumber = tx.blockNumber;
      this.fromAddr = tx.fromAddr;
      this.toAddr = tx.toAddr;
      this.gas = tx.gas;
      this.gasPrice = tx.gasPrice;
      this.hash = tx.hash;
      this.input = tx.input;
      this.nonce = tx.nonce;
      this.transactionIndex = tx.transactionIndex;
      this.weiValue = parseInt(tx.weiValue);
      this.v = tx.v;
      this.r = tx.r;
      this.s = tx.s;
    }
  }
  