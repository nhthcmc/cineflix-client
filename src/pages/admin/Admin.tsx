import './admin.scss'
import images from '@/images';
import FilmList from './film/FilmList'
import { useSelector } from 'react-redux';
import { StoreType } from '@/store';
import { useEffect } from 'react';
import BackHome from '@/routes/BackHome';

function Admin() {
    const userStore = useSelector((store: StoreType) => { return store.userStore })
    useEffect(() => {
        if (!userStore.data && !userStore.loading) {
            localStorage.removeItem("token")
            window.location.href = "/"
        }
        if (userStore.data && !userStore.loading) {
            if (userStore.data.role != "admin")
                window.location.href = "/"
        }
    }, [userStore.loading, userStore.data])

    return (
        // <FilmList />
        <>
            {
                String(userStore.data?.role) == "admin" && <>
                    <header role="banner">
                        <img src={images.favicon} />
                        <h1>Admin Panel</h1>
                        <div>
                            <ul className="utilities">
                                {/* <li className="users"><a href="#">My Account</a></li> */}
                                <li className="logout warn"><a href="">Log Out</a></li>
                            </ul>
                        </div>
                    </header>

                    <nav role='navigation'>
                        <ul className="main">
                            <li className="dashboard"><a href="dashboard">Dashboard</a></li>
                            <li onClick={() => {
                                window.location.href = 'film';
                            }}
                                className="films"><a href="#">Films</a></li>
                            <li className="plans"><a href="#">Plans</a></li>
                            <li className="ads"><a href="#">Ads</a></li>
                            <li className="users"><a href="#">Manage Users</a></li>
                        </ul>
                    </nav>
                    <main role="main">
                        <FilmList />
                        {/* <section className="panel important">
                    <h2>Write Some News</h2>
                    <ul>
                        <li>Information Panel</li>
                    </ul>
                </section>

                <section className="panel important">
                    <h2>Write a post</h2>
                    <form action={window.location.href} method="post">
                        <div className="twothirds">
                            Blog title:<br />
                            <input type="text" name="title" size={40} /><br /><br />
                            Content:<br />
                            <textarea name="newstext" rows={15} cols={67}></textarea><br />
                        </div>
                        <div>
                            <input type="submit" name="submit" value="Save" />
                        </div>
                    </form>
                </section> */}
                    </main>
                </>
            }
        </>
    );
}
export default Admin;