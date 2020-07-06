import React from "react"
import PropTypes from 'prop-types'
import CircularProgress from "@material-ui/core/CircularProgress"
import {Movie} from "./types/movie-type"
import Button from "@material-ui/core/Button"
import {Loop} from "@material-ui/icons"

MovieBrowser.propTypes = {
    movies: PropTypes.arrayOf(Movie),
    isFetching: PropTypes.bool,
    isFetched: PropTypes.bool,
    totalMovies: PropTypes.number,
    onLoadMore: PropTypes.func,
    placeholdersAmount: PropTypes.number,
}

function MovieBrowser({movies = [], isFetching, isFetched, totalMovies, placeholdersAmount = 5, onLoadMore, onFavorite}) {


    const canLoadMore = movies.length < totalMovies && !!onLoadMore

    return (
        <React.Fragment>
            {canLoadMore &&
            <Button className={classes.button} variant="outlined" fullWidth size={"large"} disabled={isFetching} onClick={onLoadMore}>
                {isFetching ?
                    <CircularProgress
                        className={classes.buttonProgress}
                        variant="indeterminate"
                        disableShrink
                        size={16}
                        thickness={4}/> :
                    <Loop className={classes.buttonProgress}/>}
                {isFetching ? 'Loading...' : 'Load more'}
            </Button>}
        </React.Fragment>
    )
}

export default MovieBrowser