let express = require('express');
let apiTasks = require('./api/tasks/book');
let bodyParser = require('body-parser');
let action = require('./actions/users/orders');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.post('/book', async (req, res) => {
  console.log('income C');
  let amount = 10;
  try {
    const currentMoney = await action.CfindById(1);
    const cost = parseInt(currentMoney.get('amount')) - amount;
    await action.CaddUp({user_id: 1, name:'C', amount:cost, status:'available'});

    await apiTasks.bookD();
    res.json({});
  } catch (e) {
    const currentMoney = await action.CfindById(1);
    console.log('currentMoney ', currentMoney.get('amount'));
    const revertCost = parseInt(currentMoney.get('amount')) + amount;
    await action.CaddUp({user_id: 1, name:'C', amount:revertCost, status:'available'});
    await apiTasks.cancelB();
    res.json({});
  }
});

app.post('/total', async (req, res) => {
  const result = await action.CfindById(1);
  res.json({
    amount:result.get('amount')
  });
});

let server = app.listen(5000, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("Server run at : http://%s:%s", host, port)
});