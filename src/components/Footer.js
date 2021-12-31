import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 icons'>
                    <a href='https://www.facebook.com/alaa.edin.1004'><i class="fab fa-facebook fa-2x"></i></a>
                    <a href='https://alaaedine62@gmail.com'><i class="fab fa-google fa-2x"></i></a>
                    <a href='https://github.com/taharAlaa'><i class="fab fa-github fa-2x"></i></a>
                    <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>

                    </div>
                    <div className='col-lg-12 subscribe'>
                        <p>Sign up for our web site :</p>
                        <input type='text' placeholder='email adress'/>
                        <button>subscribe</button>
                    </div>
                    <div className='col-lg-4 links'>
                        <h3>links</h3>
                        <a href='/'><i className='fas fa-home'></i> home</a>
                        <a href='/about'><i className='fas fa-address-card'></i> about</a>
                        <a href='/sign-up'><i className='fas fa-user-plus'></i> sign-up</a>
                    </div>

                    <div className='col-lg-4 contact'>
                        <h3>contact us</h3>
                        <a href='#'><i className='fas fa-map-marker-alt'></i>  algeria(chlef)</a>
                        <a href='#'><i className='fas fa-phone'></i>  027753696</a>
                        <a href='#'><i className='far fa-envelope'></i>   alaaedine62@gmail.com</a>
                    </div>

                    <div className='col-lg-4 about'>
                        <h3>about me</h3>
                        <img src='https://image.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148218046.jpg' />
                        <p>I am a front end developer with these skills: 
                       <span> vanilla-js jquery react-js  vue-js bootstrap php mysql</span> 
                                                                </p>
                    </div>
                    <div className='col-lg-12 copy-right'>
                     <p>created by <span>alaa tahar </span>| all right reserved&copy;</p>
                    </div>


                </div>
            </div>
           
        </div>
    )
}

export default Footer
