import React from 'react'

function Card(props) {
    return (
          
            <div class="card col-3   pt-2 mx-2 my-2" style={{width: '18rem'}} >
  <img src={props.src} class="card-img-top img-thumbnail" style={{height:'200PX'}} alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" style={{background:'#e91e63',borderColor:'#e91e63'}} class="btn btn-primary text-center">watch  now</a>
  </div>
  </div>

    )
}

export default Card
