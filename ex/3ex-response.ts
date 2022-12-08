interface Payment {
	sum: number,
	from: number,
	to: string
}

enum ResponceStatus {
	SUCCESS = 'succeess',
	FAILED = 'failed'
}


interface PaymentReqest extends Payment { }


interface SucceessData extends Payment {
	databaseId: number,
}
interface SuccessRespose {
	status: ResponceStatus.SUCCESS,
	data: SucceessData
}

interface FailedData {
	errorMessage: string,
	errorCode: number
}
interface FailedRespose {
	status: ResponceStatus.FAILED,
	data: FailedData
}

type ResponceType = SuccessRespose | FailedRespose