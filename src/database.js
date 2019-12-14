const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI
	? process.env.MONGODB_URI
	: 'mongodb://localhost/dbtest';

mongoose.connect(URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('DB is connected');
});
