
/*
@author : Lutica CANARD
@description : Check user connection is from real server.
if user connection is from localhost, It should return false.
*/
export default function isRealServer():boolean 
{
    return window.location.hostname === "localhost"?false:true;
}
