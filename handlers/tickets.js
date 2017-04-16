import './base'
import db from '../db'

export const get = (event, context, callback) => {
  console.info({ event, context })

  const params = {
    TableName: 'Tickets',
    Key: {
      ticketKey: event.pathParameters.ticketKey,
    },
  }

  db.get(params)
    .then(data => {
      if (!data.Item) {
        callback(null, {
          statusCode: 404,
          body: JSON.stringify({message: 'Not Found'}),
        })
      }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.Item),
      })
    })
    .catch(err => callback(err))
}

export const put = (event, context, callback) => {
  console.info({ event, context })

  const body = JSON.parse(event.body)

  const params = {
    TableName: 'Tickets',
    Item: {
      ticketKey: event.pathParameters.ticketKey,
      fuga: body.fuga,
      putAt: new Date().toString(),
    },
    // Expected: {
    //   id: { Exists: false },
    // }
  }

  db.put(params)
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(params.Item),
      })
    })
    .catch(err => callback(err))
}
