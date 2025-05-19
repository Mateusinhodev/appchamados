import './signin.css'

import { useState } from 'react';

import logo from '../../assets/react.svg'

import { Link } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="Logo do Sistema de Chamados" />
                </div>

                <form>
                    <h1>Entrar</h1>
                    <input 
                        type="text" 
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                    />

                    <input 
                        type="password" 
                        placeholder='********'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                    />

                    <button type='submit'>Acessar</button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}

export default SignIn;