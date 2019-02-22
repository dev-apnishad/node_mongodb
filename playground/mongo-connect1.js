const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err, client) => {
	if(err) return console.log("Failed to connect to the Database Server");

	const db = client.db('TodoApp1');

	db.collection('Todo').insertOne(
		{
			text: "Learning the node with mongodb",
			completed: false
		}, (err, result) => {
			if(err) return console.log("Failed to insert the todo")

			console.log(JSON.stringify(result.ops, undefined, 4));
		}
	);
	client.close();
});
