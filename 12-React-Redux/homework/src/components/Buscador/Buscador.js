import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies,addMovieFavorite } from "../../actions";
import './Buscador.css';
// import store from '../../store/index.js';
import Movie from '../Movie/Movie.js'




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    console.log(this.props.movies)
    // console.log(this.props)
    // console.log(store)
  }
  

  render() {
    const { title } = this.state;
    
    // if(this.props.movie.length)
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul className="cont">
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {
          this.props.movies.map(m=> <li className="contenedor" key={m.imdbID}>
          <span><Link to={`/movie/${m.imdbID}`}>
            {m.Title}
          </Link></span> 
          <button onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}>❤</button>
       </li>
          )}
        </ul>
      </div>
    );

    // return(
    //   <div>
    //     <h2>Buscador</h2>
    //     <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
    //       <div>
    //         <label className="label" htmlFor="title">Película: </label>
    //         <input
    //           type="text"
    //           id="title"
    //           autoComplete="off"
    //           value={title}
    //           onChange={(e) => this.handleChange(e)}
    //         />
    //       </div>
    //       <button type="submit">BUSCAR</button>
    //     </form>
    //     <ul className="cont">
    //      {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          
    //     </ul>
    //   </div>
    // );

    
  }

  
}

export function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    moviesFav:state.moviesFavourites
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
