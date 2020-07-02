import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        width:"100%",
    },
    fundo: {
        minHeight: 300,
        width:"100%",
        backgroundImage: "url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    },
    avatar: {
        display:"flex",
        height: '200px',
        width: '200px',
        marginTop:"30px"
    }

}));

export default function Topavatar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.fundo}>
                <Avatar className={classes.avatar} alt="Loli Dançante" src="https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif" />
                <h1 style={{display:"flex", justifyContent:"center"}}>Wesley</h1>
            </div>


        </div>
    )
}
