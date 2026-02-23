export const checkValidData =(email, password) => {
    const isemailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const ispasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (!isemailValid) {
        return { valid: false, message: "Invalid email format." };
    }   
    if (!ispasswordValid) {
        return { valid: false, message: "Invalid password format." };
    }
    return { valid: true, message: "Valid email and password." };   
}