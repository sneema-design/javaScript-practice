async function getUser(userId){
  const user=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!user.ok){
    throw new Error("user not available")
  }
  if(user){
    return user.json()
  }
}

async function Dashboard() {
   try {
     console.log("loading dashboard");
    const user= await getUser(1);
    console.log("user:",user.name)
    return user
   } catch (error) {
      console.log(error)
   }
}

Dashboard()