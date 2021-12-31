import React from 'react'
import './ContactUs.css'
function ContactUs() {
    return (
        <div  className='contact-us'>
            <div className='container'>
                <h1>contact Us</h1>
                <p>Log in and contact us</p>
                <div className='row'>
                    <div className='col-lg-6'>
                        <form className='inputs'>
                        <div className='input-app'>    <i class="fas fa-user-secret fa-2x"></i>   <input type='text' placeholder='full name' /></div>
                         <div className='input-app'>    <i class="fas fa-at fa-2x"></i>   <input type='email' placeholder='email' /></div>
                         <div className='input-app'>  <i class="fas fa-unlock-alt fa-2x"></i> <input type='password' placeholder='password' /></div>

                        </form>
                    </div>

                    <div className='col-lg-6'>
                    <form className='textArea-app'>
                        <textarea placeholder='Send us your opinion on the site'></textarea>
                        <button>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
