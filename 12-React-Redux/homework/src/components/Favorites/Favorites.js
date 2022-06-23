import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    console.log(this.props)
    // if(this.props.moviesFav.length)return (
      return(
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        {this.props.moviesFav.map((m,index)=> <li className="contenedor" key={index}>
          <span><Link to={`/movie/${m.imdbID}`}>{m.title}</Link></span> 
          <button  onClick={()=>this.props.removeMovieFavorite(m)}>❌</button>
       </li>)}          
        </ul>
      </div>
  //   // );
      )
}
}
export function mapStateToProps(state) {
  return {  
    moviesFav:state.moviesFavourites
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie=> dispatch(removeMovieFavorite(movie))
  };
}
export default connect( mapStateToProps, mapDispatchToProps )(ConnectedList);


