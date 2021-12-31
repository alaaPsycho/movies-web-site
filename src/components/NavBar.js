import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import './NavBar.css'
function NavBar() {


    useEffect(() => {
       $('.app-link i').on('click',function(){
        $('.app-link i').removeClass('active')
        $(this).addClass('active');
       
    })
    }, [])
    return (
        <>
            <nav className='navBar navbar-fixed-top'>
        
                <div className='boxApp'>
                    <div className='navBar-brand'>
                        <Link style={{color:'#e91e63'}} to={'/'}><i class="fas fa-film"> movies</i></Link> 
                    </div>
                    <div className='app-input'>
                            <i className='fas fa-search '></i>
                            <input className='fas fa-search' type='search'  placeholder=' search movie'/> <i className='fas fa-microphone-alt  '/>
                        
                    </div>
                    <div className='app-link'>
                    
                  
                  <Link exact to={'/'} title='home'><i className='fas fa-home fa-2x active'></i></Link>
                  <Link exact to={'/about'} title='about'><i className='fas fa-address-card fa-2x '></i></Link>
                  <Link exact to={'/sign-up'} title='sign up'><i className='fas fa-user-plus fa-2x'></i></Link>

                    </div>

                </div>
            
            </nav>
        </>
    )
}

export default NavBar
