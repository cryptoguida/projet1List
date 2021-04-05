const CCAPIkey ="ce756e14f8ae1cd50dc439646cd8d11425a81ed330d0154a1900f0c39f327cbe"
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCAPIkey);

module.exports = {
hourlyMovingAverage:function (cryptoAsset,fiatCurrency,hours,callback){
    if(hours>169){
      console.error("only up to 169 hours allowed!")
      return
    }
    // 1 get data from CC
    CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
    .then(data => {

      // 2 calculate MA from 100 past houts
      data = data.reverse()
      var sum = 0;
      for(var i = 0;i<hours;i++){
      sum+=data[i].close;
      }
    var movingAverage = sum/hours;
    callback(movingAverage);
    })
    .catch(console.error)
  },
  dailyMovingAverage:function (cryptoAsset,fiatCurrency,days,callback){
      if(days>365){
        console.error("only up to 365 days allowed!")
        return
      }
      // 1 get data from CC
      CryptoCompareAPI.histoDay(cryptoAsset, fiatCurrency,{limit:"none"})
      .then(data => {

        // 2 calculate MA from 100 past houts
        data = data.reverse()
        var sum = 0;
        for(var i = 0;i<days;i++){
        sum+=data[i].close;
        }
      var movingAverage = sum/days;
      callback(movingAverage);
      })
      .catch(console.error)
    },
    minutelyMovingAverage:function (cryptoAsset,fiatCurrency,minutes,callback){
        if(minutes>1440){
          console.error("only up to 1440 minutes allowed!")
          return
        }
        // 1 get data from CC
        CryptoCompareAPI.histoMinute(cryptoAsset, fiatCurrency)
        .then(data => {

          // 2 calculate MA from 100 past houts
          data = data.reverse()
          var sum = 0;
          for(var i = 0;i<minutes;i++){
          sum+=data[i].close;
          }
        var movingAverage = sum/hours;
        callback(movingAverage);
        })
        .catch(console.error)
      }
}


// 3 check continuously if price is crossing 100 MA => buy or sell hold
