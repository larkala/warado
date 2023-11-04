import { useState } from 'react';
import './LoginComponent.css';

function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function signIn () {
    console.log(userName);
    console.log(password);
  }

  return (
  <div className='main'>
    <h1>WARADO</h1>
    <img src='' width='120' height='120'></img>
    
    <div className='input-field-div'>
    <label className='input-field-label' htmlFor='name'>username</label>
    <input className='input-field' id='name' type='text'></input>
    </div>
    
    <div className='input-field-div'>
    <label className='input-field-label'htmlFor='password'>password</label>
    <input className='input-field' id='password' type='password'></input>
    </div>

    <button className='pink-button' onClick={signIn}>SIGN IN</button>
  </div>
  );
}

export default LoginComponent;