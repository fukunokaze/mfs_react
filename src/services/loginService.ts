import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "@/store/auth";

interface UserCredential {
    username: string,
    password: string,
};

interface AuthResponse {
    token: string,
}

const authUserUrl: string = "";

export const authenticateUser = (cred: UserCredential) => {

    axios.post(authUserUrl, {
        username: cred.username,
        password: cred.password,
    },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then((response) => {
            if (response.status == 200) {
                // dispatch(authAction.login());
                // redirect('/');
            }
        });
    return {
        token: "asdasd123123",
    }
};

export const authenticateUserFake = () => {
    // const dispatch = useDispatch();
    // dispatch(authAction.login());
    return {
        token: "asdasd123123",
    }
};
