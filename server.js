const express = require('express');
const app = express();
const Twitter = require('twitter');
const port = process.env.PORT || 5001;

var client = new Twitter({
  consumer_key: 'REhMcVfHk7G0Em0H0nsUQr7dM',
  consumer_secret: 'shLfnSTplxvkGeKwZYo0AqtpyvE5RT08AYFmctUvf0DZqmwgeO',
  access_token_key: '2832610755-67XfzVRA0VXCkDXaDAR4iv2m5eQsbYBeCDbW1Vk',
  access_token_secret: '0PM9wRcnzOJxNXcmrKOhpN3VL9QAWjVeFZ9k8uH1of1r0'
});

app.get('/search/tweets', function (req, res) {
  var params = {q: 'avengers', count: 20};
  console.log(res)
  client.get('search/tweets', params, function(error, tweets, response) {
      console.log(response)
      if (!error) {
        console.log(tweets);
        res.send(tweets)
      }
  });
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});