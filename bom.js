function showWindowInfo(){
    console.log("width",window.innerWidth)
    console.log("height",window.innerHeight)
    alert("check console for window width and height")
}

function showNavigator(){
    console.log("Browser Info",navigator.userAgent);
    console.log("Language",navigator.language);
    console.log("Online:",navigator.onLine);
}

function showScreen(){
    console.log("screen width",screen.width);
    console.log("screen height",screen.height);
    console.log("avalible height",screen.availHeight);
    console.log("avaliable widht",screen.availWidth);
}

console.log("current url",location.href);

function goGoogle(){
    location.href="https://www.google.com/";
}
// location.reload()

function goBack(){
    history.back()
}