import './home.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useSelector } from 'react-redux'
import { StoreType } from '@/store'
import { Outlet } from 'react-router-dom'
import WatchFilm from './components/watchFilm/WatchFilm'
import BrowseFilm from './components/browseFilm/BrowseFilm'
// import Slideshow from './components/carousel/Carousel'

export default function Home() {
    const userStore = useSelector((store: StoreType) => { return store.userStore })
    console.log('userStore', userStore)
    return (

        <div className='home-page'>
            <Header />
            <div className='home-body'>
                {/* <Slideshow /> */}
                <Outlet />
                {/* <WatchFilm /> */}
                <BrowseFilm />

            </div>
            <Footer />
        </div>
    )
}
