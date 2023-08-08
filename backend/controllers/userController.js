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
        const { email, password } = req.body;
        try {
            const user = await User.login(email, password);

            // create a token
            const token = createToken(user._id);

            res.status(200).json({ email, token });
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
            const user = await User.signup(email, password);

            // create a token
            const token = createToken(user._id);

            res.status(200).json({ email, token });
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
                    const user = await User.loginGoogle(email);

                    const token = createToken(user._id);

                    res.status(200).json({ email: user.email, token });
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
                    const user = await User.googleSignUp(email);

                    const token = createToken(user._id);

                    return res.status(200).json({ email: user.email, token });
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
