//unknown строже чем any
let input: unknown

input = 3
input = ['1', '2']

// let res: string = input // ошибка

function run(i: unknown) {
	if (typeof i === 'number') {
		i++
	} else {
		console.log(i);
	}
}

run(input)

async function getData() {
	try {
		fetch('')
	} catch (error) {
		// console.log(error.message); // ошибка
		if (error instanceof Error) {
			console.log(error.message)
		}

		const e = error as Error
	}
}

type UnionTypeOne = unknown | null //unknown перекрывает все типы
type IntersectionTypeOne = unknown | string // берем самый узкий тип


