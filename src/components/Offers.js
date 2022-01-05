import React from 'react';
import './Offers.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
function Info() {
    return (
        <div className='offers'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='content'>
                        <h1>use, watch all new movies</h1>
                        
                        <p>Take the music separation process to the next level and utilize the almighty power of machine learning. Our powerful ai-based vocal remover can remove vocals from any song, no matter how complexed the musical composition is.</p>
                        <p>Get clean acapella and instrumental tracks today:</p>
                        <button>see pricing</button>
                    </div>
                </div>
                <div className='col-lg-2'></div>

                <div className='col-lg-4'>
                    <div className='img-container'>
                        <img data-aos='fade-in' src='https://parade.com/wp-content/uploads/2019/06/SOUL.png'/>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Info
