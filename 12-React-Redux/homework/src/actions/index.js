




export function addMovieFavorite(payload){
    return{type: 'ADD_MOVIE_FAVORITE',payload};
}
export function getMovies(titulo){
    return function(dispatch){
        return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b96cc53d&s=" + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({type: 'GET_MOVIES' , payload: json});
            })
    }
}
export function getMovieDetail(id){
    return function(dispatch){fetch('https://www.omdbapi.com/?apikey=b96cc53d&i='+ id)
        .then(response=>response.json())
        .then(json=>{
            dispatch({type:'GET_DETAIL',payload:json});
        })
}}

export function removeMovieFavorite(payload){
    return{type: 'REMOVE',payload};
}