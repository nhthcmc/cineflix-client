import React from 'react'
import './footer.scss'
import images from '@/images'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      {/* <div className='subscribe'>
        <div className='news'>
          <h1>JOIN OUR NEWSLETTER</h1>
          <p>Get a code for 5% off your first order when you sign up for our newsletter. You'll receive the latest offers, oral care tips, and more straight to your inbox.</p>
          <p>By subscribing, you confirm you have read and agree to our Privacy Policy.</p>
        </div>
        <div className='join'>
          <form>
            <label className='email'>
              <input placeholder='Email' />
            </label>
            <label className='name'>
              <input placeholder='First name' />
              <input placeholder='Last name' />
            </label>
            <button type='submit'>Submit</button>
          </form>

        </div>

      </div> */}
      <div className='info'>
        <div className='container'>
          <div className='contact'>
            <ul className='help'>
              <span>Help</span>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
            </ul>

            <ul className='account'>
              <span>Account</span>
              <li>Redeem Gift Cards</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>

            <ul className='about'>
              <span>About us</span>
              <li>Terms of Use</li>
              <li>Contact Us</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className='cards'>
            {/* <img src={images.mc} /> */}
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='container'>
          <div className="left">
            <span className="credit">© CINEFLIX  All rights reserved</span>
          </div>
          <div className="right">
            <ul className="social">
              <li>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
