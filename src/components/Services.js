import React from 'react'
import './Services.css'
function Services() {
    return (
        <div   style={{paddingTop:'200PX'}} className='services'>
            <div className='container'>
            <h1 className='heading'>services</h1>

                <div className='row'>
                    <div className='col-4 content'>
                        <h3>Our services</h3>
                        <p>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia

                        </p>
                        <button>more</button>
                    </div>
                    <div className='col-8 app-services-icons'>

                    <div className='services-icons'>
                        <img className=' img-thumbnail' src='http://simpleicon.com/wp-content/uploads/new.png' />
                        <h4>new movies</h4>
                        <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                    </div>
                    <div className='services-icons'>
                        <img className=' img-thumbnail' src='https://icon-library.com/images/free-tag-icon/free-tag-icon-22.jpg' />
                        <h4>all free</h4>
                        <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                    </div>
                    <div className='services-icons'>
                        <img className=' img-thumbnail' src='https://media.istockphoto.com/photos/4k-ultra-hd-icon-picture-id512631960' />
                        <h4>full hd</h4>
                        <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                    </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services
