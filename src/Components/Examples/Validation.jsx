import React from 'react'

const Validation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function validatePassword(password) {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[@$!%*?&]/;
        const minLengthRegex = /.{8,}/;
    
        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasDigit = digitRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
        const isMinLength = minLengthRegex.test(password);
    
        return hasUppercase && hasLowercase && hasDigit && hasSpecialChar && isMinLength;
    }
  return (
    <div>Validation</div>
  )
}

export default Validation