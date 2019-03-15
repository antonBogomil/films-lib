const filmsLoaded = (newFilm)=>{
    return {
        type: 'FILMS_LOADED',
        payload: newFilm
    }
};