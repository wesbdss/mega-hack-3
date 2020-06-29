import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 150,
    },
});

export default function Cards(props) {
    const classes = useStyles();

    const change = (e) => {
        alert(e.target.classList.add('MuiCardMedia-root'));
    }
    return (
        <Card className={classes.root} onClick={change}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Loli Comunista"
                    height="100px"
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {props.name}
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Autor: {props.autor} <br/> {props.genero}
            </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}