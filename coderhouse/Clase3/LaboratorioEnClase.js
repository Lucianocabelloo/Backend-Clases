const fs = require("fs")
const crypto = require("crypto")

class UserManager{
constructor(){
    this.users = [];
}

createUser(name,lastName,userName,password){
    const user ={
        id: this.users.length + 1
        name,
        lastName,
        userName,
        password:crypto.createHash("sha256").update(password).digest("hex")
    }
}





}