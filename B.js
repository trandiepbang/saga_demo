let express = require('express');
let apiTasks = require('./api/tasks/book');
let bodyParser = require('body-parser');
let action = require('./actions/users/orders');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

async function revertMoney() {
  let amount = 10;
  const currentMoney = await action.BfindById(1);
  const revertCost = parseInt(currentMoney.get('amount')) + amount;
  await action.BaddUp({user_id: 1, name:'B', amount:revertCost, status:'available'});
}

app.post('/book', async (req, res) => {
  console.log('income B');
  let amount = 10;
  try {
    const currentMoney = await action.BfindById(1);
    const cost = parseInt(currentMoney.get('amount')) - amount;
    await action.BaddUp({user_id: 1, name:'B', amount:cost, status:'available'});
    await apiTasks.bookC();
    res.json({});
  } catch (e) {
    revertMoney();
    await apiTasks.cancelA();
    res.json({});
  }
});

app.post('/cancel', async (req, res) => {
  console.log('cancel B');
  revertMoney();
  await apiTasks.cancelA();
  res.json({});
});

app.post('/total', async (req, res) => {
  const result = await action.BfindById(1);
  res.json({
    amount:result.get('amount')
  });
});

let server = app.listen(4000, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("Server run at : http://%s:%s", host, port)
});