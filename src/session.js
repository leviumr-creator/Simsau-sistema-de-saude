var user = "";
var password = "";

function isloged(){
    if(user != "" && password != ""){
        console.log("Usuário logado");
        
}else{
    console.log("Usuário não logado");
}
}


function getUser(user, password){
    const params = new URLSearchParams(window.location.search);
    user = params.get("username");
    password = params.get("password");

if(user && password !== ""){
console.log("registered username: " + user + " password: " + password);
document.cookie = "username=" + user + "; password=" + password + "; path=/";
window.location.href = "index.html";

}else{
    console.log("No user registered");
}
}

function cookieCheck(){
    user = document.cookie.split("; ").find(cookie => cookie.startsWith("username="))?.split("=")[1];
    password = document.cookie.split("; ").find(cookie => cookie.startsWith("password="))?.split("=")[1];
    console.log("cookie username: " + user + " password: " + password);
}
getUser();
cookieCheck();
