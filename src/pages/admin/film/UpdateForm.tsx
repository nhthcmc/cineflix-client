import { StoreType } from '@/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function UpdateForm() {
    let film = null;
    const filmStore = useSelector((store: StoreType) => store.filmStore);
    let { id } = useParams()
    film = filmStore.data?.filter(item => item.id == id)

    return (
        <div className='film-update'>
            <form className='film-upload-form'>
                <label>Title
                    <input type='text' name='title' placeholder={film[0]?.title} />
                </label>
                <label>Year
                    <input type='text' name='releaseYear' placeholder={film[0]?.releaseYear} />
                </label>
                {/* <label>Genre
                    <input type='option' name='genre' placeholder='Genre' />
                </label> */}
                <label>Info
                    <input type='text' placeholder={film[0]?.des} />
                </label>
                <label>Poster
                    <input type='file' name='poster' placeholder='Poster' />
                </label>
                <label>Upload
                    <input type='file' name='source' />
                </label>
                <div className='btn-zone'>
                    <button className='cancel'>Cancel</button>
                    <button className='save'>Save</button>
                </div>
            </form>
        </div>
    )
}
