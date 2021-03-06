import React from 'react'
import ItemListContainer from '../ItemList/ItemListContainer'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',

        padding: theme.spacing(0, 6, 0, 1) ,
        [theme.breakpoints.down('sm')]: {
            Width: 320,
            marginLeft: theme.spacing(2) + 1
        },
              },
      }
      
))
export default function HomePage() {
    const classes = useStyles()
    return (
        <main>
                <Container maxWidth="lg" className={classes.root}>
                    <Grid container justifyContent="center" spacing={1}>
                        <ItemListContainer />
                    </Grid>
                </Container>
        </main>    
    )
}
