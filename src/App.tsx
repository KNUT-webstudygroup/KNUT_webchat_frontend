import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'

function App() {
  const [count, setCount] = useState(0)
  const fronturi = 'KNUT_webchat_frontend'
  return (
    <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path={fronturi+"/"} element={<Login />}></Route>
					<Route path={fronturi+"/regist/"} element={<Register />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/*<Route path="*" element={<NotFound />}></Route>*/}
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App
