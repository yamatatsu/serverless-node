// これをやっておくとCloud Watchに詳細なログが吐ける
import { install } from 'source-map-support'
install()

import AWS from 'aws-sdk'
AWS.config.update({ region: 'ap-northeast-1' })
const dc = new AWS.DynamoDB.DocumentClient()


export const get = (event, context, callback) => {
  console.info({ event, context })

  const params = {
    TableName: 'Tickets',
    Key: {
      ticketKey: event.pathParameters.ticketKey
    }
  }

  dc.get(params, (error, data) => {
    if (error) {
      callback(error)
      return
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data.Item),
    })
  })
}

export const put = (event, context, callback) => {
  console.info({ event, context })

  const data = JSON.parse(event.body)

  const params = {
    TableName: 'Tickets',
    Item: {
      ticketKey: event.pathParameters.ticketKey,
      fuga: data.fuga,
      updatedAt: new Date().toString(),
    },
    // Expected: {
    //   id: { Exists: false },
    // }
  }

  dc.put(params, (error, data) => {
    if (error) {
      callback(error)
      return
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    })
  })
}
