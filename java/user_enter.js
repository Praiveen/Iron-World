
// Проверяем, есть ли в LocalStorage информация о входе
if (localStorage.getItem('loggedIn') === 'true') {
	// Если пользователь вошел в систему, меняем текст кнопки и ссылку
	document.getElementById('loginButton').innerText = 'Личный кабинет';
	document.getElementById('loginButton').href = 'user_page.html';
	document.getElementById('loginButton').removeAttribute("onclick");
}

//var currentUser = JSON.parse(localStorage.getItem('currentUser'));



let users = [
 {email: 'user1@example.com', password: 'pass1', phone: '',
	name: '',
	surname: '',
	nickname: '',
	field1: true,
   	field2: false,
   	field3: true,
   	field4: false
	},
 {email: 'user2@example.com', password: 'pass2',
	 name: '',
	surname: '',
	nickname: '',
	field1: true,
   	field2: false,
   	field3: true,
   	field4: false
	},
];

// if (flagEnter === 0) {
// 	localStorage.setItem('users', JSON.stringify(users));
// 	flagEnter = 1;
// }


// Функция для обработки входа в систему
function handleLogin() {

	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	var user = users.find(function(user) {
	   var currentUser = user;
	   return user.email === email && user.password === password;
	 });
	var dop = users.find(function(user) {
		if (user.email === email) {
			var currentUser = user;
		}
	   	
	 });
	// for (var i = 0; i <= users.length; i++) {
	// 	if (user[i].email === email) {
	// 		alert(1);
	// 		var currentUser = user[i];
	// 	}
	// }
	var currentUser = users[0];
	/*var currentUser = users.find(function(user) {
	   return user;
	 });*/

	if (user) {
	   localStorage.setItem('loggedIn', 'true');
	   localStorage.setItem('currentUser', JSON.stringify(currentUser));
	   document.getElementById('loginButton').innerText = 'Личный кабинет';
	   document.getElementById('loginButton').href = 'user_acc.html';
	} else {
	   alert('Неверный email или пароль');
	}
}

// Добавляем обработчик события на кнопку входа
document.getElementById('enterButton').addEventListener('click', handleLogin);


document.getElementById('outButton').addEventListener('click', function out(){
	localStorage.setItem('loggedIn', 'false');
	document.getElementById("outButton").setAttribute("onclick", "enterForm()");
	currentUser = [];
	localStorage.setItem('currentUser', JSON.stringify(currentUser));
	location.replace("index.html");
});


function ttxUser() {
 let currentUser = JSON.parse(localStorage.getItem('currentUser'));
 let users = JSON.parse(localStorage.getItem('users'));

 for (let user of users) {
   if (user.email === currentUser.email) {
   		document.getElementById('emailInput').value = user.email;
     	document.getElementById('nameInput').value = user.name;
     	document.getElementById('surnameInput').value = user.surname;
     	document.getElementById('nicknameInput').value = user.nickname;
		document.getElementById('field1Input').checked = user.field1;
		document.getElementById('field2Input').checked = user.field2;
		document.getElementById('field3Input').checked = user.field3;
		document.getElementById('field4Input').checked = user.field4;

     break;
   }
 }
};


function saveChanges() {
 let currentUser = JSON.parse(localStorage.getItem('currentUser'));
 let users = JSON.parse(localStorage.getItem('users'));
 for (let user of users) {
   if (user.email === currentUser.email) {
     user.name = document.getElementById('nameInput').value;
     user.surname = document.getElementById('surnameInput').value;
     user.nickname = document.getElementById('nicknameInput').value;
     user.field1 = document.getElementById('field1Input').checked;
     user.field2 = document.getElementById('field2Input').checked;
     user.field3 = document.getElementById('field3Input').checked;
     user.field4 = document.getElementById('field4Input').checked;

     localStorage.setItem('users', JSON.stringify(users));
     return;
   }
 }

 alert('Не удалось сохранить изменения');
}

// Получаем кнопку по ее ID
var saveButton = document.getElementById("saveButton");

// Добавляем обработчик события на кнопку
saveButton.addEventListener('click', saveChanges);

