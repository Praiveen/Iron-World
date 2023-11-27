// Проверяем, есть ли в LocalStorage информация о входе
if (localStorage.getItem('loggedIn') === 'true') {
	// Если пользователь вошел в систему, меняем текст кнопки и ссылку
	document.getElementById('loginButton').innerText = 'Личный кабинет';
	document.getElementById('loginButton').href = 'user_page.html';
	document.getElementById('loginButton').removeAttribute("onclick");
}

let users = [
 {email: 'user1@example.com', password: 'pass1'},
 {email: 'user2@example.com', password: 'pass2'},
];

// Функция для обработки входа в систему
function handleLogin() {
	// Получаем данные из полей ввода
	// var email = document.getElementById('emailInput').value;
	// var password = document.getElementById('passwordInput').value;

	// // Проверяем, правильные ли введены данные
	// // Здесь вы можете добавить свою логику проверки
	// if (email === 'user@example.com' && password === 'pass') {
	// 	// Если данные верны, сохраняем информацию о входе в LocalStorage
	// 	localStorage.setItem('loggedIn', 'true');

	// 	// Меняем текст кнопки и ссылку
	// 	document.getElementById('loginButton').innerText = 'Личный кабинет';
	// 	document.getElementById('loginButton').href = 'user_acc.html';
	// } else {
	// 	// Если данные неверны, выводим сообщение об ошибке
	// 	alert('Неверный email или пароль');
	// }


	
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	var user = users.find(function(user) {
	   return user.email === email && user.password === password;
	 });

	if (user) {
	   localStorage.setItem('loggedIn', 'true');
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
});