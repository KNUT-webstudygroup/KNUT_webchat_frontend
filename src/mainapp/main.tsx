import cookie from 'react-cookies';
import React from 'react';
import { useNavigate,Link,Navigate } from "react-router-dom";
//import { contentState } from '../states'; //... wait...
import { useSetRecoilState, useRecoilValue } from 'recoil';

const mainPage = () => {

  const navigate = useNavigate()
	//console.log("UUID Controller")
	if(!cookie.load("uuid")) {
		console.log("UUID Controller")
		return(
		<Navigate to={"/KNUT_webchat_frontend/login/"}></Navigate >
		)// UUID가 없다면...  login page로 보내자.
	}
	return(
		
		<div>
			Login complete
		</div>
	)
}

export default mainPage