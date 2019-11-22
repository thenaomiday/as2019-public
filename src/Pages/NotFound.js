import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PanicButton from '../Components/PanicButton';

export default function NotFound() {
    const [masonJar, setMasonJar] = useState('null');

    useEffect(() => {
        const fetchData = async () => {
            const arcJar = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/media?slug=arc_jar_teal');
            setMasonJar(arcJar.data[0].source_url);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    return(
        <div className='homepage-data' style={{ paddingBottom: 50 }}>
            <PanicButton/>
            <div className='masonJar'>
                <img src={masonJar} className='mason-img' alt='Teal ARC-Southeast mason jar'/>
            </div>
            <div className='not-found-page-text'>
                The page you're searching for can't be found. Try going home, because that's where the fund is.
            </div>
            <NavLink to='/' className='not-found-home-button'>
                ARC-Southeast Home
            </NavLink>
        </div>
    );
}
