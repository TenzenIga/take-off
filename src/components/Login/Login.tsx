import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const login = (): void =>{
        if(email && password){
            store.login();
            navigate('/', {replace: true})
        }
    }
    
    return (
        <div className="login">
            <div className="bg-image"></div>
            <div className="form-wrapper">
                <div className="heading">
                Simple Login Form
                </div>
                <form >
                    <div className="form-group">
                        <label>
                            Email
                        </label>
                        <input className="form-control" value={email}  type='email' onChange={e => setEmail(e.target.value)}  required />
                    </div>
                    <div className="form-group">
                        <label>
                            Пароль
                        </label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" required/>
                    </div>
                        <input type="submit" value="Войти" onClick={()=>login()} className="btn"  />
                </form>
            </div>
      </div>
    )
}

const LoginObserver = observer(Login)
export default LoginObserver;