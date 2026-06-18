function validEmail(str) {
	let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	let test = reg.test(str)
	return test;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
