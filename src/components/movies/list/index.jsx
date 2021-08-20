import React, {Component} from 'react'
import {getMovies } from '../../../services';
import moment from 'moment';
import './index.scss'
import { Link } from 'react-router-dom';
export default class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies: [],
            isReady: false,
            hasError: false,
            error: null
        };
    };
    componentDidMount = async () => {
        const movies = await getMovies();
        if(!movies.hasError){
            this.setState({
                movies,
                isReady: true
            })
        }else{
            this.setState({
                hasError: true,
                error: movies.error
            })
        }
    }
    render() {
        const {
            movies,
            isReady,
            hasError,
            error
        } = this.state;
        
        return (
            <>
            {
                isReady?                     
                    <ListComponent movies={movies}></ListComponent>
                    :
                    hasError ? 
                        <ErrorComponent error={error}></ErrorComponent>
                    : <LoadingComponent></LoadingComponent>
            }
            </>
        )
    }
};

const ListComponent = (props) => (
    <>
        {console.log( props.movies.data)}
        {            
            props.movies.data.length > 0 ?
                props.movies.data.map((movie) => (
                    <Link to={`/peliculas/${movie._id}`} className="link-movie-detail">
                        <MovieCard movie={movie}></MovieCard>
                    </Link>                    
                ))     
            : <p>No hay ninguna pelicula registrada</p>
        }
    </>
);

const MovieCard = ({movie}) => {
    return(
    <>
        <div className="movie-card-container">
            <div className="movie-card-info">
                <div className="movie-card-basic-info">
                    <div className="movie-card-title"></div>
                    <div className="movie-card-desc"></div>
                </div>
                <div className="movie-card-details">
                    <p>
                        Costo de la entrada: <span>
                            {movie.ticketPrice}
                        </span>
                    </p>
                    <p>
                        Disponible en cines: <span>
                            {movie.isOnCinemas ? 'SI' : 'NO'}
                        </span>
                    </p>
                </div>
            </div>
            <div className="movie-card-schedules-container">
                <p>Horarios Disponibles</p>
                <div className="movie-card-schedules">
                    {                        
                        movie.schedules.length > 0 ?
                            movie.schedules.map(schedule => (
                                <p>{moment(schedule.time).format('HH:mm')}</p>
                            ))
                        : <p>No hay horarios disponibles :(</p>
                    }
                </div>
            </div>
        </div>
    </>
)}

const ErrorComponent = ({error}) => (
    <>
        <p>Ups! Algo fallo al traer las peliculas (Que triste)</p>
        <p>{error}</p>
    </>
);

const LoadingComponent = () => (
    <>
        <p>Cargando ...</p>
    </>
)