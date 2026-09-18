function isLeapYear(year){
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ){
      return `${year} is a leap year.`
  } else {
    return `${year} is not a leap year.`
  }
}


let year = 1900
let result = isLeapYear(year)
console.log(result)