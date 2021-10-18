import { ContactPhone, Facebook, Instagram, LinkedIn, LocationCity, Mail, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Exciting newsletter to recieve news of our amazing deals.
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' className="footer-input" />
                    <button className='footer_button'>subscribe</button>
                </form>
            </div>

        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-item">
                    <h2>Company</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                <div className="footer-link-item">
                    <h2>Products</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-item">
                    <h2>Useful Links</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                <div className="footer-link-item">
                    <h2>Contact Info</h2>
                    <Link to='/'><ContactPhone/> +233541131110</Link>
                    <Link to='/'><Mail/>Creanos@gmail.com</Link>
                    <Link to='/'><LocationCity/> Accra, Ghana</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                        CREANOS STORE
                    </Link>
                </div>
                <small className="website-rights">
                © 2021 Creanos Store | All right reserved.
                </small>
                <div className="social-icons">
                    <Link className="social-icon-link">
                        <Facebook/>
                    </Link>
                    <Link className="social-icon-link">
                        <Twitter/>
                    </Link>
                    <Link className="social-icon-link">
                        <Instagram/>
                    </Link>
                    <Link className="social-icon-link">
                        <YouTube/>
                    </Link>                    
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
