import './Carrousel.css'
import WindowImage  from './assets/window.webp'
import Italy from './assets/italy.webp'
import France from './assets/france.webp'
import Netherlands from './assets/netherlands.webp'
import Japan from './assets/japan.webp'
import Switzerland from './assets/switzerland.webp'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Destinations {
    id: number,
    country: string,
    province: string,
    image: string,
    isCurrent?: boolean
}


function Carrousel() {
    const [activeWindowId, setActiveWindowId] = useState(3)

    const destinations: Destinations[] = [
        {id: 1, country: "Italy", province: "Lombardy", image: Italy},
        {id: 2, country: "Switzerland", province: "Bern", image: Switzerland},
        {id: 3, country: "France", province: "Paris", image: France },
        {id: 4, country: "Japan", province: "Fujiyoshida", image: Japan},
        {id: 5, country: "Netherlands", province: "Overijssel", image: Netherlands}
    ]
    //on click each window, activeindex diff w/ clicked window index then goleft/goright
    //on click edges arrows, goleft/goright
    //go left/go right --> transformsX with transition to calculated pixel distance between activeIndex and clickedIndex
    //transition of edges is customizable (opacity and moves directly to the position w/animation? maybe fadein)
    //...use --cssvars with animation keyframes! to opacity 0, move to right for example w/ offset, then...
    //...opacity 80 and move to exact --cssvar position, then at keyframe 100% opacity 100! and eureka! 

    return(
        <div className="carrousel-container">
            <Swiper
            initialSlide={2}
            centeredSlides
            spaceBetween={'10%'}
            grabCursor={true}
            breakpoints={
                {
                    '0': {
                        slidesPerView: 2,
                        cssMode: true,
                    },
                    '500': {
                        slidesPerView: 3,
                        cssMode: false,
                    },
                    '1000': {
                        slidesPerView: 4.2,
                        cssMode: false,
                    }
                }
            }>
                {
                    destinations.map((dest) => (
                        <SwiperSlide className='window-blur' key={dest.id}>
                            <div className='window-container'>
                                <div className='window-image-container'>
                                    <img className='window-image' alt='A plane window' src={WindowImage}/>
                                    <div className='oval-container'>
                                        <img alt={`Popular spot of ${dest.country}, ${dest.province}`} src={dest.image}/>
                                        <div className='oval-brightness'/>
                                    </div>
                                </div>
                                <div className='window-description'>
                                    <span className='window-country'>{dest.country}</span>
                                    <span className='window-province'>{dest.province}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='swiper-button'>
                <button type='button'>Reservar</button>
            </div>
            <div className='swiper-edges'>
                <div className='swiper-edge swiper-left-edge'/>
                <div className='swiper-edge swiper-right-edge'/>
            </div>
        </div>
    )
}

export default Carrousel;