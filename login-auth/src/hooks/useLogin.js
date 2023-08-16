import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Links from "../constants/Links";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../api/index";
import { LoginTypes } from "../constants/LoginTypes";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const login = async (data, type) => {
        setIsLoading(true);
        setError(null);

        let response;
        if (type === LoginTypes.Google) {
            response = await AuthAPI.signInGoogle(data.accessToken);
        } else {
            response = await AuthAPI.signIn(data);
        }

        if (response === undefined || response.status === 401) {
            setIsLoading(false);
            setError(response?.data.message);
        } else if (response.status === 200) {
            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(response.data));

            // update the auth context
            dispatch({ type: "LOGIN", payload: response.data });

            // update loading state
            setIsLoading(false);
            navigate("/home");
        }
    };

    return { login, isLoading, error };
};
