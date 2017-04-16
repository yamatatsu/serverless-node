// @flow
type HandlerCallbackType = (error: ?Error, result?: { statusCode: number, body: string }) => void
export type HandlerType = (event: any, context: any, callback: HandlerCallbackType) => void

export type TicketType = {
  ticketKey: string,
  fuga: string,
  putAt: string,
}

export type DBGetParams = {
  TableName: 'Tickets',
  Key: {
    ticketKey: string,
  },
}

export type DBPutParams = {
  TableName: 'Tickets',
  Item: TicketType,
  Expected?: {
    id: { Exists: bool },
  },
}
