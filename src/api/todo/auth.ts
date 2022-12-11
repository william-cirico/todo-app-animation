type LoginResponse = {
    token: string;
}

export class AuthAPI {
    static async login(username: string, password: string): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === "teste@email.com" && password === "123456") {
                    resolve({ token: "asdfiy136487162348716ygfduaygdshjfgasuqwe12" });
                } else {
                    reject(new Error("login é inválido"));
                }
            }, 300);
        });
    }
}