import cookie from 'react-cookies';
import React from 'react';
import { useNavigate,Link,Navigate } from "react-router-dom";
import { userJoinedGroup } from '../../states'; //... wait...
import { useSetRecoilState, useRecoilValue } from 'recoil';
import GroupIcon from './GroupIcon'

const groupSideBar = () => {
	const userJoinedGroup_ = useRecoilValue(userJoinedGroup)
	return(
		userJoinedGroup_.map((server) => {
			<GroupIcon server={server}></GroupIcon>
		})
	)
}

export default groupSideBar