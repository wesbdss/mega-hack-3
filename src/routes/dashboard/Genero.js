import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Divider } from '@material-ui/core';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
    title: 'História Animada',
    author: '2 Livros',
  },{
    img: "https://lh3.googleusercontent.com/proxy/gKN6WNJdsjM-7kYrdqkPGcSttmxl_r_N86ssvyOjw_2Au92nu94F1yBJiPb_mAnNt2JcFfWOmvezkNjx2OXggciWiNfYZG7kr_suev3QDgFJV2wmlpbx6_9QkZcYyW0NPvEO",
    title: 'PDF',
    author: '10 Livros',
  },{
    img: "https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png",
    title: 'WORD',
    author: '14 Livros',
  }
  ,{
    img:"https://i.dlpng.com/static/png/6889500_preview.png",
    title: 'Web',
    author: '10 Livros',
  }
]

export default function Genero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Divider style={{marginBottom:"30px"}}/>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}