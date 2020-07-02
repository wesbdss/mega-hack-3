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
        maxWidth: 180,
    },
    text:{
        display:"fixed"
    },color:
    {
        display:"flex",
        border: '1px solid black',
        padding:'1px',
        color: '#4169E1',
        display:"inline",
        borderRadius:"5px",
        width: 'min-content',
        flexFlow: "row wrap",
        margin: '2px',
        flexWrap:"wrap",
        justifyContent: "space-between"
    }

});

export default function Cards(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} id={props.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.alt}
                    height="170px"
                    image={props.image}
                    title={props.alt}
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.tags.map(item =>(<span className={classes.color}>{item}</span>))}
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="h6">
                    {props.name}
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                    by {props.autor}
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                    Avaliação: {props.nota}
                </Typography> 
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
