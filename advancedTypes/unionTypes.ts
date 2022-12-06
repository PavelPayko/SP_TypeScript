//обьединение типов
function logId(id: string | number | boolean) {
	console.log(id);

}

//сужение типов | Narrowing

function logId_N(id: string | number | boolean) {
	if (typeof id === 'string') {
		console.log(id);
	}
	else if (typeof id === 'number') {
		console.log(id);
	}
	else {
		console.log(id);
	}
}

function logErr(err: string | string[]) {
	if (Array.isArray(err)) {
		console.error(err);
	}
	else {
		console.error(err.toLowerCase());
	}
}

function logObject(obj: { a: number } | { b: number }) {
	if ('a' in obj) {
		console.error(obj.a);
	}
	else {
		console.log(obj.b)
	}
}

function logMultipleIds(a: string | number, b: string | boolean) {
	if (a === b) {

	} else {
		console.log(a);

	}
}
