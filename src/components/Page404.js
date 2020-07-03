import React from 'react'
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        fontSize: '33pt',
        marginTop: 10
    },
    subtitle: {
        fontSize: '14pt'
    },
    action: {
        textDecoration: 'none',
        color: '#0037ff',
        margin: 6,
        "&:hover": {
            textDecoration: 'underline'
        }
    }
}))

function Page404(props) {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <div className={classes.title}>Ooops! We're sorry! </div>
            <div className={classes.subtitle}>
                Try searching or go to
                <Link className={classes.action} to="/">Home page.</Link>
            </div>
        </Container>
    )
}

export default Page404