// @flow
import './base'
import type { HandlerType } from '../types'

export const read: HandlerType = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'hello!!',
  })
}
