const {
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateTerms
} = require("../js/signupValidation");


describe("Name validation", () => {

    test("rejects an empty name", () => {
        expect(validateName("")).toEqual({
            valid: false,
            message: "Please enter your full name."
        });
    });

    test("rejects a name shorter than 3 characters", () => {
        expect(validateName("Jo")).toEqual({
            valid: false,
            message: "Name must contain at least 3 characters."
        });
    });

    test("accepts a valid name", () => {
        expect(validateName("Devanshu Agarwal")).toEqual({
            valid: true,
            message: ""
        });
    });

});


describe("Email validation", () => {

    test("rejects an empty email", () => {
        expect(validateEmail("")).toEqual({
            valid: false,
            message: "Please enter your email address."
        });
    });

    test("rejects an invalid email", () => {
        expect(validateEmail("invalid-email")).toEqual({
            valid: false,
            message: "Please enter a valid email address."
        });
    });

    test("accepts a valid email", () => {
        expect(validateEmail("devanshu@example.com")).toEqual({
            valid: true,
            message: ""
        });
    });

});


describe("Password validation", () => {

    test("rejects an empty password", () => {
        expect(validatePassword("")).toEqual({
            valid: false,
            message: "Please enter a password."
        });
    });

    test("rejects a password shorter than 8 characters", () => {
        expect(validatePassword("Abc123")).toEqual({
            valid: false,
            message: "Password must contain at least 8 characters."
        });
    });

    test("requires an uppercase letter", () => {
        expect(validatePassword("password123")).toEqual({
            valid: false,
            message: "Password must contain at least one uppercase letter."
        });
    });

    test("requires a number", () => {
        expect(validatePassword("Password")).toEqual({
            valid: false,
            message: "Password must contain at least one number."
        });
    });

    test("accepts a strong valid password", () => {
        expect(validatePassword("Password123")).toEqual({
            valid: true,
            message: ""
        });
    });

});


describe("Confirm password validation", () => {

    test("rejects an empty confirmation password", () => {
        expect(validateConfirmPassword("Password123", "")).toEqual({
            valid: false,
            message: "Please confirm your password."
        });
    });

    test("rejects different passwords", () => {
        expect(
            validateConfirmPassword("Password123", "Password456")
        ).toEqual({
            valid: false,
            message: "Passwords do not match."
        });
    });

    test("accepts matching passwords", () => {
        expect(
            validateConfirmPassword("Password123", "Password123")
        ).toEqual({
            valid: true,
            message: ""
        });
    });

});


describe("Terms validation", () => {

    test("rejects unaccepted terms", () => {
        expect(validateTerms(false)).toEqual({
            valid: false,
            message: "Please accept the Terms & Conditions."
        });
    });

    test("accepts agreed terms", () => {
        expect(validateTerms(true)).toEqual({
            valid: true,
            message: ""
        });
    });

});