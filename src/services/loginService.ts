import axios from "axios";

export type UserCredential = {
    username: string;
    password: string;
};

interface AuthResponse {
    token: string;
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

        if (response.status === 200 && response.data) {
            return {
                token: response.data,
            };
        }
        
        throw new Error("Authentication failed");
    } catch (error) {
        console.error("Authentication error:", error);
        throw error;
    }
}
