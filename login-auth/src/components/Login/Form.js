import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { LoginTypes } from "../../constants/LoginTypes";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "../../ui-components/Button";
import { InputBox } from "../../ui-components/Input";

import { Col, Container, Row } from "react-bootstrap";
import theme from "../../ui-components/theme";
import { LogForm } from "./FormStyle";
import { Link } from "react-router-dom";
import { Error } from "../../ui-components/Error";
import { Text } from "../../ui-components/Headings";

export default function LoginForm() {
    const { login, isLoading, error } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        error ? alert("Error: " + error) : console.log();
    }, [error]);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login({ email, password }, LoginTypes.JWT);
    };

    async function handleGoogleLoginSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;
        await login({ accessToken }, LoginTypes.Google);
    }

    const googleLogin = useGoogleLogin({
        onSuccess: handleGoogleLoginSuccess,
    });

    return (
        <Container style={{ display: "flex", justifyContent: "center" }}>
            <LogForm className="login" onSubmit={handleLogin}>
                <Row>
                    <Col xs={12}>
                        <h2
                            style={{
                                fontSize: theme.fonts.h2,
                                fontWeight: "bold",
                                color: theme.colors.primary,
                            }}
                        >
                            Log In
                        </h2>
                        <h3
                            style={{
                                fontSize: theme.fonts.h3,
                                paddingInline: "1rem",
                            }}
                        >
                            Login fast and start creating your stories
                        </h3>
                    </Col>
                    <Col xs={12}>
                        <label>Email address:</label>
                        <InputBox
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Col>
                    <Col xs={12}>
                        <label>Password:</label>
                        <InputBox
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Col>
                    <Col xs={12}>
                        {error && (
                            <Error className="error">
                                <Text
                                    style={{
                                        marginBottom: "0",
                                        textAlign: "center",
                                    }}
                                >
                                    {error}
                                </Text>
                            </Error>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Button
                            width="100%"
                            type="submit"
                            variant="primary"
                            disabled={isLoading}
                        >
                            Log in
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <Button
                            width="100%"
                            variant="secondary"
                            disabled={isLoading}
                            onClick={googleLogin}
                        >
                            Log in with Google
                        </Button>
                    </Col>
                    <Col xs={12}>Do not have an account?</Col>
                    <Col xs={12}>
                        <Button as={Link} to={"/signup"} variant={"tertiary"}>
                            Sign up now!
                        </Button>
                    </Col>
                </Row>
            </LogForm>
        </Container>
    );
}
