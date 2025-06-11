const accountId=14795
let accountEmail="gopal@gmail.com"
var accountPass="12345"
accountCity="Delhi"
let accountState

//accountId=2 .... cannot do this due to const

accountEmail="hitesh@gmail.com"
accountPass="45678"
accountCity="Mumbai"


console.log(accountId)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)

console.table([accountId, accountEmail, accountPass, accountCity, accountState])

/*
Prefer not to use var, because of issue in block scope and functional scope
*/