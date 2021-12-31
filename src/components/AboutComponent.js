import React from 'react'
import './About.css'
function AboutComponent() {
    return (
        <div className='about-component'>
            <div className='container'>
                <h1 className='heading'>about us</h1>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h3>what we do</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia
                           </p>
                           <button>more about us</button>
                    </div>
                    <div className='col-lg-8'>
                        <img src='https://wallpaperaccess.com/full/1393401.jpg' />
                        </div>
                </div>

            </div>
        </div>
    )
}

export default AboutComponent
//http://massiveedu.com/wp-content/uploads/2020/10/technology-wallpapers-hd-20141.jpg