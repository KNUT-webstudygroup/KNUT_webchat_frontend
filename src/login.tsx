import { useState,useRef } from 'react'
import axios from 'axios'


function login() {
  const userid = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  let id;
  let pw;
  const port = 3000;

  const onSubmit = async (e:any) => {
    e.preventDefault(); // form은 이벤트를 만나면 자돌으로 새로고침 하는 성질이 있어서 이걸 넣어줘야해요 !
    console.log("로그인 시도 중...!");
    let id2 = userid?.current?.value
    let pw2 = password?.current?.value
    if (!id2){alert("Please enter your ID!")}
    else if (!pw2){alert("Please enter your PW!")}
    await axios
    .post(`http://localhost:${port}/login`, {
      id: id2,
      pw: pw2,
    })
  .then((response:any) => {
    // id, pw 일치했다고 가정하고 true 받아옴
    if (response.data.key === true) {
      console.log(response.data);
      console.log("로그인 완료!");
    } else {
      console.log("아이디, 비밀번호가 일치하지 않습니다.");
    }
  })
  .catch((err:any) => {
    console.log("로그인 실패" + err);
  });
};

    return (
<form onSubmit={()=>{return false}}>
    <div>
        <span>아이디</span>
        <input ref={userid} value={id} tabIndex={1} placeholder="UserID" />
      </div>
      <div>
        <span>비밀번호</span>
        <input ref={password} value={pw} type="password" tabIndex={2}  placeholder="Password"/>
      </div>
     <button onClick={onSubmit}>로그인</button>
</form>
    )
}

export default login