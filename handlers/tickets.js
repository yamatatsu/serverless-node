// これをやっておくとCloud Watchに詳細なログが吐ける
import { install } from 'source-map-support'
install()

export const readOne = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'read one ticket!!',
  })
}

export const read = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'read all tickets!!',
  })
}
