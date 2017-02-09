/*
 * Copyright (C) 2015-2016 KeepKey, LLC
 * All Rights Reserved
 */
export = Bitcore;

declare module Bitcore {
  class HDPublicKey {
    constructor(arg: any);
    derive(arg: string | number): HDPublicKey;
    toObject(): HDPublicKeyDetails;
  }

  class PublicKey {
    constructor(arg: string);
    toAddress(network?: Network): Address;
  }

  class PrivateKey {
    constructor();
    static fromWIF(wif: string): PrivateKey;
  }

  class Network {

  }

  class Networks {
    static dash: Network;
  }

  interface HDPublicKeyDetails {
    network: string;
    depth: number;
    fingerPrint: number;
    parentFingerPrint: number;
    childIndex: number;
    chainCode: string; //Hex
    publicKey: string; //Hex
    xpubkey: string; //base58
    checksum: string; //base58
  }

  interface Address {
    toString(): string;
  }

  class Message {
    constructor(message: any);
    verify(message: string, signature: string);
    sign(privateKey: PrivateKey): string;
  }
}


declare namespace Bitcore.encoding {
  class Base58 {
    constructor(obj: any);
    static toString(): string;
  }
}

declare namespace Bitcore.crypto {
  namespace Hash {
    function sha256(buf: Buffer): Buffer;
  }
  namespace Random {
    function getRandomBuffer(size: number): Buffer;
  }
}
