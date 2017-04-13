'use strict'

module.exports.read = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'hello!!',
  })
}
