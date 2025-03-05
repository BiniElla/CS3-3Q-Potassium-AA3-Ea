function conditionalFunc() {
	let Message = prompt('Enter the message:');
	
	if (Message.includes("FR")|| Message.includes("FR") && Message.includes("AI")) {
		document.getElementById('result').innerHTML = `The message "${Message}" is legitimate.`;		
	}
	else if (Message.includes("AI") || Message.includes("aI") || Message.includes("ai")) {
		document.getElementById('result').innerHTML = `The message "${Message}" is tampered with.`;
	}
	else {
		document.getElementById('result').innerHTML = `The message "${Message}" is yet to be encoded.`;
	}
}
