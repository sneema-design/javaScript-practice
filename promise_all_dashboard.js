function fetchProfile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:"jhon",age:12})
        },1000)
    })
}

// function fetchPosts(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(["post1","post2","post3"])
//         },1500)
//     })
// }

function fetchPosts(){
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject("Posts service is down");
        },800);
    });
}

function fetchNotification(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["noti1","noti2"])
        },500)
    })
}

Promise.all([
    fetchProfile(),
    fetchPosts(),
    fetchNotification()
]).then(([Profile,Posts,Notifications])=>{
    console.log("Dashboard loaded")
    console.log("Profile:",Profile)
    console.log("Posts:",Posts)
    console.log("Notifications:",Notifications)
})
.catch((err)=>{
    console.log("failed to load the dashboard",err)
})