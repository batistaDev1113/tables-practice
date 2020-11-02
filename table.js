/* DOM*/
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const result = document.getElementById('result');
const text = document.getElementById('text');

let finalResult = 0;
let numArray = [];

const checkAnswer = (e) => {
	if (Number(e.target.value) === finalResult) {
		text.textContent = 'Good answer....next question is coming';
		text.style.color = '#d62828';
		setTimeout(function() {
			console.log('yooooo');
			text.textContent = '';
			e.target.value = '';
			numArray = [];
			createTable();
		}, 1000);
	}
};

result.addEventListener('keyup', checkAnswer);

const randomGenerator = () => {
	let number = Math.floor(Math.random() * 9 + 1);
	return number;
};

// create multiplication
const createProduct = (num) => {
	let temp1 = num[0];
	let temp2 = num[1];
	num1.textContent = temp1;
	num2.textContent = temp2;
	finalResult = temp1 * temp2;
	return finalResult;
};

const createTable = () => {
	for (let i = 1; i <= 2; i++) {
		let number = randomGenerator();
		numArray.push(number);
	}
	createProduct(numArray);
};

createTable();
