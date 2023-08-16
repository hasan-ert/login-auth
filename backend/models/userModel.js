const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const createResponse = ({ user, success, error }) => {
    const response = {
        user: user,
        success: success ? true : false,
        error:
            success === false
                ? error
                    ? error
                    : "An unexpected error occured during login process"
                : "",
    };

    return response;
};

const emailValidation = (password) => {
    if (!validator.isStrongPassword(password)) {
        return false;
    }
    return true;
};

const passwordStrengthCheck = (email) => {
    if (!validator.isEmail(email)) {
        return false;
    }
    return true;
};

// static signup method
userSchema.statics.signup = async function (email, password) {
    let response;
    let errorMessage;

    if (!email || !password) {
        errorMessage = "All fields must be filled";
    } else if (emailValidation(email)) {
        errorMessage = "Email not valid";
    } else if (passwordStrengthCheck(password)) {
        errorMessage = "Password not strong enough";
    }

    const exists = await this.findOne({ email });

    if (exists) {
        errorMessage = "Email already in use";
        return errorMessage;
    }

    if (!errorMessage) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({ email, password: hash });

        response = createResponse({ user, success: true });
    } else {
        response = createResponse({ success: false, error: errorMessage });
    }

    return response;
};
userSchema.statics.googleSignUp = async function (email) {
    let response;
    let errorMessage;

    // validation
    if (!email) {
        errorMessage = "All fields must be filled";
    } else if (emailValidation(email)) {
        errorMessage = "Email not valid";
    }

    const exists = await this.findOne({ email });

    if (exists) {
        errorMessage = "Email already in use";
    }

    if (!errorMessage) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash("password", salt);

        const user = await this.create({ email, password: hash });
        response = createResponse({ user, success: true });
    } else {
        response = createResponse({ successL: false, error: errorMessage });
    }

    return response;
};

// static login method
userSchema.statics.login = async function (email, password) {
    let response;
    let errorMessage;

    if (!email || !password) {
        errorMessage = "All fields must be filled";
        return createResponse({ success: false, error: errorMessage });
    }

    const user = await this.findOne({ email });
    if (!user) {
        errorMessage = "Incorrect email";
        return createResponse({ success: false, error: errorMessage });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        errorMessage = "Incorrect password";
    }

    if (!errorMessage) {
        response = createResponse({ user, success: true });
    } else {
        console.log(errorMessage);
        response = createResponse({ success: false, error: errorMessage });
    }
    console.log(response);
    return response;
};

userSchema.statics.loginGoogle = async function (email) {
    let response;
    let errorMessage;
    if (!email) {
        errorMessage = "All fields must be filled";
    }

    const user = await this.findOne({ email });
    if (!user) {
        errorMessage = "Incorrect email";
    }

    console.log("here");
    if (!errorMessage) {
        response = createResponse({ user, success: true });
    } else {
        response = createResponse({ errorMessage, success: false });
    }
    return response;
};

module.exports = mongoose.model("User", userSchema);
