import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'
import MainPage from './mainapp/main';
import SettingPage from './Setting/setting';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
  } from 'recoil';



function App() {
	const [count, setCount] = useState(0)
	const fronturi = 'KNUT_webchat_frontend'
	return (
		<div className='App'>
			<RecoilRoot>
				<BrowserRouter>
					<Routes>
						<Route path={fronturi + "/login"} element={<Login />}></Route>
						<Route path={fronturi + "/regist/"} element={<Register />}></Route>
						<Route path={fronturi + "/"}element={<MainPage />}></Route>
						<Route path={fronturi + "/setting/"}element={<SettingPage/>}></Route>
						<Route path="*" element={<MainPage />}></Route>
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</div>
	)
}

export default App
