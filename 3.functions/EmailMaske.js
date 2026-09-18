let  email  = "paul.promise@outlook.com"
function maskEmail(email){
    let maskedChars = email.slice(1, (email.indexOf('@') - 1))
    let domainpotion = email.slice(email.indexOf("@"))
    let firstChar = email[0];
    let lastChar = email[email.indexOf("@") - 1]
    let asterisks = "*".repeat(maskedChars.length)

    let finalemail = `${firstChar}${asterisks}${lastChar}${domainpotion}`
    return finalemail
}



console.log(maskEmail(email))


