import { useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from '../../app/favorites/favoritesSlice';


const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const deleteMovie = (id) => {
       const filteredMovies = favorites.movies.filter((movie) => movie.imdbID !== id);
        dispatch(updateMovie(filteredMovies))
    }

    console.log(favorites, "favorites")
    return (
        <div className="favorites">
            <input value={favorites.title} className="favorites__name" />
            <ul className="favorites__list">
                {favorites.movies.map((item) => {
                    return <>
                        <li key={item.imdbID}>{item.Title} ({item.Year})</li>
                        <button onClick={() => deleteMovie(item.imdbID) }>Delete</button>
                    </>;
                })}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    );

}

export default Favorites;