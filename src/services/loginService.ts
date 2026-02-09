import axios, { AxiosError } from "axios";

export type UserCredential = {
    username: string;
    password: string;
};

export type AuthResponse = {
    token: string;
    status?: number;
    message?: string;
}

const authUserUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL 
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Login`
    : "http://localhost:5212/api/Login";

/**
 * Authenticates a user with the backend API
 * @param cred - User credentials containing username and password
 * @returns Promise with authentication response containing token
 * @throws Error if authentication fails
 */
export async function authenticateUser(cred: UserCredential): Promise<AuthResponse> {
    try {
        const response = await axios.post(authUserUrl, {
            username: cred.username,
            password: cred.password,
        });

        if (response.status === 200 && response.data.token) {
            return {
                token: response.data.token,
                status: response.status,
                message: response.data.message
            };
        }
        
        return {
            token: "",
            status: response.status,
            message: response.data.message
        }
    } catch (error : AxiosError<AuthResponse> | any) {
        // console.error("Authentication error:", error);
        return {
            token: "",
            status: error.response?.status,
            message: error.response.data.message
        }
    }
}
