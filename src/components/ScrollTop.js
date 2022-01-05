import React,{useEffect} from 'react'
import $ from 'jquery'

import './ScrollTop.css'

function ScrollTop() {
    useEffect(()=>{

        if($(window).scrollTop() >= 1600){
            $('.scroll-top').show(600)
        }else{
            $('.scroll-top').hide(400)
        }
    
        $('.scroll-top').on('click',function(){
            $('html,body').animate({
                scrollTop : 0
            })
        })
    },[])


    return (
        <div>
            <div className='scroll-top'>
                <i  className='fas fa-arrow-up fa-3x' />
            </div>
        </div>
    )
}

export default ScrollTop
