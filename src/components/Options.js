import React from 'react';
import './Options.css'

function Options() {
    return (
        <div style={{paddingTop:'100PX'}} className='options'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='content'>
                           <i className='fab  fa-soundcloud fa-4x' />
                            <h1>free dawnload</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='content'>
                            <i className='fas fa-user-slash fa-4x' />
                            <h1>No Sign-Up Required</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='content'>
                            <i className='fas fa-video fa-4x' />
                            <h1>full hd (4k)</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
