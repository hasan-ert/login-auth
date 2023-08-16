import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Links from "../constants/Links";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../api/index";
import { LoginTypes } from "../constants/LoginTypes";

export default function useSignup() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const signUp = async (data, type) => {
        setIsLoading(true);
        setError(null);
        let response;
        console.log(data);
        if (type === LoginTypes.Google) {
            response = await AuthAPI.signUpGoogle(data.accessToken);
        } else {
            response = await AuthAPI.signUp(data);
        }

        console.log(response);
        if (response === undefined) {
            setIsLoading(false);
            setError(response.error);
        } else {
            console.log("here", response);
            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(response));

            // update the auth context
            dispatch({ type: "LOGIN", payload: response });

            // update loading state
            setIsLoading(false);
            navigate("/home");
        }
    };

    return { signUp, isLoading, error };
}
