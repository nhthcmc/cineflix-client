import './home.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useSelector } from 'react-redux'
import { StoreType } from '@/store'
import { Outlet, useLocation } from 'react-router-dom'
import WatchFilm from './components/watchFilm/WatchFilm'
import BrowseFilm from './components/browseFilm/BrowseFilm'
import Slideshow from './components/carousel/Carousel'

export default function Home() {
    const userStore = useSelector((store: StoreType) => { return store.userStore })
    console.log('userStore', userStore)
    const location = useLocation();
    const toHomePage = location.pathname === '/';
    return (
        <div className='home-page'>
            <Header />
            <div className='home-body'>
                {toHomePage && <Slideshow />
                    // && <BrowseFilm />
                }
                <Outlet />
                <BrowseFilm />
                {/* <WatchFilm /> */}
            </div>
            <Footer />
        </div>
    )
}
