import './film.scss'
import Upload from './Upload'

export default function FilmList() {
    return (
        <div className='film-list'>
            <button className='btn-upload'>upload</button>
            <Upload />
        </div>
    )
}