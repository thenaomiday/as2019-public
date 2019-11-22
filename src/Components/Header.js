import React from 'react';
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import HeaderButton from './HeaderButton';
import BurgerMenu from './BurgerMenu';

const contentStyle = {
    display: 'grid',
    gridTemplateRows: 40,
    border: 'none',
    width: 200,
    padding: 0,
    paddingTop: 50,
  };

export default function Header() {
    const facebookRedirect = (event) => {
        event.preventDefault();
        window.open('https://www.facebook.com/arcsoutheastinc');
    }

    const instagramRedirect = (event) => {
        event.preventDefault();
        window.open('https://www.instagram.com/arc_southeast/');
    }

    const twitterRedirect = (event) => {
        event.preventDefault();
        window.open('https://twitter.com/ARC_Southeast');
    }

    const mobileAppMenuKeyPress = (event) => {
        event.preventDefault();
        document.getElementsByClassName('burger-menu')[0].click()
    }

    return(
        <div className='header-background'>
            {<React.Fragment>
                <NavLink to='/' className='logo-container'>
                    <img src='https://arcsoutheasttest2019.wpcomstaging.com/wp-content/themes/arcsoutheast2019/react-src/src/Images/ARC_Logo.png' className='logo-img' alt='ARC-Southeast logo'/>
                </NavLink>
                <div className='app-header' >
                    <div className='dropdown'>
                        <HeaderButton text='ABOUT' path='/about' className='dropdown' />
                        <div className='dropdown-content' style={{ backgroundColor: '#1dcad3' }}>
                            <HeaderButton text='IN THE MEDIA' path='/media' className='dropdown' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <HeaderButton text='GET INVOLVED' path='/get-involved' additionalClassName='header-button-correction' />
                    <div className='dropdown'>
                        <HeaderButton text='NEED ASSISTANCE?' path='/need-assistance' additionalClassName='assistance-header-button' />
                        <div className='dropdown-content' style={{ backgroundColor: '#1dcad3' }}>
                            <HeaderButton text='FIND CLINICS' path='/find-clinics' className='dropdown' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <HeaderButton text='CONTACT US' path='/contact-us' additionalClassName='header-button-correction' />
                    <HeaderButton text='BLOG' path='/blog' additionalClassName='header-button-correction' />
                    <HeaderButton text='DONATE' path='/donate' additionalClassName='header-button-correction' />
                </div>
                <div tabIndex='0' onKeyPress={facebookRedirect} onClick={facebookRedirect} className='social-media-icons-container'>
                    <FontAwesomeIcon icon={faFacebookF} className='social-media-icons' />
                </div>
                <div tabIndex='0' onKeyPress={instagramRedirect} onClick={instagramRedirect} className='social-media-icons-container'>
                    <FontAwesomeIcon icon={faInstagram} className='social-media-icons' />
                </div>
                <div tabIndex='0' onKeyPress={twitterRedirect} onClick={twitterRedirect} className='social-media-icons-container'>
                    <FontAwesomeIcon icon={faTwitter} className='social-media-icons' />
                </div>
                <div className='mobile-app-header '/>
                <div className='mobile-app-menu' onKeyPress={mobileAppMenuKeyPress}>
                    <Popup
                        overlayStyle={{ background: 'rgba(255,255,255,0.98', opacity: 0.3 }}
                        contentStyle={contentStyle}
                        closeOnDocumentClick={true}
                        trigger={open => 
                            <div className={open ? 'burger-menu open' : 'burger-menu'} tabIndex='0' >
                                <div className="bar1" key="b1" />
                                <div className="bar2" key="b2" />
                                <div className="bar3" key="b3" />
                            </div> }
                        arrow={false}
                        offsetX={-78}
                        offsetY={-40}
                        >
                        {close => <BurgerMenu close={close} />}
                    </Popup>
                </div>
            </React.Fragment>}
        </div>
    );
}
