const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true}, (err, client) => {
	if(err) {
		return console.log('unable to connect to Database server');
	}
	console.log('Connected to database server');

	const db = client.db('TodoApp')

	db.collection('Todos').insertOne({
		text: '[Tutorial] Hello World Node App',
		completed: false
	}, (err, result) => {
		if(err) return console.log('failed to insert the todo')
		console.log(JSON.stringify(result.ops, undefined, 2))
	});

	client.close();
})
