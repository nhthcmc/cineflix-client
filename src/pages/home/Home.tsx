import React from 'react'
import './home.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Slideshow from './components/carousel/Carousel'

export default function Home() {
    return (
        <div>
            <Header />
            <Slideshow />
            <Footer />
        </div>
    )
}
