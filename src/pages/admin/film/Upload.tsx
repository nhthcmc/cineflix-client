import React from 'react'

export default function Upload() {
    function handleUpload(e: React.FormEvent) {
        let newFilm = {
            title: (e.target as any).title.value,
            poster: (e.target as any).poster.value,
            releaseYear: (e.target as any).releaseYear.value,
            source: (e.target as any).source.value,
        }
    }
    return (
        <div className='film-upload'>
            <form onSubmit={(e) => {
                handleUpload(e)
            }}>
                <label>Title
                    <input type='text' name='title' placeholder='Title' />
                </label>
                <label>Year
                    <input type='text' name='releaseYear' placeholder='Year' />
                </label>
                <label>Genre
                    <input type='option' name='genre' placeholder='Genre' />
                </label>
                <label>Director
                    <input type='text' />
                </label>
                <label>Info
                    <input type='text' />
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
