// これをやっておくとCloud Watchに詳細なログが吐ける
import { install } from 'source-map-support'
install()

export const readOne = (event, context, callback) => {
  console.info({ event, context })

  const key = event.pathParameters.key

  callback(null, {
    statusCode: 200,
    body: `read one ticket!! key: ${key}`,
  })
}

export const read = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'read all tickets!!',
  })
}
