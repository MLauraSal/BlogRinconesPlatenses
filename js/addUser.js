const userList = [];

function addUser(user, name, email, password) {
	const newUser = {
		user : user.newUser,
		name : name.newUser,
		email : email.newUser,
		password : password.newUser
	};

	userList.push(newUser);
}