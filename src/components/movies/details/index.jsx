import React, {Component} from 'react'
import { getMovie } from '../../../services'
import './index.scss'
import ImgLoading from '../../../assets/loading.gif'

export default class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {},
            isReady: false,
            hasError: false,
            error: null
        };
    };

    componentDidMount = async () =>{
        try{
            const movieId =  this.props.match.params.movieId;
            if(!movieId){
                this.setState({
                hasError: true,
                error:"No se encuentra la pelicula"
                });
            }else{
                const response = await getMovie(movieId);
                if(!response.hasError){
                    this.setState({
                        movie: response,
                        isReady:true
                    });
                }
            } 
        }catch(error){
            this.setState({
                hasError: true,
                error
            });
        }
    }
    render(){
        const {
            movie, 
            isReady,
            hasError,
            error
        } = this.state;

        return(
            <>
                {
                    isReady ?
                        <DetailComponent movie={movie}></DetailComponent>
                    :hasError ?
                        <ErrorComponent error={error}></ErrorComponent>
                    : <LoadingComponent></LoadingComponent>
                }
            </>            
        )
    };
};

const DetailComponent = ({movie}) => (
    <>
        <div className="movie-detail-container">
            <div className="movie-detail-header">
                <img 
                    src="https://valencia.gratis/wp-content/themes/fox/images/placeholder.jpg" 
                    alt="Default">
                </img>
                <p>{movie.title}</p>
            </div>
            <div className="movie-detail-boy">
                <div className="movie-detail-body-left">
                    <p className="sinopsis">SINOPSIS</p>
                    <p className="movie-description">
                        {movie.description}
                    </p>
                </div>
                <div className="movie-detail-body-right">
                    <p>
                        Costo de la entrada<span>
                            ${parseFloat(movie.ticketPrice).toFixed(2)}                            
                        </span>
                    </p>
                    <p>
                        Duracion (en minutos) <span>
                            ${movie.duration}
                        </span>
                    </p>
                    <p className="is-on-cinemas">
                        {
                            movie.isOnCinemas ?
                                'EN CARTELERA'
                                : 'NO DISPONIBLE EN CINES'
                        }
                    </p>
                </div>
            </div>
            <div className="movie-detail-actions">
                <button className="edit-movie">
                    Editar Pelicula
                </button>
                <button className="delete-movie">
                    Eliminar Pelicula
                </button>
            </div>
        </div>
    </>
)

const ErrorComponent = ({error}) => (
    <>
        <p>Ups! Algo fallo al traer las peliculas :(</p>
        <p>{error}</p>
    </>
);
const LoadingComponent = () => (
    <>
        <p>Cargando ..</p>
        <img src={ImgLoading} alt="Imagen Loading"></img>
    </>
);