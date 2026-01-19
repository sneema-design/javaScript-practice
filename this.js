const hello={
    name:"sanidhya",
    sayhello(){
        function hi(){
            console.log(this.name);
        }
        hi()
    },
    syhello(){
        const hi=()=>{
            console.log(this.name);
        }
        hi();
    }
}
hello.sayhello()
hello.syhello()