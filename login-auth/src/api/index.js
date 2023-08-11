import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
        const token = JSON.parse(localStorage.getItem("user")).token;
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

const AuthAPI = {
    async signIn(data) {
        try {
            const res = await API.post("/user/login", data);
            return res;
        } catch (err) {
            debugger;
            const res = err.response;
            return res;
        }
    },
    async signInGoogle(accessToken) {
        try {
            const res = await API.post("/user/login", {
                googleAccessToken: accessToken,
            });
            return res.data;
        } catch (err) {
            console.log(`Error occured during login: ${err}`);
            return;
        }
    },

    async signUp(data) {
        try {
            const res = await API.post("/user/signup", data);
            return res.data;
        } catch (err) {
            console.log(`Error occured during login: ${err}`);
            return;
        }
    },

    async signUpGoogle(accessToken) {
        try {
            const res = await API.post("/user/signup", {
                googleAccessToken: accessToken,
            });
            return res.data;
        } catch (err) {
            console.log(`Error occured during login: ${err}`);
            return;
        }
    },
};

export default AuthAPI;
