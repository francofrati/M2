import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';



import './Movie.css';

class Movie extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)

    }
    //PODRIA AGREGARLE COMPONENTWILLUNMOUNT PARA QUE NO QUEDE BUGGEADO LA MOVIE ANTERIOR

    render() {
        
        console.log(this.props)
        return (
            <div className="contenedor">
                <div>
                    <h1>{this.props.detail.titulo}</h1>
                    <span>imdbRating: {this.props.detail.rating}</span>
                    <span>{this.props.detail.año}</span>
                    <span>{this.props.detail.genero}</span>
                    <p>{this.props.detail.plot}</p>
                    <p>{this.props.detail.titulo} awards:
                     {this.props.detail.premios}</p>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state){
    return{
        detail: state.movieDetail
    }
}
export function mapDispatchToProps(dispatch){
    return{
        getDetail: movie => dispatch(getMovieDetail(movie))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Movie)