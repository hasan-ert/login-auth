import React, { useState, useEffect } from "react";

import useSignup from "../../hooks/useSignUp";
import { useGoogleLogin } from "@react-oauth/google";
import { LoginTypes } from "../../constants/LoginTypes";

export default function SignUpForm() {
    const { signUp, isLoading, error } = useSignup();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        error ? alert("Error: " + error) : console.log();
    }, [error]);

    const handleSignup = async (e) => {
        e.preventDefault();
        await signUp({ email, password }, LoginTypes.JWT);
    };

    async function handleGoogleLoginSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;
        console.log(accessToken);
        await signUp({ accessToken }, LoginTypes.Google);
    }
    const googleSignUp = useGoogleLogin({
        onSuccess: handleGoogleLoginSuccess,
    });

    return (
        <>
            <form className="signup" onSubmit={handleSignup}>
                <h3>Log In</h3>

                <label>Email address:</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={isLoading}>Log in</button>

                {error && <div className="error">{error}</div>}
            </form>
            <button disabled={isLoading} onClick={googleSignUp}>
                Google Sign Up
            </button>
        </>
    );
}
