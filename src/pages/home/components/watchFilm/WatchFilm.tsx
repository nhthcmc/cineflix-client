import { useSelector } from 'react-redux';
import './watchFilm.scss'
import { StoreType } from '@/store';
import { useParams } from 'react-router-dom';

export default function WatchFilm() {
    let film = null;
    const filmStore = useSelector((store: StoreType) => store.filmStore);
    let { id } = useParams()
    film = filmStore.data?.filter(item => item.id == id)
    return (
        <div className='watch-film-page'>
            <div className='container'>
                <div className='play'>
                    <video width="640" height="480" controls>
                        <source src={film[0]?.source} type="video/mp4" />
                    </video>
                </div>
                <div className='info'>
                    <img src={film[0]?.poster} />
                    <div className='details'>
                        <div className='head'>
                            <span className='title'>{film[0]?.title}</span>
                            <span className='year'>{film[0]?.releaseYear}</span>
                        </div>
                        <div className='genres'>GENRES</div>
                        <div className='des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, asperiores! Ex, dolore blanditiis cupiditate, impedit repellendus voluptates labore laborum, quos odio omnis hic optio quibusdam sit eveniet. Asperiores, similique quas?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
