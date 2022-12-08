interface UserO {
	login: string;
	password?: string
}

const userO: UserO = {
	login: '@login'
}

function multi(first: number = 2, second?: number) {
	if (!second) {
		return first * first
	}
	return first * second
}

interface UserPro {
	login: string;
	password?: {
		type: 'primary' | 'secondary'
	}
}

function testPass(user: UserPro) {
	const test = user.password?.type //optional chaining

	const test2 = user.password!.type //not null assertion

	const test3 = user.password ? user.password!.type : undefined

	const test4 = user.password!.type ?? 'default' // nullish coalescing

}