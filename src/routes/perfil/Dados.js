import React from 'react'
import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import sty from './../dashboard/stylescustom'

export default function Dados() {
    const classes = sty()

    const [dado, dados] = React.useState({ name: "Wesley Benicio", email: "wesleybenicio4@gmail.com", idade: "20" })

    return (
        <div>
            <React.Fragment>
                <Paper>
                    <Title>Dados</Title>
                    <Typography component="p" variant="h6">
                        <strong>Nome Completo:</strong> {dado.name}
                    </Typography>
                    <Typography component="p" variant="h6">
                        <strong>Email:</strong> {dado.email}
                    </Typography>
                    <Typography component="p" variant="h6">
                        <strong>Idade:</strong> {dado.idade}
                    </Typography>

                </Paper>


            </React.Fragment>
        </div>
    )
}
