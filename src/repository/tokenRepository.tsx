export class TokenRepository {
	save(TOKEN_KEY: string, token: string) {
		localStorage.setItem(TOKEN_KEY, token);
	}

	get(TOKEN_KEY: string) {
		return localStorage.getItem(TOKEN_KEY);
	}

	remove(TOKEN_KEY: string) {
		localStorage.removeItem(TOKEN_KEY);
	}
}
