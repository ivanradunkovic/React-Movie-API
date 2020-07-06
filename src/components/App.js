import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import {Switch, Route} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import LinearProgress from "@material-ui/core/LinearProgress"
import {fetchGenres} from "../store/domains/common/common.actions"
import {SnackbarProvider} from "notistack"
import Navbar from "./Navbar"
import Page404 from "./Page404"
import Favorites from "./Favorites"

function App(props) {
    const {isLoading, location, fetchGenres} = props
    const [showSidebar, setShowSidebar] = useState(false)

    useEffect(function () {
        fetchGenres()
    }, [fetchGenres])

    useEffect(function () {
        setShowSidebar(false)
    }, [location])

    return (
        <SnackbarProvider autoHideDuration={30 * 1000}>
            <CssBaseline/>
            {isLoading && <LinearProgress style={{position: 'fixed', top: 0, width: '100%', zIndex: 9999}}/>}
            <Navbar onMenu={() => setShowSidebar(!showSidebar)}/>
            <Switch>
                <Route component={Page404}/>
                <Route path="/favorites" component={Favorites}/>
            </Switch>
        </SnackbarProvider>
    );
}

function mapStateToProps(state) {
    return {
        isLoading: !state.common.isGenresLoaded || state.search.isFetching || state.movie.isFetching,
        errors: state.ui.errors,
        location: state.router.location.pathname
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGenres: () => dispatch(fetchGenres()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)