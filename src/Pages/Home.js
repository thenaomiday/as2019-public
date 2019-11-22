import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageButton from '../Components/PageButton';
import { NavLink } from 'react-router-dom';
import PanicButton from '../Components/PanicButton';

export default function Home() {
    const [homepageData, setHomepageData] = useState(null);
    const [homepageImage, setHomepageImage] = useState(null);
    useEffect(() => {
        // create the side effect of getting the homepage data if we haven't before
        if (!homepageData) {
            axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/pages?slug=home').then((homepage) => {
                setHomepageData(homepage);
            });
        }
    }, [homepageData])

    useEffect(() => {
        const fetchData = async () => {
            const image = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/media?slug=arc-southeast-home-image');
            setHomepageImage(image.data[0].source_url);
        };
        fetchData();
    })

    const renderContent = (html) => {
        return { __html: html };
    }

    return(
        <div style={{ paddingBottom: 50 }}>
            <PanicButton/>
            <NavLink to='/donate' className='home-donate-navlink'>
                DONATE
            </NavLink>
            <img src={homepageImage} className='homepage-img' alt='Are you a Southener who needs support with abortion in Alabama, Florida, Georgia, Mississippi, South Carolina, or Tennessee? Let us help.' />
            {homepageData ? (
                <div
                    dangerouslySetInnerHTML={renderContent(homepageData.data[0].content.rendered)}
                    className='homepage-data'
                />
            ) : (
                <div className='homepage-data'>
                    Oops! There should be descriptive words here. Try refreshing the page.
                </div>
            )}
            <div className='page-button-container'>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginBottom: 20, alignItems: 'center' }}>
                    <img src='https://arcsoutheasttest2019.wpcomstaging.com/wp-content/themes/arcsoutheast2019/react-src/src/Images/ARC_Jar_Mauve.png' className='' alt='medical-symbol' style={{ height: 150, width: 88.5, paddingBottom: 10 }} />
                    <PageButton text='Need Assistance' path='/need-assistance'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginBottom: 20, alignItems: 'center' }}>
                    <img src='https://arcsoutheasttest2019.wpcomstaging.com/wp-content/themes/arcsoutheast2019/react-src/src/Images/medical-image.png' className='' alt='medical-symbol' style={{ paddingBottom: 10 }}/>
                    <PageButton text='Find Clinics' path='/find-clinics'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginBottom: 20, alignItems: 'center' }}>
                    <img src='https://arcsoutheasttest2019.wpcomstaging.com/wp-content/themes/arcsoutheast2019/react-src/src/Images/ARC_Jar_Mauve.png' className='' alt='medical-symbol' style={{ height: 150, width: 88.5, paddingBottom: 10 }} />
                    <PageButton text='About Us' path='/about'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginBottom: 20, alignItems: 'center' }}>
                    <img src='https://arcsoutheasttest2019.wpcomstaging.com/wp-content/themes/arcsoutheast2019/react-src/src/Images/ARC_Jar_Mauve.png' className='' alt='medical-symbol' style={{ height: 150, width: 88.5, paddingBottom: 10 }} />
                    <PageButton text='Get Involved' path='/get-involved'/>
                </div>
            </div>
        </div>
    );
}
