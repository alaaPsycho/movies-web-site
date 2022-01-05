import React from 'react'
import Hero from '../components/Hero'
import Options from '../components/Options'
import Cards from '../components/Cards'
import ShuffleImg from '../components/ShuffleImg'
import Slider from '../components/Slider'
import Trailer from '../components/Trailer'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Stats from '../components/Stats'
import Offers from '../components/Offers'
import ScrollTop from '../components/ScrollTop'
function home() {
    return (
        <div>
            <Hero />
            <Options />
            <Cards />
            <ShuffleImg />
            <Slider />
            <Trailer />
            <Services />
            <ContactUs />
            <Stats />
            <Offers />
            <ScrollTop />
        

        </div>
    )
}

export default home
