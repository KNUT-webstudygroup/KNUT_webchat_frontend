import { useState } from "react";
import axios from "axios";
import isRealServer from './logics'
import { useTranslation } from 'react-i18next'
import i18n from "i18next";


const port = 4300;

function login() {
  const {t} = useTranslation(['login'])
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  
  const onSubmit = async (e:any|Event) => {
    console.log(t('login:tryinglogin'));
    console.log(isRealServer())
    e.stopPropagation();
    e.preventDefault();
    await axios
      .post(`http://localhost:${port}/login`, {
        id: id,
        pw: pw,
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
        console.log(t('login:fail') + err);
      }); 
      
  };
  return (
    <form>
      <div>
        <span>{t('login:ID')}</span>
        <input onChange={(event) => {setId(event.target.value);}} value={id} />
      </div>
      <div>
        <span>{t('login:PW')}</span>
        <input onChange={(event) => setPw(event.target.value)} value={pw} />
      </div>
      <button onClick={onSubmit}>{t('login:login')}</button>
    </form>
  );
}

export default login;
