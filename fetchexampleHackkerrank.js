const request = require('request')
async function getStockInformation(date) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
  const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
  const doSomething = (res) => {
      if(res && res.data) { 
        return res.data[0];
      }
      return {};
  }
  const getApi = () => new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if(error) reject(error)

      else resolve(body)
    });
  }).then((res) => doSomething(JSON.parse(res))).catch((err) => err);
  return getApi();
}
