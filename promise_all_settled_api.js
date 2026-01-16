const userApi= fetch("https://jsonplaceholder.typicode.com/users").then(r=>r.json());
const postApi= fetch("https://jsonplaceholder.typicode.com/posts").then(r=>r.json());
const commentApi=fetch("https://wrong-url.typicode.com/comments").then(r=>r.json());

Promise.allSettled([userApi,postApi,commentApi]).then(result=>{
    result.forEach((result,index) => {
        if (result.status === "fulfilled") {
        console.log(`API ${index + 1} success`, result.value.slice(0, 2));
      } else {
        console.log(`API ${index + 1} failed`, result.reason);
      }
    });
})