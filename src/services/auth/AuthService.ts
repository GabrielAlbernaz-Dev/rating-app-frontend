class AuthService {
    isAuthenticated() : boolean {
        const randomNum = Math.floor(Math.random() * 3);
        return randomNum >= 2;
    }

    getToken() : string | null {
        return "";
    }

    login() : boolean {
        return true;
    }

    logout() : boolean {
        return true;
    }
}

export default new AuthService();