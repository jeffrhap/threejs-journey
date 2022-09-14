/** Namespace for the validator - mainly used in custom form */
export namespace Validator {

  /** Based on type, perform a validation on the input */
  export function validate(type: string, input: string) {
    switch (type) {
      case "tel":
        return validatePhoneNumber(input);
      case "email":
        return validateEmail(input);
      case "number":
        return validateNumber(input);
      case "password":
        return validatePassword(input);
      case "username":
        return validateUsername(input);
      case "text":
      default:
        return validateBasic(input);
    }
  }
}


/** Does input string contain anything? */
function validateBasic(input: string) {
  return !!input.length;
}

/** Is provided input an actual number? */
function validateNumber(input: string) {
  return !isNaN(input as any) && !isNaN(parseFloat(input));
}

/** Is provided input a valid password (only basic length checks)? */
function validatePassword(input: string) {
  return input.length >= 6 && input.length <= 20;
}

/** Is provided input a valid email? */
function validateEmail(input: string) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
}

function validateUsername(input: string) {
  return /^(?=[a-zA-Z0-9._ ]{1,99}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(input);
}

/** Is provided input a valid phone number? */
function validatePhoneNumber(input: string) {
  if (validateNumber(input)) {
    return (input.startsWith("+") && input.length === 12) || input.length === 11;
  }
  return false;
}