import React,{useEffect} from 'react'
import './ShuffleImg.css';
import $ from 'jquery'
function ShuffleImg() {

    useEffect(() => {
  

            
        $('ul li').on('click',function(){
            let shuffle = $(this).attr('data-movie');
            $(this).addClass('active').siblings().removeClass('active')

            if(shuffle == 'all'){
                $('.item').css('opacity','1')
                
            }else{
                $('.item ').not( shuffle).css('opacity','.1')
                $('.item').filter(shuffle).css('opacity','1')
            }
            
        });
        
             
        
    

    }, [])
    return (
        <div>
             
            <div  style={{paddingTop:'200PX'}} className='container shuffleImg'>
            <h1  className='heading'>catégorie</h1>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='buttons'>
                            <ul className='list-unstyled'>
                                <li data-movie="all"  className='active'>all</li>
                                <li data-movie=".horror">horror</li>
                                <li data-movie=".animation">animation</li>
                                <li data-movie=".comedy">comedy</li>
                                <li data-movie=".action">action</li>
                                <li data-movie=".advanture">advanture</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                    <div className='item horror'><img  src='https://i.ytimg.com/vi/vugbz9Oq-p4/maxresdefault.jpg' /></div>
                    <div className='item comedy'><img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WE-ijbLru-F56RzEPXl_8hv3kNTKu55A8AFtX3EI_cFEo6QHCN8vFw6DFmVVpGOQUfM&usqp=CAU' /></div>
                    <div className='item advanture'><img  src='https://www.virginballoonflights.co.uk/uploads/general/_large/The-Princess-Bride.jpg' /></div>
                    <div className='item horror'><img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQww6WilYWry__YRwMcUukwa-TYuDAIxdXcIXZmE3j1UJ8Ms_S0zd1zNIWjJvPUmySgIq0&usqp=CAU' /></div>
                    <div className='item animation'><img  src='https://marioncvb.com/wp-content/uploads/2019/10/73190179_10157691936473624_1394152152422678528_n.jpg' /></div>
                    <div className='item horror'><img  src='https://wickedhorror.com/wp-content/uploads/2019/07/oculus-cover-864x467.jpg' /></div>
                    <div className='item animation'><img  src='https://onthegoinmco.com/wp-content/uploads/2013/07/Despicable-Me-2-Minions.jpg' /></div>
                    <div className='item comedy'><img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEpGHuh99Qu1riAdcBXZRjMEHitgAH8_bIGMoZE9BGrvYVFEG2snzRZCTUhJEca22N9g&usqp=CAU' /></div>
                    <div className='item advanture'><img  src='https://w0.peakpx.com/wallpaper/1008/955/HD-wallpaper-lara-croft-lara-tomb-raider-reborn.jpg' /></div>
                    <div className='item action'><img  src='https://campusghanta.com/wp-content/uploads/2019/03/john-wick-2-movie-review.jpg' /></div>
                    <div className='item animation'><img  src='https://www.looper.com/img/gallery/the-real-reason-these-dreamworks-animation-movies-bombed/l-intro-1604519188.jpg' /></div>
                    <div className='item action'><img  src='https://lgi-img-cdn-lb.lionsgateplay.com/375w/LionsgateIndia/MILE22Y2018MEN/MILE22Y2018MEN-lgi-landscape-poster-1920X1080-PSTL.jpg' /></div>
                    <div className='item advanture'><img  src='https://hotnewshollywood.files.wordpress.com/2018/01/jumanji.jpg?w=616' /></div>
                    <div className='item animation'><img  src='https://images6.alphacoders.com/718/thumb-350-718943.jpg' /></div>
                    <div className='item comedy'><img  src='https://c4.wallpaperflare.com/wallpaper/6/89/121/a-haunted-house-2-2014-movie-wallpaper-preview.jpg' /></div>
                    <div className='item action'><img  src='https://i.pinimg.com/736x/85/b6/71/85b67158954f8f0527ac51a5c485af1e.jpg' /></div>
                    <div className='item advanture'><img  src='https://c4.wallpaperflare.com/wallpaper/502/667/786/movies-pirates-of-the-caribbean-on-stranger-tides-jack-sparrow-wallpaper-thumb.jpg' /></div>
                    <div className='item horror'><img  src='https://www.looper.com/img/gallery/rules-filmmakers-have-to-follow-when-making-a-scary-movie/l-intro-1628783387.jpg' /></div>
                    <div className='item action'><img  src='https://i.pinimg.com/originals/23/f7/a5/23f7a567b05d339a649a79dc7bb850ce.jpg' /></div>
                    <div className='item comedy'><img  src='http://static-mag.itcher.com/mag/wp-content/uploads/2015/01/Were-the-Millers.jpg' /></div>
                    <div className='item action'><img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPAh2HnOdE8IrZuG6bDN1NpiwzKk5jYmyCraH02Sc-7wjHuaSuyTQmcQFJGoajwUc8Ts&usqp=CAU' /></div>
                    <div className='item animation'><img  src='https://i.ytimg.com/vi/LLWGZkKXp9w/maxresdefault.jpg' /></div>
                    <div className='item comedy'><img  src='https://i.ytimg.com/vi/HTLPULt0eJ4/maxresdefault.jpg' /></div>
                    <div className='item horror'><img  src='https://cutewallpaper.org/21/poltergeist-wallpaper/Poltergeist-wallpapers-Movie-HQ-Poltergeist-pictures-4K-.jpg' /></div>
                    <div className='item advanture'><img  src='https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/08/LotR-FotR-2.jpg' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShuffleImg
