type HttpMethod = 'post' | 'get'

type User = {
	name: string,
	age: number,
	skills: string[]
}
const someUSer: User = {
	name: 'User name',
	age: 10,
	skills: ['front', 'back']
}

type Role = {
	id: number
}

//intersection
type UserWithRole = User & Role

const someUserWithRole: UserWithRole = {
	name: 'User name',
	age: 10,
	skills: ['front', 'back'],
	id: 1
}

type UseDict = {
	[index: number]: User
}