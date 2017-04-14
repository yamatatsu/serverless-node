import AWS from 'aws-sdk'
AWS.config.update({ region: 'ap-northeast-1' })
const client = new AWS.DynamoDB.DocumentClient()

export default {
  get: (params) => promisize('get', params),
  put: (params) => promisize('put', params),
}

// =============
// private

function promisize(funcName, params) {
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
