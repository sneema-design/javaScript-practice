function loginUser({email,password}){
     if(!email||!password){
        return Promise.reject(new Error("email or password is empty"));
     }
     if(!email.includes("@")){
        return Promise.reject(new Error("email is of not properformate"))
     }
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            email==="admin@gmail.com" && password==="1234"?resolve({id:1,token:"jwt"}):reject(new Error("id/password is wrong"))
        },2000)
     })
}

loginUser({email:"admin@gmail.com",password:"1234"}).then(res=>console.log(res))
.catch(err=>{
    console.log(err)
})