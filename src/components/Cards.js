import React from 'react';
import Card from './Card'
import './Cards.css'
function Cards() {
    let imgs = ['https://m.media-amazon.com/images/M/MV5BZWI3NmEyYzAtNWY4OC00YWY4LTk2MjgtM2Y1NDdlZWE4ODgzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg','https://i1.wp.com/www.soundtrackradar.com/wp-content/uploads/Sweetgirl.jpg?fit=700%2C581&ssl=1',
    'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbR-nSp2Yb60VN2KH-T2Q0waTmBY8xNlVrdaMj-ogKxkqtDI--frpa7Sn_LRnaT0EmYb-KIAh3--aj9ngy2MhAENI-Ul.jpg?r=afe',
    'https://images-na.ssl-images-amazon.com/images/I/81LSKRDU40L._RI_.jpg','https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
            'https://i2.wp.com/www.theilluminerdi.com/wp-content/uploads/2021/10/Army-of-Thieves-Cast.jpg',
            'https://cdn.vox-cdn.com/thumbor/pXRN9v-_T0b8kj0do7ooXDUCuh8=/0x0:6240x4160/1200x675/filters:focal(2621x1581:3619x2579)/cdn.vox-cdn.com/uploads/chorus_image/image/70252129/UNF_UNIT_025.0.jpg',
            'https://i.ytimg.com/vi/rGygt-ZgU7A/maxresdefault.jpg'
        ]
   
    return (
       
          <div style={{paddingTop:'200PX'}} className='container cards'>
              <h1 className='heading'>last</h1>
              <div className='row mx-auto'>
         
         
           <Card src={imgs[0]} title='The Guilty' text='A troubled police detective demoted to 911 operator duty scrambles to save a distressed caller during a harrowing day of revelations -- and reckonings.'/>
           <Card src={imgs[1]} title='Sweet Girl' text='A man vows to bring justice to those responsible for his wifes death while protecting the only family he has left  his daughter'/>
           <Card src={imgs[2]} title='Red Notice' text='In the world of international crime, an Interpol agent attempts to hunt down and capture the worlds most wanted art thief.'/>
           <Card src={imgs[3]} title='Encounter' text='A decorated Marine goes on a rescue mission to save his two young sons from a mysterious threat. As their journey takes them in increasingly dangerous directions,'/>
           <Card src={imgs[4]} title='The Tomorrow War' text='When a group of time travellers from the future tell people about a war they are fighting with aliens, Dan, a school teacher, decides to help them win it in order to secure his daughters future.'/>
           <Card src={imgs[5]} title='Army of Thieves' text='In this prequel to "Army of the Dead," a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.'/>
           <Card src={imgs[6]} title='The Unforgivable' text='Ruth Slater, a woman released from prison after serving a sentence for a violent crime and attempts to re-enter society. She must try to put her life back together again in a world that refuses to forgive her past.'/>
           <Card src={imgs[7]} title='The Unforgivable' text='An influencer who specializes in makeovers bets that she can transform an unpopular classmate into a prom king.'/>

           

            </div>
            </div>
            
    )
}

export default Cards
