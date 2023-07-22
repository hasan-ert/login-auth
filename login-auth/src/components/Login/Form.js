import React, { useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
    const { login, isLoading, error } = useLogin();
    const logInfo = { email: "hasan0877@gmail.com", password: "F34ht153." };

    useEffect(() => {
        error ? alert("Error: " + error) : console.log();
    }, [error]);

    const handleLogin = async () => {
        await login(logInfo.email, logInfo.password);
    };

    return (
        <>
            <button
                disabled={isLoading}
                style={{
                    width: "120px",
                    height: "60px",
                    backgroundColor: "red",
                }}
                onClick={handleLogin}
            >
                {isLoading ? "Logging In" : "Click here to log in"}
            </button>
        </>
    );
}
