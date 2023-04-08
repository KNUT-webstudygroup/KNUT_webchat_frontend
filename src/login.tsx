import { useState } from "react";
import axios from "axios";

const port = 4300;

function login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = async () => {
    console.log("로그인 시도 중...!");

    await axios
      .post(`http://localhost:${port}/login`, {
        id: id,
        pw: pw,
      })
      .then((response) => {
        // id, pw 일치했다고 가정하고 true 받아옴
        if (response.data.key === true) {
          console.log(response.data);
          console.log("로그인 완료!");
        } else {
          console.log("아이디, 비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((err) => {
        console.log("로그인 실패" + err);
      });
  };

  return (
    {process.env.IS_REAL_SERVER}
    <div>
      <div>
        <span>아이디</span>
        <input onChange={(event) => setId(event.target.value)} value={id} />
      </div>
      <div>
        <span>비밀번호</span>
        <input onChange={(event) => setPw(event.target.value)} value={pw} />
      </div>
      <button onClick={onSubmit}>로그인</button>
    </div>
  );
}

export default login;
