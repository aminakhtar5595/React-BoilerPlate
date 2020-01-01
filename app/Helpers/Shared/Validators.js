
export function validateEmail(text) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    // var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (re.test(text))
}
// export function validatePhone(text) {
//     var re = /^[0-9-+]{9,16}$/
//     return (re.test(text))
// };

export function validateCreditCard(text) {
    var re = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    return (re.test(text))
}

export function validateCVV(text) {
    var re = /^[0-9]{3}$/
    return (re.test(text))
}

export function validatePhone(text) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im
    return (re.test(text))
};
export function validateNumeric(text) {
    var re = /^[0-9]$/
    return (re.test(text))
}
export function validateName(text) {
    // var re = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g
    var re = /^[a-zA-Z ]{3,30}$/
    // var re = /^[a-zA-Z ]{2,30}$/;
    return (re.test(text))
}
export function validateAddress(text) {
    var re = /^[a-zA-Z0-9+-/,.#':"` ]{6,200}$/
    return (re.test(text))
}
export function validateCNIC(text) {
    var re = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/
    return (re.test(text))
}
export function validateCRN(text) {
    var re = /^(\d[0-9]{1,30})$/
    return (re.test(text))
}
export function validateRN(text) {
    var re = /^(\d[0-9]{1,30})$/
    return (re.test(text))
}
export function validatePassword(text) {
    var re = /^.{6,}$/
    return (re.test(text))
}
export function validateRequired(text) {
    var re = /^\S*$/
    return (re.test(text))
}
export function validatePostalCode(text) {
    var re = /^\d{5}$/
    return (re.test(text))
}
export function validateDate(text) {
    var re = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    return (re.test(text))
}
export function validateString(text) {
    var re = /^[A-Za-z]+$/
    return (re.test(text))
}
export function validateURL(text) {
    var re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    return (re.test(text))
}
