function isRealServer(){
    return window.location.hostname === "localhost"?false:true;
}