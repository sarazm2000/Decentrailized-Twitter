import React from "react";

const Login = () => {
    return (
        <div className="form-container">
            <form>
                <label for="username">username</label><br />
                <input type="text" id="username" /><br />
                <label for="email">email</label><br />
                <input type="email" id="email" /><br />
                <label for="password">password</label><br />
                <input type="password" id="password" /><br />
            </form>
            <a>forgot your password?</a><br></br>
            <a>don't have an account?</a>
        </div>
    );
}

export default Login;