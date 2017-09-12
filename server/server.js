const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));
app.set('port', (process.env.PORT || 3000));


app.listen(app.get('port'), () => {
    console.log('app is running on port', app.get('port'));
  });
  