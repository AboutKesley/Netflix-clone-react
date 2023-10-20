import React from 'react';
import './FeaturedMovie.css'


export default ({ item }) => {

    const firstDate = new Date(item.first_air_date);
    const genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    };


    return (
        <section class="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div class="featured--vertical">
                <div class="featured--horizontal">
                    <div class="featured--name">{item.original_name}</div>
                    <div class="featured--info">
                        <div class="featured--points">{item.vote_average}</div>
                        <div class="featured--year">{firstDate.getFullYear()}</div>
                        <div class="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div class="featured--description">{item.overview}</div>
                    <div class="featured--buttons">
                        <a className="watchButton" href={`/watch/"${item.id}`}>▶ Assistir</a>
                        <a className="myListButton" href={`/list/add/"${item.id}`}>+ Minha lista</a>
                    </div>
                    <div class="featured--genres"><strong>Gênero{genres.length !== 1 ? 's' : ''}:</strong> {genres.join(", ")}</div>
                </div>
            </div>
        </section>
    );

}