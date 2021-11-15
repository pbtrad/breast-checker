import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="container">
            {/* <!-- Welcome message --> */}
            <h1 className="text-center my-5">Register</h1>
            <p className="text-center my-5">Welcome to BreastChecker
                <br/>
                Make breast health part of your routine
                <br/>
                by scheduling and performing monthly self-checks
                <br/>
                Register below to create a profile and get monthly
                <br/>
                breast check reminders
            </p>

            {/* <!-- Registration --> */}
            <div className="text-center">
                    <a className="btn text-center border px-4" href="https://breast-check-api.herokuapp.com/rest-auth/registration/" target="_blank">
                    <i className="fab fa-google"></i> Register</a>

            </div>

            {/* <!-- Link to Sign In page --> */}
            <h5 className="text-center mt-5 mb-2">Already registered?</h5>
            <div className="text-center">
                <Link to='/login'>
                <p className="text-center">Sign in</p>
                </Link>
                
            </div>
        </div>
    )
}

export default Register;