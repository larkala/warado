import { useState } from 'react';
import './LoginComponent.css';

function LoginComponent(props:any) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function signIn () {
    console.log(userName);
    console.log(password);
    props.setLoggedIn(true);
  }

  return (
  <div className='main'>
    <img src='' width='120' height='120'></img>
    
    <div className='input-field-div'>
    <label className='input-field-label' htmlFor='name'>username</label>
    <input 
    className='input-field' 
    id='name' 
    type='text'
    value={userName}
    onChange={(e) => setUserName(e.target.value)}>
    </input>
    </div>
    
    <div className='input-field-div'>
    <label className='input-field-label'htmlFor='password'>password</label>
    <input 
    className='input-field' 
    id='password' 
    type='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}></input>
    </div>

    <button className='pink-button' onClick={signIn}>SIGN IN</button>
  </div>
  );
}

export default LoginComponent;