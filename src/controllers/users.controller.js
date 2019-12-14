const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
	const users = await User.find();
	console.log(users);
	res.json(users);
};
userCtrl.createUser = async (req, res) => {
	const { name } = req.body;
	const newUser = new User({ name });
	await newUser.save();
	res.json({ message: 'user save!' });
};

userCtrl.deleteUser = async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.json({ message: 'user deleted!' });
};

module.exports = userCtrl;
