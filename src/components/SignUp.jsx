import React from 'react';
import { useHistory } from 'react-router-dom';

function SignUp(props) {
    const history = useHistory();

    async function handleSignUp(e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const userName = document.getElementById('userName');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const loginText = document.getElementById('loginText')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName: userName.value, password: password.value, firstName: firstName.value, lastName: lastName.value, email: email.value})
        }

        if(password.value !== confirmPassword.value) {
            loginText.innerHTML = 'Passwords do not match';
            password.value = "";
            confirmPassword.value = "";
        }else if(userName.value.length === 0 || firstName.value.length === 0 || lastName.value.length === 0 || email.value.length === 0 || password.value.length === 0) {
            loginText.innerHTML = 'All fields are required'
        }else {
            const response = await fetch('https://timsapi.herokuapp.com/users/signup', requestOptions);
            const data = await response.json();
            if(data === userName.value + ' is already in use!') {
                userName.value = "";
                password.value = "";
                confirmPassword.value = "";
                loginText.innerHTML = 'Username is already in use!'
                
            } else if(data === email.value + ' is already in use!'){
                userName.value = "";
                password.value = "";
                email.value = "";
                confirmPassword.value = "";
                loginText.innerHTML = 'Email is already in use!'
            }else {
                // props.action(data);
                history.push("/login");
            }
            console.log(data);
            // console.log(JSON.parse(data));
        }
    }

    return (
        <div className="login-signup" style={{cursor: "pointer"}}>
            <h1>Sign Up</h1>
            <p id="loginText"></p>  
            <form className="login-form">
                <label>First Name: <input type="text" id="firstName"></input></label>
                <label>Last Name: <input type="text" id="lastName"></input></label>
                <label>Email: <input type="text" id="email"></input></label>
                <label>Username: <input type="text" id="userName"></input></label>
                <label>Password: <input type="password" id="password"></input></label>
                <label>Re-Enter Password: <input type="password" id="confirmPassword"></input></label>
            </form>
            <div className="login-button" style={{cursor: 'pointer'}}>
                <button type="submit" onClick={handleSignUp} className="any-button" style={{cursor:"pointer"}}>Login</button>
            </div>
        </div>
    )
}

export default SignUp;