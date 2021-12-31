import React from 'react'
import './Slider.css'
function Slider() {
    return (
        <div  style={{paddingTop:'200PX'}} className='container slider'>
          <h1 className='heading'>soon</h1>
            <div id="carouselExampleCaptions" data-bs-interval='300' class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>

  </div>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/scream-5-poster-social.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Scream</h5>
        <p>Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.deeperblue.com/wp-content/uploads/2017/12/Avatar-2-What-We-Know.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Avatar 2</h5>
        <p>Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/11/the-matrix-4-resurrections-poster.jpeg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>matrix 4</h5>
        <p>To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion, is still the only way out of -- or into -- the Matrix. Neo already knows what he has to do, bu… MORE</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.mos.cms.futurecdn.net/BTAy2FfPPxWsb2ixr75VTh-1200-80.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>The Batman</h5>
        <p>The Riddler plays a dangerous game of cat and mouse with Batman and Commissioner Gordon in Gotham City.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/6-G39n2sCVU/maxresdefault.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>You Won't Be Alone</h5>
        <p>In 19th-century Macedonia, a young girl is kidnapped and then transformed into a witch by an ancient spirit. Curious about life as a human, the witch accidentally kills a peasant in the nearby village and then takes her victim's shape to live life in her skin. Her curiosity ignited, she continues to… MORE</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/HwXdnhoV_nM/maxresdefault.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Jurassic World: Dominion</h5>
        <p>Third instalment of the Jurassic World franchise. Worldwide release date: june 2022.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/12/Ambulance-Movie-Poster-Crop.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Ambulance</h5>
        <p>Needing money to cover his wife's medical bills, a decorated veteran teams up with his adoptive brother to steal $32 million from a Los Angeles bank. However, when their getaway goes spectacularly wrong, the desperate thieves hijack an ambulance that's carrying a severely wounded cop and an EMT work… MORE</p>
      </div>
    </div>


   

    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/ocT9VCxuAYU/maxresdefault.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Halloween Ends</h5>
        <p>The saga of Michael Myers and Laurie Strode comes to an end.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://45secondes.fr/wp-content/uploads/2021/06/La-nouvelle-featurette-de-Loki-accueille-Owen-Wilson-dans-le.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Secret Headquarters</h5>
        <p>A kid discovers the secret headquarters of a powerful superhero hidden beneath his home and must defend it with his group of friends when villains attack.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://zoopnewz.com/wp-content/uploads/2021/03/The-Adam-Project-Featured.jpg" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>The Adam Project</h5>
        <p>The Adam Project is an upcoming American science fiction film directed by Shawn Levy and written by Jonathan Tropper, T.S. Nowlin, Jennifer Flackett and Mark Levin. It stars Ryan Reynolds, Jennifer Garner, Zoe Saldana, Mark Ruffalo, Catherine Keener, and Walker Scobell. Wikipedia</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
}

export default Slider
