import { useState, useEffect } from 'react';
import './header.scss'
import images from '@/images'
import { useTranslation } from 'react-i18next';
import MultiLang from '@/components/multiLang/MultiLang';
// import { useDispatch, useSelector } from 'react-redux';
// import { StoreType } from '@/store';

export default function Header() {
  // 
  const { t } = useTranslation();
  // const dispatch = useDispatch();


  // date
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const date = today.toDateString()
  return (
    <header>
      {/* header */}
      <div className='header_container'>
        <div className='left'>
          <div className='logo'>
            <img onClick={() => {
              window.location.href = '/'
            }}
              src={images.logo} alt='logo'
            />
          </div>
        </div>
        <div className='categ'>

          <span className='item'>CLASSICS</span>
          <span className='item'>COLORED</span>
          <span className='item'>ANIMATION</span>
          <span className='item'>FEATURED</span>
          {/* {
            menu.map(item => (
              <div onClick={() => {
                if (item.link) {
                  navigate(`/${item.link}/${item.title}`)
                }
              }} style={textStyle} className={`item ${item.children && "sub"}`} key={Date.now() * Math.random()}>
                {item.title}
              </div>
            ))
          } */}
        </div>
        <div className='right'>
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined" id="login-button">account_circle</span>
          {/* <span className='cart-container'
            onClick={() => {
              navigate("/cart")
            }}
          > */}
          {/* <span className="material-symbols-outlined">shopping_cart</span> */}
          {/* <span className='item cartCount'> */}
          {/* ({
                                orderStore.cart?.detail?.reduce((total, cur) => {
                                    return total + cur.quantity
                                }, 0) || 0
                            }) */}
          {/* </span> */}
          {/* </span> */}
          {/* {
            userStore.data ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className='user'>
                    <span> Hi {isNaN(Number(userStore.data.userName)) ? userStore.data.userName : userStore.data.email.split('@')[0]}!</span>
                    <img src={userStore.data.avatar} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{ zIndex: '9999' }}
                >
                  <Dropdown.Item onClick={() => {
                    window.location.href = "/admin"
                  }}>Admin</Dropdown.Item>
                  <Dropdown.Item onClick={() => {
                    window.location.href = "/profile"
                  }}>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => {
                    Modal.confirm({
                      title: "Logout",
                      content: "Confirm logout?",
                      onOk: () => {
                        localStorage.removeItem("token")
                        dispatch(userAction.setData(null))
                      }
                    })
                  }}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <div onClick={() => {
                window.location.href = '/authen';
              }} className='user_authen'>
                <span className="material-symbols-outlined" id="login-button">account_circle</span>
              </div>
            )
          } */}
        </div>
      </div>
      {/* header-border */}
      <div className='header-border'></div>
      {/* nav */}
      <nav className='nav-container'>
        <div className="left">
          <div className="slogan">
            <span>

            </span>
          </div>
        </div>
        <div className='center'>
          <span className='date'>{date}</span>
        </div>
        <div className="right">
          <div className="lang">
            <MultiLang />
          </div>
        </div>
      </nav>
      {/* nav-border */}
      <div className='nav-border'></div>
    </header>
  )
}