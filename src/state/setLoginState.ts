import { useEffect, useState } from "react";
import { useRecoilStateLoadable } from "recoil";
import { loginedStateSetter,port } from "../states";
import axios from "axios";
import i18n from "i18next";
import { useTranslation } from 'react-i18next'

export const setLoginState = () => {
  const [state, setRecoilState] = useState(false);
  const [state_, setState_ ] =
    useRecoilStateLoadable(loginedStateSetter);

  useEffect(() => {
    if(state_.state==="hasValue") setRecoilState(state_.contents)
  }, [state_]);
  const {t} = useTranslation(['login']) // t는 번역을 위한 함수(i18n 폴더에 en/ko ver. 문구 정리되어 있음!)

  const setState = async (id2:string,pw:string) => {
		console.log('kk')
		await axios
      .post(`http://localhost:${port}/login`, { // '/login'으로 ID와 PW를 담은 객체를 post 방식으로 전송
        id: id2,
        pw: pw,
      })
      .then(async(response:any) => { // 서버에서 온 응답
        // id, pw 일치했다고 가정하고 true 받아옴
        if (response.data.result === true) { // 로그인 성공
          console.log(response.data);
          //await b(true);
          //cookie.save('sid',)
          //setState(true)
          setState_(true);
					console.log(t('login:suc'));

          //return(<Navigate to={"/KNUT_webchat_frontend/"}></Navigate >)// UUID가 없다면...  login page로 보내자.
        } else { // ID or PW가 일치하지 않아 로그인 실패
          console.log(t('login:faildesc'));
        }
      })
      .catch((err) => { // 로그인 실패
        console.log(t('login:fail') + ':' + err)
      }
      )
    
  };

  return { state, setState };
};


export default setLoginState;