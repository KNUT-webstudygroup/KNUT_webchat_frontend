import cookie from 'react-cookies';
import React from 'react';
import { useNavigate,Link,Navigate } from "react-router-dom";
import { loginedState } from '../states'; //... wait...
import { useRecoilState } from 'recoil';


const mainPage = () => {

	const navigate = useNavigate()
	console.log(cookie.loadAll())
	const state = cookie.load('logined') === 'true';
	if(!state) {
		React.useEffect(() => {});
		// 로그인 재검증 로직
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