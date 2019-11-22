import React from 'react';
import HeaderButton from './HeaderButton';

export default ({ close }) => (
  <div className='dropdown-menu'>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='ABOUT' path='/about' />
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='IN THE MEDIA' path='/media' className='dropdown' style={{ width: '100%' }} />   
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='GET INVOLVED' path='/get-involved' />
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='NEED ASSISTANCE?' path='/need-assistance' />
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='FIND CLINICS' path='/find-clinics' className='dropdown' style={{ width: '100%' }} />
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='CONTACT US' path='/contact-us' />
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='BLOG' path='/blog' />
    </div>
    <div onClick={close} className='burger-menu-open'>
        <HeaderButton text='DONATE' path='/donate' />
    </div>
  </div>
);
