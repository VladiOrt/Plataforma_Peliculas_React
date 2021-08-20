import React from "react";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import Homepage from "../components/homepage";
import { MovieList, MovieDetail, MovieForm } from "../components/movies";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/peliculas/crear" component={MovieForm}></Route>
            <Route exact path="/peliculas/editar/:movieId" component={MovieForm}></Route>
            <Route exact path="/peliculas/:movieId" component={MovieDetail}></Route>
            <Route exact path="/peliculas" component={MovieList}></Route>
            <Redirect to="/" ></Redirect>{/*Cuando no se encuentra la pagina mandalo al inicio*/}
            {/*<Route render={() => <p>Pagina no encontrada</p>}></Route>
                Para poner mensaje de pagina no encontrada
            */}
        </Switch>
    )
}

export default Routes;