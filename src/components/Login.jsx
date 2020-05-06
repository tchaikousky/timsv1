import React from 'react';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const history = useHistory();

    async function handleLogin() {
        // e.preventDefault();
        const userName = document.getElementById('userName');
        const password = document.getElementById('password');
        const loginText = document.getElementById('loginText')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName: userName.value, password: password.value})
        }

        const response = await fetch('http://localhost:4000/users/login', requestOptions);
        const data = await response.json();
        if(data === 'Unauthorized') {
            userName.value = "";
            password.value = "";
            loginText.innerHTML = 'Username and/or Password is incorrect!'
            
        } else {
            props.action(data);
            history.push("/dashboard");
        }
        console.log(data);
        // console.log(JSON.parse(data));
    }

    return (
   
        <div className="login-signup">
            <h1>Login</h1>
            <p id="loginText"></p>  
            <form className="login-form">
                <label>Username: <input type="text" id="userName"></input></label>
                <label>Password: <input type="password" id="password"></input></label>
            </form>
            <div className="login-button">
                <button type="submit" onClick={handleLogin} className="any-button">Login</button>
            </div>
        </div>
        
    )
}

export default Login