
/*
@author : Lutica CANARD
@description : Check connect of user is from real server.
if this connection is from localhost, It should return false.
*/
export default function isRealServer():boolean 
{
    return window.location.hostname === "localhost"?false:true;
}
