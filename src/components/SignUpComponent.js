import React from 'react'
import '../components/SignUp.css'
function SignUpComponent() {
    return (
        <div>
                    <div className='sign-up-component'>
            <div className='container'>
                <h1 className='heading'>Registration</h1>
                <div className='row'>
                    <div className='col-lg-8 form-up'>
                        <form className=''> 
                        <p>Sign up to receive all new</p>
                        <div className='app-icon'>
                            <div className='child-icon'>
                                <i className='fab fa-google '></i> <span>sign up with google</span>
                            </div>
                            <div className='child-icon'>
                            <i className='fab fa-facebook'></i>  <span>sign up with facebook</span>

                            </div>

                        </div>
                            <div className='app-input'>
                            <input type="text" placeholder='your name' /></div>
                            <div className='app-input'><input type="text" placeholder='your last name' /></div>
                            <div className='app-input'><input type="email" placeholder='your email' /></div>
                            <div className='app-input'><input type="password" placeholder='your password' /></div>
                            <div className='app-input'><input type="password" placeholder='enter your password again'/></div>
                            <button>create an account</button>
                            <p>already have an account ?<a href='#'>sign in</a></p>
                        </form>
                       
                    </div>


                    <div className='col-lg-4 form-up'>
                        <img src='https://i.pinimg.com/originals/e3/b9/a9/e3b9a9835ee78f28cb36a399c93be2c6.png' />

                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default SignUpComponent
