


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail:{}
};

function rootReducer(state = initialState , action){
    switch(action.type){
        case 'ADD_MOVIE_FAVORITE':{
            return {
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload]
            }
        }
        case 'GET_MOVIES':{
            console.log(action.payload)
            return {
                ...state,
                moviesLoaded: action.payload.Search,
                
            }
        }
        case 'REMOVE':{
            return{
                ...state,
                moviesFavourites : state.moviesFavourites.filter(movie=> action.payload.title!==movie.title)
            }
        }
        case 'GET_DETAIL':{
            return{
                ...state,
                movieDetail : {titulo: action.payload.Title,
                                año: action.payload.Year,
                                rating:action.payload.imdbRating,
                                plot:action.payload.Plot,
                                premios:action.payload.Awards,
                                genero:action.payload.Genre,
                }
            }
        }
        default:
            return state
    }
}

export default rootReducer;
