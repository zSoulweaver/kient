interface ResponseStatus {
	error: boolean
	code: number
	message: string
}

interface SuccessResponse<T> {
	status: ResponseStatus
	data: T
}

interface APIResponse<T> {
	status: ResponseStatus
	data?: T
}

export type CommonAPIResponse<T> = APIResponse<T>

export function isSuccessResponse<T>(
	response: CommonAPIResponse<T>,
): response is SuccessResponse<T> {
	return !response.status.error
}
