import { useDispatch, useSelector } from 'react-redux';
import './browseFilm.scss'
import { Col, Card, Row } from 'antd'
import { StoreType } from '@/store';
import { useEffect } from 'react';
import apis from '@/apis';
import { useNavigate, useParams } from 'react-router-dom';
import { filmAction } from '@/store/slices/film.slice';

export default function BrowseFilm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { filmTitle } = useParams()
    const filmStore = useSelector((store: StoreType) => store.filmStore);

    useEffect(() => {
        apis.film.getFilm()
            .then((res) => {
                console.log(res)
                dispatch(filmAction.setData(res.data.data))
            })
    }, [])
    return (
        <div className='browse-film'>
            <div className='container'>
                <Row gutter={16} className='row'>
                    {filmStore.data?.map(i => {
                        return (
                            <Col key={Math.random() * Date.now()} className="gutter-row" xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    onClick={() => {
                                        navigate(`/films/${i.id}`)
                                    }}
                                    hoverable
                                    style={{
                                        width: "300px",
                                        height: '400px',
                                    }}
                                    cover={<img alt="poster" src={i.poster} />}
                                >
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}
