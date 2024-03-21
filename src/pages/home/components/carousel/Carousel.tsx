import React from 'react';
import { Carousel } from 'antd';
import './carousel.scss'
import images from '@/images';

const Slideshow: React.FC = () => (
    <div style={{ width: '100%', backgroundColor: '#F8E5CB' }}>
        <Carousel
            style={{ width: '90%', display: 'flex', justifyContent: 'center' }}
            autoplay
        >
            <div className='carousel'>
                <img src={images.slide1} className='slide1' />
            </div>
            <div className='carousel'>
                <img src={images.slide2} className='slide2' />
            </div>
            <div className='carousel'>
                <img src={images.slide3} className='slide3' />
            </div>
            <div className='carousel'>
                <img src={images.slide1} className='slide1' />
            </div>
        </Carousel>
    </div >
);
export default Slideshow;