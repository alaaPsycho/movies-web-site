import react from 'react'
import './Stats.css'

function Stats(){
    return(
        <div style={{paddingTop:'100PX'}} className='stats text-center'>
            <div className='container stats-container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-3 stats-box'>
                        <i className='fas fa-user fa-fw fa-5x'></i>
                        <span>624</span>
                        <p>happy clients</p>
                    </div>
                    <div className='col-sm-6 col-lg-3 stats-box'>
                        <i className='fas fa-external-link-alt fa-fw fa-5x'></i>
                        <span>724</span>
                        <p>new movies</p>
                    </div>
                    <div className='col-sm-6 col-lg-3 stats-box'>
                        <i className='fas fa-film fa-fw fa-5x'></i>
                        <span>1456</span>
                        <p>all movies</p>
                    </div>
                    <div className='col-sm-6 col-lg-3 stats-box'>
                        <i className='fas fa-comments fa-fw fa-5x'></i>
                        <span>124</span>
                        <p>question answed</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats;