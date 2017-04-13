'use strict'

module.exports.hello = (event, context, callback) => {
  console.info({ event, context })

  callback(null, {
    statusCode: 200,
    body: 'hello!!',
  })
}
