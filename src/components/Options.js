import React,{useEffect} from 'react';
import './Options.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Options() {

    useEffect(() => {
     Aos.init({duration:2000})
    }, [])
    return (
        <div style={{paddingTop:'100PX'}} className='options'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='content'>
                           <i data-aos="zoom-in" className='fab  fa-soundcloud fa-4x' />
                            <h1 data-aos="zoom-in">free dawnload</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='content'>
                            <i data-aos="zoom-in" className='fas fa-user-slash fa-4x' />
                            <h1 data-aos="zoom-in">No Sign-Up Required</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='content'>
                            <i data-aos="zoom-in" className='fas fa-video fa-4x' />
                            <h1 data-aos="zoom-in">full hd (4k)</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
