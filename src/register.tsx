import { useState } from 'react';
import axios from "axios";

function register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const port = 4300;
    e.preventDefault();
    const id = e.currentTarget.userid.value;
    const pw = e.currentTarget.password.value;
    fetch(`http://localhost:${port}/regist`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        id,
        pw
      })
    })
  }
  return (
    <div>
      <h1>Sign_Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Id:
            <input type="text" name="userid" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default register;
