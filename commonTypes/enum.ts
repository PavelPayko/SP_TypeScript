enum StatusCode {
	SUCCESS,
	IN_PROCESS,
	FAILED
}

const response = {
	message: 'ok',
	statusCode: StatusCode.SUCCESS
}

const enum Roles {
	ADMIN = 1,
	USER = 2
}

const result = Roles.ADMIN