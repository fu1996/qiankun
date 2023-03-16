const express = require('express');
const path = require('path');
const app = express();
let options = {
    setHeaders: function (res, path, stat) {
      res.set('Access-Control-Allow-Origin', '*')
    }
  }
app.use(express.static(path.join(__dirname, 'dist'),options));
app.use('/assets/ipipe/static', express.static(path.join(__dirname, './dist/static')));
app.use('/:companyId/_integrated-delivery/approval', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
});

 app.listen(8089, (err) => {
    console.log('err', err)
 })