import React,{useEffect} from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
function Hero() {
    useEffect(() => {

    }, [])
    return (

        <div className='carouselApp'>
          <div  className='overlay'>
          <div className='content'>
            
            <h1>best movies</h1><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
            <button>more movies</button>
            </div>
            </div>

<div id="carouselExampleIndicators"  data-bs-interval="50"  class="carousel slide  heroCarousel" data-bs-ride="carousel">
  <div class="carousel-indicators" id='indicats'>
    <button  id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
    <button id='indicat' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>


  </div>
  <div class="carousel-inner" id='carousel-inner'>
    <div class="carousel-item active" >
      <img src="https://images4.alphacoders.com/118/thumb-1920-1185748.jpg" class="d-block w-100 img-responsive" alt="..."/>
    </div>
    <div class="carousel-item " >
      <img src="https://wallpaper.dog/large/10915262.jpg" class="d-block w-100 img-responsive" alt="..."/>
    </div>

    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/6366.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://wallpapercave.com/wp/wp1869905.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.pixelstalk.net/wp-content/uploads/2015/12/Batman-cover-movie-twitter-background-tvshows-movies-wallpaper.jpg" class="d-block w-100" alt="..."/>
    </div>
 

    <div class="carousel-item">
      <img src="https://wallpaper.dog/large/20493435.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/1077150.jpg" class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item">
      <img src="https://wallpapercave.com/wp/wp3982534.jpg" class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/655207.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://wallpaper.dog/large/20379186.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/1342438.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://me2t.com/wp-content/uploads/2021/07/3d-animation-movies-wallpaper-inspirational-3d-movies-anime-wallpapers-wallpaper-cave-of-3d-animation-movies-wallpaper.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

        </div>
    )
}

export default Hero
