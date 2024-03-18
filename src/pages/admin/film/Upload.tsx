import React from 'react'

export default function Upload() {
    return (
        <div className='film-upload'>
            <form>
                <label>Title
                    <input type='text' />
                </label>
                <label>Year
                    <input type='text' />
                </label>
                <label>Genre
                    <input type='option' />
                </label>
                <label>Director
                    <input type='text' />
                </label>
                <label>Info
                    <input type='text' />
                </label>
                <label>Poster
                    <input type='file' />
                </label>
                <label>Upload
                    <input type='file' />
                </label>
                <div className='btn-zone'>
                    <button className='cancel'>Cancel</button>
                    <button className='save'>Save</button>
                </div>
            </form>

        </div>
    )
}
