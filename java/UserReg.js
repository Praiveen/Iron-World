function registrationUser(){
	let users = JSON.parse(localStorage.getItem('users'));

	let emailReg = document.getElementById("emailInputRegistr").value;
	let pass1 = document.getElementById("passwordInputRegistr1").value;
	let pass2 = document.getElementById("passwordInputRegistr2").value;
	if(pass1 != pass2){
		alert("Пароли не совпадают!");
		return;
	}

	for (let user of users) {
		if (user.email === emailReg) {
		 	alert("Пользователь с такой почтой уже есть");
		 	return;
		}
	}
	let user = {email: emailReg, password: pass1,
		name: '',
		surname: '',
		nickname: '',
		field1: true,
	   	field2: false,
	   	field3: true,
	   	field4: false
	};
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
	localStorage.setItem('loggedIn', 'true');
	localStorage.setItem('currentUser', JSON.stringify(user));
	document.getElementById('loginButton').innerText = 'Личный кабинет';
	document.getElementById('loginButton').href = 'user_page.html';
}

document.getElementById('regButton').addEventListener('click', registrationUser);


