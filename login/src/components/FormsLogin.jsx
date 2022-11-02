import '../assets/styles/formLogin.css'
import '../assets/styles/atomsTextInput.css'
import { useState } from 'react';


function LoginForm() {

    const URI = 'http://44.201.115.90/'
    const validateRout = 'user/usernameValidate/'

    const [Name, setName] = useState("")
    const [Lastname, setLastame] = useState("")
    const [Username, setUsername] = useState("")
    const [Pwd, setPwd] = useState("")

    const validateUserName = () => {
        fetch(`${URI}${validateRout}${Username}`).then((info)=>{info.json()}).then((data)=>{console.log(data)});
    }

    const createUser = (e) => {
        event.preventDefault();
        const headersReq = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        const bodyReq = JSON.stringify({name: Name, lastname: Lastname, username: Username, password: Pwd})

        console.log(bodyReq)
    }

    return (
        <form className='loginForm' onSubmit={createUser}>
            <h1 className='titleForm'>Login</h1>

            <label htmlFor="name" className="labelInp">Name</label>
            <input id='name' className='loginInp' onChange={(e) => { setName(e.target.value) }} type='text'></input>

            <label htmlFor="lastname" className="labelInp">Lastname</label>
            <input id='lastname' onChange={(e) => { setLastame(e.target.value) }} className='loginInp' type='text'></input>

            <label htmlFor="username" className="labelInp">Username</label>
            <input onBlur={validateUserName} id='username' className='loginInp' onChange={(e) => { setUsername(e.target.value) }} type='text'></input>

            <label htmlFor="password" className="labelInp">Password</label>
            <input id='password' className='loginInp' onChange={(e) => { setPwd(e.target.value) }} type='password'></input>

            <button className='login-btn' type='submit'>Enviar</button>
        </form>
    );
}

export default LoginForm;