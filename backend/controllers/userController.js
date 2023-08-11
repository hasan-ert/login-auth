const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
    if (req.body.googleAccessToken) {
        googleSignin(req, res);
    } else {
        console.log("in loginUser");
        const { email, password } = req.body;

        try {
            const result = await User.login(email, password);

            console.log(result);
            if (result.success) {
                // create a token
                const token = createToken(result.user._id);

                res.status(200).json({ email, token });
            } else {
                res.status(401).json({ message: result.error });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

// signup a user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    if (req.body.googleAccessToken) {
        googleSignup(req, res);
    } else {
        try {
            const result = await User.signup(email, password);

            if (result.success) {
                // create a token
                const token = createToken(result.user._id);

                res.status(200).json({ email, token });
            } else {
                res.status(401).json({ error: result.error });
            }
        } catch (error) {
            res.status(400).json({
                message: "An error occured during signup",
                error: error.message,
            });
        }
    }
};

const googleSignin = (req, res) => {
    try {
        const data = req.body;
        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${data.googleAccessToken}` },
            })
            .then(async (response) => {
                //            const firstName = response.data.given_name;
                //            const lastName = response.data.family_name;
                const email = response.data.email;
                //            const photo = response.data.picture;

                const userExists = User.findOne({ email });

                if (!userExists) {
                    return res
                        .status(400)
                        .json({ message: "User does not exists!" });
                } else {
                    const result = await User.loginGoogle(email);

                    if (result.success) {
                        const token = createToken(result.user._id);

                        res.status(200).json({
                            email: result.user.email,
                            token,
                        });
                    } else {
                        res.status(401).json({ error: result.error });
                    }
                }
            });
    } catch (error) {
        res.status(400).json({
            message: "An error occured during signup",
            error: error.message,
        });
    }
};

const googleSignup = (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${data.googleAccessToken}` },
            })
            .then(async (response) => {
                //            const firstName = response.data.given_name;
                //            const lastName = response.data.family_name;
                const email = response.data.email;
                //            const photo = response.data.picture;

                const userExists = await User.findOne({ email });
                console.log(email, userExists);
                if (userExists) {
                    return googleSignin(req, res);
                } else {
                    const result = await User.googleSignUp(email);
                    if (result.success) {
                        const token = createToken(result.user._id);

                        return res
                            .status(200)
                            .json({ email: result.user.email, token });
                    } else {
                        res.status(401).json({ error: result.error });
                    }
                }
            });
    } catch (error) {
        res.status(400).json({
            message: "An error occured during signup",
            error: error.message,
        });
    }
};

module.exports = { signupUser, loginUser };
