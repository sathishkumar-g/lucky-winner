const express=require('express');
const app=express();

app.use(express.static('./dist/winner'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/winner/'}
);
});

app.listen(process.env.PORT || 8080);