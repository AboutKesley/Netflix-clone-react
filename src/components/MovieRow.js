import React, { useState } from 'react';
import './MovieRow.css';
import Back from './img/back.png';
import Next from './img/next.png';
import $ from 'jquery';


export default ({ title, items }) => {

    const [scrollx, setScrollx] = useState(-400)

    const navigateLeftArrow = () => {
        $(".movierow--rightIcons").css('opacity', 1);
        let x = scrollx + Math.round(window.innerWidth / 2);
        if (x > 0) {
            $(".movierow--leftIcons").css('opacity', 0);
            x = 0;
        }

        setScrollx(x);
    }

    const navigateRightArrow = () => {
        $(".movierow--leftIcons").css('opacity', 1);
        let x = scrollx - Math.round(window.innerWidth / 2);
        let list = items.results.length * 150;
        if ((window.innerWidth - list) > x) {
            $(".movierow--rightIcons").css('opacity', 0);
            x = (window.innerWidth - list) - 60;
        }
        setScrollx(x);
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movierow--leftIcons" onClick={navigateLeftArrow}>
                <img src={Back} alt="backButton" title='backIcon' />
            </div>
            <div className="movierow--rightIcons" onClick={navigateRightArrow}>
                <img src={Next} alt="nextButton" title='nextIcon' />
            </div>
            <div className='movierow--listarea'>
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 150,

                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original} />
                        </div>
                    ))};
                </div>
            </div>
        </div>
    )
}