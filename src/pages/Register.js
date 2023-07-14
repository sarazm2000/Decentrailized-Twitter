import React from "react";

const Register = () => {
    return (
        <div className="form-container">
            <h2 className="from-title">sign up</h2>
            <form className="register-form">
                <label for="username">username</label><br />
                <input type="text" id="username" /><br />
                <label for="email">email</label><br />
                <input type="email" id="email" /><br />
                <label for="password">password</label><br />
                <input type="password" id="password" /><br />
            </form>
            <a className="form-link" href="#">forgot your password?</a><br></br>
            <a className="form-link" href="#">don't have an account?</a>
        </div>
    );
}

export default Register;