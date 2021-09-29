type ChainParams = {
  chainName: 'bsc' | 'localhost'
}

export interface RequireChain {
  require: (params: RequireChain.Params) => Promise<void>
}

export namespace RequireChain {
  export type Params = ChainParams
}
