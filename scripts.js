var button = document.getElementsByClassName('button');
console.log(button);
console.log(button[0]);
console.log(button[1]);
console.log(button[2]);
console.log(button[3]);

for (var i = 0 ; i < button.length ; i++) {
	var text = button[i].innerText;
	console.log("Button: " + text);
}
