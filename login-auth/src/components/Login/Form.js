import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
    const { login, isLoading, error } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        error ? alert("Error: " + error) : console.log();
    }, [error]);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <form className="login" onSubmit={handleLogin}>
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
    );
}
