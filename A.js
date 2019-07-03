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
  const currentMoney = await action.AfindById(1);
  const revertBack = parseInt(currentMoney.get('amount')) + amount;
  await action.AaddUp({ user_id: 1, name: 'A', amount: revertBack, status: 'available' });
}

app.post('/book', async (req, res) => {
  console.log('income A');
  let amount = 10;
  try {
    const currentMoney = await action.AfindById(1);
    console.log(currentMoney);
    const cost = parseInt(currentMoney.get('amount')) - amount;
    await action.AaddUp({ user_id: 1, name: 'A', amount: cost, status: 'available' });
    await apiTasks.bookB();
    res.json({});
  } catch (e) {
    revertMoney();
    res.json({});
  }
});

app.post('/cancel', async (req, res) => {
  console.log('cancel A');
  revertMoney();
  res.json({});
});

app.post('/total', async (req, res) => {
  const result = await action.AfindById(1);
  res.json({
    amount:result.get('amount')
  });
});

let server = app.listen(3000, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("Server run at : http://%s:%s", host, port)
});