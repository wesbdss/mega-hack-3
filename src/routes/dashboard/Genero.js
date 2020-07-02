import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Divider } from '@material-ui/core';
// import tileData from './tileData';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexDirection:"row"
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


const tileData = [
  {
    img: "https://www.sbs.com.au/theboat/images/fb-image.jpg",
    tipo: 'História Animada',
    author: '2 Livros',
  },{
    img: "https://img.ibxk.com.br/2014/05/19/19185013492726.jpg?w=1120&h=420&mode=crop&scale=both",
    tipo: 'PDF',
    author: '10 Livros',
  },{
    img: "https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png",
    tipo: 'WORD',
    author: '14 Livros',
  }
  ,{
    img:"https://www.oficinadanet.com.br/imagens/post/25102/www_750x469_5c87bcdb85fab.jpg",
    tipo: 'Web',
    author: '10 Livros',
  }
]

export default function Genero() {
  const classes = useStyles1();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Divider style={{marginBottom:"30px"}}/>
        </GridListTile>
        {tileData.map((tile) => (
          <ComplexGrid image={tile.img} title={tile.title} autor={tile.tipo}/>
        ))}
      </GridList>
      <Divider style={{margin:"100px"}}/>
    </div>
  );
}




const useStyles = makeStyles((theme) => ({
  root: {
    flex:1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ComplexGrid(props) {
  const classes = useStyles();

  return (

    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={props.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {props.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.tipo}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
  )
}