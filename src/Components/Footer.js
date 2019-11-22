import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
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

    const checkValidEmail = () => {
        const emailInput = document.getElementById('email');
        if (!emailInput.checkValidity()) {
            document.getElementById('invalid-input').className = 'invalid-input-display';
        }
    }

    return(
        <div>
            <div className='connect-section'>
                <div className='social-share-section'>
                    <div style={{ paddingRight: 10 }}>Connect with us</div>
                    <div tabIndex='0' onKeyPress={facebookRedirect} onClick={facebookRedirect} className='social-media-icons-container-footer'>
                        <FontAwesomeIcon icon={faFacebookF} className='social-media-icons-footer' />
                    </div>
                    <div tabIndex='0' onKeyPress={instagramRedirect} onClick={instagramRedirect} className='social-media-icons-container-footer'>
                        <FontAwesomeIcon icon={faInstagram} className='social-media-icons-footer' />
                    </div>
                    <div tabIndex='0' onKeyPress={twitterRedirect} onClick={twitterRedirect} className='social-media-icons-container-footer'>
                        <FontAwesomeIcon icon={faTwitter} className='social-media-icons-footer' />
                    </div>
                </div>
                <form action='//arc-southeast.us13.list-manage.com/subscribe/post?u=009bfbcc9554058bb7d1f4bda&amp;id=f9f8abd79b' method='post' target='_blank' className='mailing-list-section'>
                    <div className='input-group'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='Sign up to receive email updates'
                            style={{ width: 160 }}
                        />
                        <div className="input-group-btn">
                        <button className='btn btn-default subscribe-button' type='submit' onClick={checkValidEmail}>
                            Subscribe
                        </button>
                        </div>
                    </div>
                    <div className='invalid-input' id='invalid-input'>
                        Please enter a valid email address.
                    </div>
                </form>
            </div>
            <div className='footer-background'>
                <div className='footer-stacking-section-1' style={{ width: '40%' }}>
                    <div className='footer-info-section'>
                        <a href='tel:855-227-2475'>(855) 227-2475</a>
                    </div>
                    <div className='footer-info-section'>
                        P.O. Box 7354 Atlanta, GA 30357
                    </div>
                </div>
                <div className='footer-stacking-section-2' style={{ width: '60%' }}>
                    <div className='footer-info-section'>
                        &#169;2019 Access Reproductive Care - Southeast
                    </div>
                    <div className='footer-info-section'>
                        501(c)3 NNAF Affiliated Organization
                    </div>
                </div>
            </div>
        </div>
    );
}
