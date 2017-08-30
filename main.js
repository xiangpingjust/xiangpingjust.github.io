//切换图片
var myImg = document.querySelector('img');
myImg.onclick = function() {
	var imgSrc = myImg.getAttribute('src');
	if(imgSrc === 'images/a.jpg') {
		myImg.setAttribute('src','images/b.jpg');
	} else {
		myImg.setAttribute('src','images/a.jpg');
	}
}
//点击按钮，设置userName
var myBtn = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Set Your Name!');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'hello world!' + myName;
}

if(!localStorage.getItem('name')) {
		setUserName();
	} else {
		var storedName = localStorage.getItem('name');
		myHeading.innHTML = 'HELLO WORLD!' + storedName;
	}
myBtn.onclick = function() {
	setUserName();
}
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
// 	var mySrc = myImage.getAttribute('src');
// 	if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
// 	} else {
// 	  myImage.setAttribute ('src','images/firefox-icon.png');
// 	}
// }

// // Personalized welcome message code

// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//   var myName = prompt('Please enter your name.');
//   localStorage.setItem('name', myName);
//   myHeading.innerHTML = 'Mozilla is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   var storedName = localStorage.getItem('name');
//   myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// }