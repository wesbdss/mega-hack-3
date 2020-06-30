import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Da um olhada no CLSX() pra mexer nos cards
const useStyles = makeStyles({
    root: {
        maxWidth: 190,
    },
    text:{
        display:"fixed"
    }

});

export default function Cards(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} id={props.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Loli Comunista"
                    height="230px"
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
