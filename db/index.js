// @flow
import AWS from 'aws-sdk'
AWS.config.update({ region: process.env.REGION })
const client = new AWS.DynamoDB.DocumentClient()

import type { DBGetParams, DBPutParams } from '../types'

export default {
  get: (params: DBGetParams) => promisize('get', params),
  put: (params: DBPutParams) => promisize('put', params),
}

// =============
// private

function promisize(funcName: 'get' | 'put', params) {
  return new Promise((resolve, reject) => {
    client[funcName](params, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}
