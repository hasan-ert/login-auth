import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <GoogleOAuthProvider clientId="1092208794322-h2vgtfgsnhlj80eovc14f8rsbi8p5n3t.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
