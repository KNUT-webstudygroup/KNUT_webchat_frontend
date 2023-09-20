import { useState, useRef,useEffect } from "react";
import axios from "axios";
import isRealServer from './logics'
import { useTranslation } from 'react-i18next'
import i18n from "i18next";
import { Link,Navigate } from "react-router-dom";
import cookie from 'react-cookies';
import { redirect } from "react-router-dom";
import {setLoginState} from  './state/setLoginState'
import { port } from "./states";


function login() {
  const state = cookie.load('logined') === 'true'
  if(state==true) return(
    <Navigate to={"/KNUT_webchat_frontend/"}></Navigate >
  )
  const {t} = useTranslation(['login']) // t는 번역을 위한 함수(i18n 폴더에 en/ko ver. 문구 정리되어 있음!)
  const userid = useRef<HTMLInputElement>(null); // ref={userid}인 html input 요소 참조함
  const password = useRef<HTMLInputElement>(null); // ref={password}인 html input 요소 참조함
  let id; // id input에 입력한 값
  let pw; // pw input에 입력한 값
  const onSubmit = async (e: any) => {
    e.preventDefault(); // form은 이벤트를 만나면 자동으로 새로고침하는 성질이 있기 때문에 이를 막아준다.
    console.log(t('login:tryinglogin'));
    console.log(isRealServer()) // 요건 왜 쓰는거지..?
    let id2 = userid?.current?.value // 옵셔널 체이닝, 값이 있는 경우에만 접근하며 값이 없다면 undefined 반환
    let pw2 = password?.current?.value
    
    if (!id2) {alert("Please enter your ID!");return;} // id, pw가 없으면 post 요청 막아야 됨...
    else if (!pw2) {alert("Please enter your PW!");return;}

    await axios
      .post(`http://localhost:${port}/login`, { // '/login'으로 ID와 PW를 담은 객체를 post 방식으로 전송
        id: id2,
        pw: pw2,
      })
      .then(async(response:any) => { // 서버에서 온 응답
        // id, pw 일치했다고 가정하고 true 받아옴
        if (response.data.result === true) { // 로그인 성공
          console.log(response.data);
					console.log(t('login:suc'));

          cookie.save('logined','true',{});
          window.location.href = '/'
        } else { // ID or PW가 일치하지 않아 로그인 실패
          console.log(t('login:faildesc'));
        }
      })
      .catch((err) => { // 로그인 실패
        console.log(t('login:fail') + ':' + err)
      }
      )
  };
  return (
    
    <div className='registerWarp'>
      <form className='registerbox'>
        <div className='registerboxinner'>
          <div className='register_first_component_etc'>
              <h1>{t('login:login')}</h1>
          </div>
          <div className='register_inputfield'>
            <div className='register_first_component'>
              <div className='register_second_component'>
                <span>{t('login:ID')}</span>
              </div>
              <input ref={userid} value={id} tabIndex={1} />
            </div>
            <div className='register_first_component'>
              <div className='register_second_component'>
                <span>{t('login:PW')}</span>
              </div>
              <input ref={password} value={pw} type="password" tabIndex={2} />
            </div>
          </div>
          <div className='register_first_component_etc'>
            <button onClick={onSubmit}>{t('login:login')}</button>
          </div>
          <div className="linkbox">
            <Link to={"/KNUT_webchat_frontend/regist/"}>
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default login
