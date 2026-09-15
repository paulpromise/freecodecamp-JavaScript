let email = "paul.promise@outlook.com"
const maskemail = (email) =>{
    let maskedChar = email.slice(1, (email.indexOf("@") - 1))
    let firstChar = email[0]

    let lastChar = email[email.indexOf("@") - 1]
    let  asterisks = "*".repeat(maskedChar.length) 

    let domainportion  = email.slice(email.indexOf("@"))
    let finalemail = `${firstChar}${asterisks}${lastChar}${domainportion}`
    return finalemail

}


console.log(maskemail(email))

