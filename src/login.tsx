import { useState,useRef } from "react";
import axios from "axios";
import isRealServer from './logics'
import { useTranslation } from 'react-i18next'
import i18n from "i18next";


const port = 4300;

function login() {
  
  const {t} = useTranslation(['login'])
  const userid = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  let id;
  let pw;
  const port = 3000;

  const onSubmit = async (e:any) => {
    e.preventDefault(); // form은 이벤트를 만나면 자돌으로 새로고침 하는 성질이 있어서 이걸 넣어줘야해요 !
    console.log(t('login:tryinglogin'));
    console.log(isRealServer())
    let id2 = userid?.current?.value
    let pw2 = password?.current?.value
    if (!id2){alert("Please enter your ID!")}
    else if (!pw2){alert("Please enter your PW!")}
    await axios
   .post(`http://localhost:${port}/login`, {
        id: id2,
        pw: pw2,
      })
      .then((response) => {
        // id, pw 일치했다고 가정하고 true 받아옴
        if (response.data.key === true) {
          console.log(response.data);
          console.log(t('login:suc'));
        } else {
          console.log(t('login:faildesc'));
        }
      })
      .catch((err) => {
        console.log(t('login:fail'))
      }
    )
  };
  
  return (
    <form>
        <div>
            <span>{t('login:ID')}</span>
            <input ref={userid} value={id} tabIndex={1} placeholder={t('login:ID').toString()} />
          </div>
          <div>
            <span>{t('login:PW')}</span>
            <input ref={password} value={pw} type="password" tabIndex={2}  placeholder={t('login:PW').toString()}/>
          </div>
        <button onClick={onSubmit}>{t('login:ID')}</button>
    </form>
  )
}
  

export default login
