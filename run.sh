printf 'Start booking and failling'
curl -XPOST http://localhost:3000/book/

printf 'Money from A \n\n\n';
curl -XPOST http://localhost:3000/total/
printf 'Money from B \n\n\n';
curl -XPOST http://localhost:4000/total/
printf 'Money from C \n\n\n';
curl -XPOST http://localhost:5000/total/
