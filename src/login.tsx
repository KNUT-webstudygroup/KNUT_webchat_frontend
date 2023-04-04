import { useState } from 'react'

function login() {
    const [id ,setId] = useState("")
    const [pw ,setPw] = useState("")
    
    return (
        <div>
            <div>
              <span>아이디</span>
              <input value={id}/>
            </div>
            <div>
              <span>비밀번호</span>
              <input value={pw}/>
            </div>
            <button>로그인</button>
        </div>
    )
}

export default login