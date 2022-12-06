function fetchWithAuth(url: string, method: 'post' | 'get'): 1 {
	return 1
}
fetchWithAuth('str', 'get')

let method = 'post'
fetchWithAuth('str', method as 'post')