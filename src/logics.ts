
/*
@author : Lutica CANARD
@description : Checking connect is from real server.
*/
export default function isRealServer():boolean 
{
    return window.location.hostname === "localhost"?false:true;
}
