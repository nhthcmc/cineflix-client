import { useSelector, useDispatch } from 'react-redux';
import './film.scss';
import { Table } from 'react-bootstrap';
import { DeleteOutlined, EditOutlined, VideoCameraOutlined } from '@ant-design/icons';
import UpdateForm from './UpdateForm';
import Upload from './Upload';
import { StoreType } from '@/store';
import { useEffect } from 'react';
import apis from '@/apis';
import { filmAction } from '@/store/slices/film.slice';
import { useNavigate } from 'react-router-dom';

export default function FilmList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const filmStore = useSelector((store: StoreType) => store.filmStore);

    useEffect(() => {
        apis.film.getFilm()
            .then((res) => {
                console.log(res)
                dispatch(filmAction.setData(res.data.data))
            })
    }, [])

    return (
        <div className='film-list'>
            {/* <button className='btn-upload'>upload</button> */}
            <div className='container'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Poster</th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th>Source</th>
                            <th colSpan={2}>Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filmStore.data?.map((item, index) => {
                                return (
                                    <tr key={Math.random() * Date.now()}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.poster} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.releaseYear}</td>
                                        <td></td>
                                        <td>
                                            <button className='btn btn-primary'><VideoCameraOutlined /></button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    navigate(`/admin/films/update/${item.id}`)
                                                }}
                                                className='btn btn-outline-primary'><EditOutlined /></button>
                                        </td>
                                        <td>
                                            <button
                                                // onClick={() => {
                                                //     dispatch(filmAction.loadModal())
                                                // }}
                                                className='btn btn-danger'><DeleteOutlined /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            {/* <Upload /> */}
            {/* <UpdateForm /> */}
        </div>
    )
}