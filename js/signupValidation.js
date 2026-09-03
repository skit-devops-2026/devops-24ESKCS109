function validateName(name) {
    const trimmedName = name.trim();

    if (trimmedName === "") {
        return {
            valid: false,
            message: "Please enter your full name."
        };
    }

    if (trimmedName.length < 3) {
        return {
            valid: false,
            message: "Name must contain at least 3 characters."
        };
    }

    return {
        valid: true,
        message: ""
    };
}


function validateEmail(email) {
    const emailValue = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        return {
            valid: false,
            message: "Please enter your email address."
        };
    }

    if (!emailPattern.test(emailValue)) {
        return {
            valid: false,
            message: "Please enter a valid email address."
        };
    }

    return {
        valid: true,
        message: ""
    };
}


function validatePassword(password) {
    if (password === "") {
        return {
            valid: false,
            message: "Please enter a password."
        };
    }

    if (password.length < 8) {
        return {
            valid: false,
            message: "Password must contain at least 8 characters."
        };
    }

    if (!/[A-Z]/.test(password)) {
        return {
            valid: false,
            message: "Password must contain at least one uppercase letter."
        };
    }

    if (!/[0-9]/.test(password)) {
        return {
            valid: false,
            message: "Password must contain at least one number."
        };
    }

    return {
        valid: true,
        message: ""
    };
}


function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword === "") {
        return {
            valid: false,
            message: "Please confirm your password."
        };
    }

    if (confirmPassword !== password) {
        return {
            valid: false,
            message: "Passwords do not match."
        };
    }

    return {
        valid: true,
        message: ""
    };
}


function validateTerms(accepted) {
    if (!accepted) {
        return {
            valid: false,
            message: "Please accept the Terms & Conditions."
        };
    }

    return {
        valid: true,
        message: ""
    };
}


if (typeof module !== "undefined") {
    module.exports = {
        validateName,
        validateEmail,
        validatePassword,
        validateConfirmPassword,
        validateTerms
    };
}