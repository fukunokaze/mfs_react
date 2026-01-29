import axios from "axios";

export type UserCredential = {
    username: string,
    password: string,
};

interface AuthResponse {
    token: string,
}

const authUserUrl: string = "http://localhost:5212/api/Login";

export async function authenticateUser(cred: UserCredential): Promise<AuthResponse> {
    let userToken: string = "";

    await axios.post(authUserUrl, {
        username: cred.username,
        password: cred.password,
    },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then((response) => {

            if (response.status == 200) {
                userToken = response.data;
                return {
                    token: response.data,
                }
            }
        });

    return { token: userToken } as AuthResponse;
};

export const authenticateUserFake = (cred: UserCredential) => {
    // const dispatch = useDispatch();
    // dispatch(authAction.login());
    return {
        token: "asdasd123123",
    }
};
