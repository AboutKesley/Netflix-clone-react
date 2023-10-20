import React from 'react';
import './Header.css'


export default ({ black }) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg" />
                </a>
            </div>
            <div className='header--user'>
                <a href="/" alt="Usuario">
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' />
                </a>
            </div>
        </header>
    );


}