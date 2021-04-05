global.fetch = require("node-fetch");
const GeminiAPI = require("gemini-api").default;
const key = "account-j33ThkGi2yZFJ0t7ucU9";
const secret = "X4DrwMwLHKCTC5s9Pw7WjnT2TBY";
const restClient = new GeminiAPI({key, secret, sandbox:true});
const indicators = require("./indicators.js");

/*restClient.newOrder({amount:100,price:10,side:"buy",symbol:"ethusd"})
.then(response => console.log(response));


restClient.getMyActiveOrders()

.then(response => console.log(response))
.catch(error => console.log(error));

CryptoCompareAPI.priceHistorical('BTC', ['USD', 'EUR'], new Date('2017-01-01'))
.then(prices => {
  console.log(prices)
  // -> { BTC: { USD: 997, EUR: 948.17 } }
})
.catch(console.error)*/
// 100 hour MA
indicators.hourlyMovingAverage("ETH","USD",50,function(result){
  console.log("Hourly MA: ", result)
})
indicators.dailyMovingAverage("ETH","USD",50,function(result){
  console.log("Daily MA: ", result)
})
indicators.minutelyMovingAverage("ETH","USD",50,function(result){
  console.log("Minutely MA: ", result)
})
