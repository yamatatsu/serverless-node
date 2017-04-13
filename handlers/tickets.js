'use strict'

module.exports.readOne = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'read one ticket!!',
  })
}

module.exports.read = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'read all tickets!!',
  })
}
