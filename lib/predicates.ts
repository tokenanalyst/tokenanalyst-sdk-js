export abstract class Predicate {
  protected convertToEth = (wei: number) => {
    return wei / 1000000000000000000;
  };
  abstract isTrue(data: any): boolean;
}

export class EthGreaterThan extends Predicate {
  private that: number;
  constructor(that: number) {
    super();
    this.that = that;
  }
  isTrue(data: any): boolean {
    return this.convertToEth(parseInt(data.TX.WEIVALUE)) > this.that;
  }
}

export class EthLessThan extends Predicate {
  private that: number;
  constructor(that: number) {
    super();
    this.that = that;
  }
  isTrue(data: any): boolean {
    return this.convertToEth(parseInt(data.TX.WEIVALUE)) < this.that;
  }
}

export class EthBetween extends Predicate {
  private low: number;
  private high: number;
  constructor(low: number, high: number) {
    super();
    this.low = low;
    this.high = high;
  }
  isTrue(data: any): boolean {
    const inEth = this.convertToEth(parseInt(data.TX.WEIVALUE));
    return inEth < this.high && this.low < inEth;
  }
}

export class USDGreaterThan extends Predicate {
  private that: number;
  constructor(that: number) {
    super();
    this.that = that;
  }
  isTrue(data: any): boolean {
    const inUSD = data.PRICE * this.convertToEth(parseInt(data.TX.WEIVALUE));
    return inUSD > this.that;
  }
}

export class USDLessThan extends Predicate {
  private that: number;
  constructor(that: number) {
    super();
    this.that = that;
  }
  isTrue(data: any): boolean {
    const inUSD = data.PRICE * this.convertToEth(parseInt(data.TX.WEIVALUE));
    return inUSD < this.that;
  }
}

export class USDBetween extends Predicate {
  private low: number;
  private high: number;
  constructor(low: number, high: number) {
    super();
    this.low = low;
    this.high = high;
  }
  isTrue(data: any): boolean {
    const inUSD = data.PRICE * this.convertToEth(parseInt(data.TX.WEIVALUE));
    return inUSD < this.high && this.low < inUSD;
  }
}

export class ToLabelExists extends Predicate {
  isTrue(data: any): boolean {
    return data.TOLABEL != null;
  }
}

export class FromLabelExists extends Predicate {
  isTrue(data: any): boolean {
    return data.FROMLABEL != null;
  }
}

export class FromOrToLabelExists extends Predicate {
  isTrue(data: any): boolean {
    return data.FROMLABEL != null || data.TOLABEL != null;
  }
}

export class FromEntity extends Predicate {
  private entity: string

  constructor(entity: string) {
    super()
    this.entity = entity;
  }

  isTrue(data: any): boolean {
    return data.FROMENTITY == this.entity;
  } 
}

export class FromEntityExists extends Predicate {
  isTrue(data: any): boolean {
    return data.FROMENTITY != "" && data.FROMENTITY != null;
  } 
}

export class ToEntity extends Predicate {
  private entity: string

  constructor(entity: string) {
    super()
    this.entity = entity;
  }

  isTrue(data: any): boolean {
    return data.TOENTITY == this.entity;
  }
}

export class ToEntityExists extends Predicate {
  isTrue(data: any): boolean {
    return data.TOENTITY != "" && data.TOENTITY != null;
  } 
}

export class FromOrToEntityExists extends Predicate {
  isTrue(data: any): boolean {
    return (data.FROMENTITY != "" && data.FROMENTITY != null) || (data.TOENTITY != "" && data.TOENTITY != null);
  }
}

export class FromAddress extends Predicate {
  private addr: string

  constructor(addr: string) {
    super()
    this.addr = addr;
  }

  isTrue(data: any): boolean {
    return data.TX.FROMADDR == this.addr;
  } 
}

export class ToAddress extends Predicate {
  private addr: string

  constructor(addr: string) {
    super()
    this.addr = addr;
  }

  isTrue(data: any): boolean {
    return data.TX.TOADDR == this.addr;
  } 
}

export class EventSmartContractAddress extends Predicate {
  private addr: string

  constructor(addr: string) {
    super()
    this.addr = addr;
  }

  isTrue(data: any): boolean {
      return data.addresss == this.addr;
  } 
}

export class FunctionCallSmartContractAddress extends Predicate {
  private addr: string

  constructor(addr: string) {
    super()
    this.addr = addr;
  }

  isTrue(data: any): boolean {
      return data.callTo == this.addr;
  } 
}

export class SignatureHash extends Predicate {
  private hash: string

  constructor(hash: string) {
    super()
    this.hash = hash;
  }

  isTrue(data: any): boolean {
    return data.signatureHash == this.hash;
  } 
}

export class EventName extends Predicate {
  private event: string

  constructor(event: string) {
    super()
    this.event = event;
  }

  isTrue(data: any): boolean {
    return data.event == this.event;
  } 
}

export class FunctionName extends Predicate {
  private functionName: string

  constructor(functionName: string) {
    super()
    this.functionName = functionName;
  }

  isTrue(data: any): boolean {
    return data.function == this.functionName;
  } 
}

export class TokenAddress extends Predicate {
  private tokenAddress: string

  constructor(tokenAddress: string) {
    super()
    this.tokenAddress = tokenAddress;
  }

  isTrue(data: any): boolean {
    return data.token == this.tokenAddress;
  } 
}

export class HolderAddress extends Predicate {
  private holderAddress: string

  constructor(holderAddress: string) {
    super()
    this.holderAddress = holderAddress;
  }

  isTrue(data: any): boolean {
    return data.holder == this.holderAddress;
  } 
}