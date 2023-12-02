// eslint-disable-next-line ts/consistent-type-definitions
type CoreEvents = {
  wsConnected: []
  wsDisconnected: []
}

export type GenericKientEvents =
  & { UnknownEvent: [data: any] }

export type KientEvents =
  & CoreEvents
  & GenericKientEvents
