const numbers=document.querySelectorAll(".number");

const calculatorScreen =  document.querySelector('.calculator-screen')
const updateScreen = (number) => {
	calculatorScreen.value = number
}

let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'

numbers.forEach((number) =>{
	number.addEventListener(("click") , (event) => {
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})

const inputNumber = (number) => {
	if (currentInput === '0') {
		
			currentInput = number	
	}
	else{
		
			currentInput +=number
		
	}
	
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click" , (event) => {
		inputOperator(event.target.value)
	})
})


const inputOperator = (operator) => {
	prevInput = currentInput;
	calculationOperator = operator
	currentInput = '0';
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click' , () => {
	calculate();
	updateScreen(currentInput);
})

const calculate = () => {
	let result =0.0
	switch(calculationOperator) {
		case '+' :
			result = parseFloat(prevInput) + parseFloat(currentInput);
			break;
		case '-':
			result = parseFloat(prevInput) - parseFloat(currentInput);
			break;
		case '*':
			result = parseFloat(prevInput) * parseFloat(currentInput);
			break;
		case '/':
			result = parseFloat(prevInput) / parseFloat(currentInput);
			break;
		default:
			return;
	}

	currentInput = result.toString();
	calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click' , () => {
	clearAll()
	updateScreen(currentInput)
});

const clearAll = () => {
	prevInput = '0'
	calculationOperator= ''
	currentInput = '0'
}



const decimalBtn = document.querySelector('.decimal');

decimalBtn.addEventListener('click' , () => {
	calculate1();
	updateScreen(currentInput);
});

const calculate1 = () => {
	currentInput += '.';
}

const percentageBtn = document.querySelector('.percentage');

percentageBtn.addEventListener('click' , () => {
	calculate2();
})

const calculate2 = () => {
	currentInput = (currentInput/100);
}
