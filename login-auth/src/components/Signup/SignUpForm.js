import React, { useState, useEffect } from "react";

import useSignup from "../../hooks/useSignUp";
import { useGoogleLogin } from "@react-oauth/google";
import { LoginTypes } from "../../constants/LoginTypes";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//custom comoponents
import { InputBox } from "../../ui-components/Input";
import { Button } from "../../ui-components/Button";
import { LogForm } from "../Login/FormStyle";

import theme from "../../ui-components/theme";
import { H2, H3 } from "../../ui-components/Headings";

export default function SignUpForm() {
    const { signUp, isLoading, error } = useSignup();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

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
        <Container style={{ display: "flex", justifyContent: "center" }}>
            <LogForm className="login" onSubmit={handleSignup}>
                <Row>
                    <Col xs={12}>
                        <H2
                            style={{
                                fontSize: theme.fonts.h2,
                                fontWeight: "bold",
                                color: theme.colors.primary,
                                textAlign: "center",
                            }}
                        >
                            Sign Up
                        </H2>
                        <H3
                            style={{
                                fontSize: theme.fonts.h3,
                                paddingInline: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Sign up with a few clicks, then you are good to go
                        </H3>
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
                        {" "}
                        <label>Password:</label>
                        <InputBox
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Col>
                    <Col xs={12}>
                        {" "}
                        <label>Password Again:</label>
                        <InputBox
                            type="password"
                            onChange={(e) => setPassword2(e.target.value)}
                            value={password2}
                        />
                    </Col>
                    <Col xs={12}>
                        <Button
                            width="100%"
                            type="submit"
                            variant="primary"
                            disabled={isLoading}
                        >
                            Sign Up
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <Button
                            width="100%"
                            variant="secondary"
                            disabled={isLoading}
                            onClick={googleSignUp}
                        >
                            Sign up with Google
                        </Button>
                    </Col>
                </Row>

                {error && <div className="error">{error}</div>}
            </LogForm>
        </Container>
    );
}
