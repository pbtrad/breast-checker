import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container">
            {/* Sign in  */}
            <h1 className="text-center my-5">Sign In</h1>

            <div className="text-center">
                <Link to='/login'>
                    <p className="btn text-center border px-4">
                    <i className="fab fa-google"></i> Sign In</p>
                </Link>
            </div>

            {/* Link to registration page */}
            <h5 className="text-center mt-5 mb-2">Don't have an account?</h5>
            <div className="text-center">
                <Link to='/register'>
                    <p className="text-center">Register</p>
                </Link>
            </div>
        </div>
    )
}

export default Login;
