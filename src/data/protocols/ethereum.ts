type RequestArguments = {
  method: string
  params?: unknown[] | object
}

export interface Ethereum {
  request: (args: RequestArguments) => Promise<unknown>
}
