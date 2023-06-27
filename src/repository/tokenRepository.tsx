export class TokenRepository {
	TOKEN_KEY = "accessToken";

	save(token: string) {
		localStorage.setItem(this.TOKEN_KEY, token);
	}

	get() {
		return localStorage.getItem(this.TOKEN_KEY);
	}

	remove() {
		localStorage.removeItem(this.TOKEN_KEY);
	}
}
