import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button"


const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: 250
    }
}));


export default function Livro() {
    const [livro, livros] = React.useState([]);
    const classes = useStyles();
    function getId() {
        try {
            return window.location.href.split('#')[1]
        } catch {
            return 0
        }

    }
    React.useEffect(() => {
        async function request() {
            const response = await fetch(`https://back-airtoon.herokuapp.com/books/${getId()}`);
            const json = await response.json();
            livros(json);
        }
        request();
    });
    function getId(){
        const id= window.location.href.split('#')[1]
        return id
    }
    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={7} md={7} lg={9} >
                    <Paper >
                        <img className={classes.image} src={livro.image} alt="" />
                    </Paper>
                </Grid>
                <Grid item xs={7} md={4} lg={9} >
                    <Paper style={{ display: "relative", textAlign: "left", margin: '20px', padding: "10px" }} >

                        <Paper style={{ margin: '20px'}}>
                            <strong>Título:</strong>  {livro.nome}
                        </Paper>
                        <Paper style={{ margin: '20px' }} >
                            <strong>Formato:</strong>  {livro.tipo}
                        </Paper><Paper style={{ margin: '20px' }}>
                            <strong> Páginas:</strong> {livro.paginas}
                        </Paper>
                    </Paper>

                </Grid>
                <Grid item xs={7} md={12} lg={9} >
                    <Paper style={{ display: "relative", textAlign: "left", marginBottom: "20px" }} >
                        Resumo: {livro.desc}
                    </Paper>
                </Grid>
                <Grid item xs={7} md={6} lg={9} >
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                        <Button variant="contained" color="secondary" href={`online#${getId()}`}>
                            Ler Online
                        </Button>
                        <Button variant="contained" color="secondary" href={livro.compra}>
                            Adquirir Cópia Física
                        </Button>

                    </div>
                </Grid>
            </Grid>

        </Container >
    )
}
