var Sentiment = require("sentiment");
var sentiment = new Sentiment();

var options = {
  extras: {
    cats: 5,
    amazing: 2,
  },
};
var result = sentiment.analyze("Cats are totally amazing!", options);
console.dir(result);
