// ========================================
// GET ELEMENTS
// ========================================

const signupForm = document.getElementById("signupForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const errorName = document.getElementById("errorname");
const errorEmail = document.getElementById("erroremail");
const errorPassword = document.getElementById("errorpassword");
const errorConfirm = document.getElementById("errorconfirm");
const errorTerms = document.getElementById("errorterms");


// ========================================
// PASSWORD VISIBILITY
// ========================================

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});


toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        toggleConfirmPassword.classList.remove("fa-eye");
        toggleConfirmPassword.classList.add("fa-eye-slash");

    } else {

        confirmPassword.type = "password";

        toggleConfirmPassword.classList.remove("fa-eye-slash");
        toggleConfirmPassword.classList.add("fa-eye");

    }

});


// ========================================
// VALIDATION FUNCTIONS
// ========================================

function validateNameField() {
    const result = validateName(fullname.value);

    errorName.textContent = result.message;

    return result.valid;
}


function validateEmailField() {
    const result = validateEmail(email.value);

    errorEmail.textContent = result.message;

    return result.valid;
}

function validatePasswordField() {
    const result = validatePassword(password.value);

    errorPassword.textContent = result.message;

    return result.valid;
}

function validateConfirmPasswordField() {
    const result = validateConfirmPassword(
        password.value,
        confirmPassword.value
    );

    errorConfirm.textContent = result.message;

    return result.valid;
}

function validateTermsField() {
    const result = validateTerms(terms.checked);

    errorTerms.textContent = result.message;

    return result.valid;
}

// ========================================
// FORM SUBMISSION
// ========================================

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const isNameValid = validateNameField();
    const isEmailValid = validateEmailField();
    const isPasswordValid = validatePasswordField();
    const isConfirmValid = validateConfirmPasswordField();
    const areTermsValid = validateTermsField();

    const isFormValid =
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmValid &&
        areTermsValid;


    if (!isFormValid) {

        return;
    }


    // ------------------------------------
    // TEMPORARY SUCCESS
    // ------------------------------------

    alert("Account created successfully!");

    signupForm.reset();

});