function getFullName(userEntity: { firstName: string, surname: string }): string {
	return `${userEntity.firstName} ${userEntity.surname}`
}

const getFullNameArrow = (firstName: string, surname: string): string => {
	return `${firstName} ${surname}`
}

const user = {
	name: 'name',
	surname: 'surname',
	city: 'city',
	age: '18',
	isDeveloper: true
}

// const name: string = 'name'

getFullName(user)