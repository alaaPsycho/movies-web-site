import React,{useEffect} from 'react';
import './Trailer.css';
import $ from 'jquery';
function Trailer() {

    useEffect(() => {

    
    
  
    }, [])
    return (
        <div  style={{paddingTop:'200PX'}}  className='trailer'>
            <div className='container'>
            <h1 className='heading'>trailers</h1>
                <div className='row'>
                  
                   <div className='col-sm-12 '>
                       <h1 className='d-flex justify-content-center'>matrix</h1>
                   <iframe  width="400" height="315" src="https://www.youtube.com/embed/nNpvWBuTfrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   </div>

                   <div className='col-sm-12 d-flex justify-content-between'>
                        <div className='content'>
                            <p>The Matrix Resurrections – Official Trailer 2</p>
                            <p>14,038,798 views Dec 6, 2021</p>
                        </div>
                        <div className='icons'>
                        <i class="far fa-thumbs-up"></i><span>112K</span>
                        <i class="far fa-thumbs-down"></i><span>deslike</span>
                        <i class="fas fa-share"></i><span>share</span>
                        <i class="fas fa-share-square"></i><span>save</span>
                        <i class="far fa-flag"></i><span>report</span>
                        </div>

                   </div>
        <hr></hr>

                   <div className='col-sm-12 '>
                       <h1 className='d-flex justify-content-center'>batman</h1>
                   <iframe width="400" height="315" src="https://www.youtube.com/embed/g5zFRJlFK4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                   <div className='col-sm-12 d-flex justify-content-between'>
                        <div className='content'>
                            <p>'The Batman' Official Trailer No. 2</p>
                            <p>8,957 views Dec 28, 2021</p>
                        </div>
                        <div className='icons'>
                        <i class="far fa-thumbs-up"></i><span>3</span>
                        <i class="far fa-thumbs-down"></i><span>deslike</span>
                        <i class="fas fa-share"></i><span>share</span>
                        <i class="fas fa-share-square"></i><span>save</span>
                        <i class="far fa-flag"></i><span>report</span>

                        </div>

                   </div>
          <hr></hr>
          <div className='col-sm-12 '>
                       <h1 className='d-flex justify-content-center'>batman</h1>
                       <iframe width="400" height="315" src="https://www.youtube.com/embed/beToTslH17s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   </div>
          <div className='col-sm-12 d-flex justify-content-between'>
                        <div className='content'>
                            <p>Scream | Official Trailer (2022 Movie)</p>
                            <p>17,258,462 views Oct 12, 2021</p>
                        </div>
                        <div className='icons'>
                        <i class="far fa-thumbs-up"></i><span>120K</span>
                        <i class="far fa-thumbs-down"></i><span>deslike</span>
                        <i class="fas fa-share"></i><span>share</span>
                        <i class="fas fa-share-square"></i><span>save</span>
                        <i class="far fa-flag"></i><span>report</span>
                        </div>
                        
                   </div>

            

                   </div>
            </div>
        </div>
       
        
    )
}

export default Trailer
