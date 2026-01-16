function fetchWithTimeout(url, timeout){
    return Promise.race([
        fetch(url).then(res=>{
            if(!res.ok) throw new Error("HTTP error");
            return res.json()
        }),
        new Promise((_,reject)=>{
            setTimeout(()=>{
                reject(new Error("api not working"))
            },timeout)
        })
    ])
}
fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 1000)
.then(data=>{
    console.log("user log",data.length)
})
.catch(err=>{
    console.log(err)
})
