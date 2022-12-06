interface UserI {
	name: string,
	age: number,
	skills: string[]

	log: (id: number) => string
}
const someUser: UserI = {
	name: 'User name',
	age: 10,
	skills: ['front', 'back'],

	log: (id) => `${id}`
}

interface DateI {
	createdAt: Date
}
interface UserWithRoleI extends UserI {
	roleId: number
}
interface UserWithRoleAndDateI extends UserI, DateI {
	roleId: number
}

const otherUserWithRole: UserWithRoleI = {
	name: 'User name',
	age: 10,
	skills: ['front', 'back'],
	roleId: 1,

	log: (id) => `${id}`
}

