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
        border: '1px solid black',
        padding:'1px',
        color: '#4169E1',
        display:"inline",
        borderRadius:"20px",
        width: 'min-content',
        flexFlow: "row wrap",
        margin: '10px',
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
                    alt="Loli Comunista"
                    height="170px"
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {["Aventura","Ação"].map((item) => {return <div className={classes.color}>{item}</div>})}
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="h7">
                    Senhor dos Aneis
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                    by Author
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                    Nº de páginas: muitas
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                    Avaliação: 10/10
                </Typography> 
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
