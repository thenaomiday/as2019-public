import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PanicButton from '../Components/PanicButton';

export default function Donate() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/pages?slug=donate');
            setPageData(result);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    const renderContent = (html) => {
        return { __html: html };
    }

    return(
        <div className='needassistancepage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                Donate
            </div>
            {pageData ? (
                <React.Fragment>
                    <div
                        dangerouslySetInnerHTML={renderContent(pageData.data[0].content.rendered)}
                        className='donate-page-data'
                    />
                    <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe className='donate-page-iframe' src="https://donorbox.org/embed/arcweb" seamless="seamless" name="donorbox" frameBorder="0" scrolling="no" allowpaymentrequest></iframe>
                </React.Fragment>
            ) : (
                <div className='homepage-data'>
                    Oops! There should be descriptive words here. Try refreshing the page.
                </div>
            )}
        </div>
    );
}
