import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Card from "./dashboard/Card"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {' © '}
            <Link color="inherit" href="https://material-ui.com/">
                NeoGuará
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex', },
    toolbar: {
        paddingRight: 25, // keep right padding when drawer close
    }, toolbarIcon: {
        display: 'flex', alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        // ...theme.mixins.toolbar,
    },
    appBar:
    {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift:
    {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton:
    {
        marginRight: 36,
    },
    menuButtonHidden:
    {
        display: 'none',
    },
    title:
    {
        flexGrow: 1,
    },
    drawerPaper:
    {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose:
    {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content:
    {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        width: '100%',
        wordWrap: "nowrap",
    },
    container:
    {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        color: "black",
        display:"flex"

    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 350,
    },
    avatar: {
        height: '10vh',
        width: '10vh',
        border: "20px",
        borderColor: "black",
    },
    localavatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    topMenuSelect: {
        backgroundImage: "url('https://image.freepik.com/vetores-gratis/fundo-azul-triangulo-com-cores-vivas_23-2148400226.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    }, name: {
        display: "flex",
        textAlign: "center",
        border: " gray 5px",
        marginLeft: "25px"
    },
    text: {
        fontFamily: '"lucida sans unicode", "lucida grande", sans-serif',
        fontsize: '12px',
        fontweight: 'bold',
        fontstyle: 'italic',
        fontvariant: 'small-caps',
        letterspacing: '2.8pt',
        wordspacing: '8.2pt',
        lineheight: '1.7',
    }
}));




export default function Perfil() {
    const classes = useStyles();



    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);

    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{ backgroundColor: "white" }}>
                <Toolbar className={classes.toolbar}>

                    <IconButton
                        edge="start"
                        color="secontary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon color="action" />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.topMenuSelect}>
                    <div>
                        {/* <h4 style={{paddingTop:"10px", letterSpacing:"2px", textDecoration:"underline ", fontFamily:"font-family: 'Gill Sans', sans-serif"}} className={classes.name}>{data.name.split(' ')[0]}</h4> */}
                        <div style={{ justifyContent: "flex-end" }} className={classes.toolbarIcon}>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon color="action" />
                            </IconButton>
                        </div>

                    </div>

                    <Link href="perfil">
                        <div className={classes.localavatar}>
                            <Avatar className={classes.avatar} alt="Loli Dançante" src="https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif" />
                        </div>
                    </Link>

                </div>

                <Divider />
                <List>
                    <div>
                        <Link color="inherit" href="popular">
                            <ListItem button>
                                <ListItemIcon>
                                    <ImportContactsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Populares" />
                            </ListItem>
                        </Link>
                        <Link color="inherit" href="formato">
                            <ListItem button>
                                <ListItemIcon>
                                    <LibraryBooksIcon />
                                </ListItemIcon>
                                <ListItemText primary="Formatos" />
                            </ListItem>
                        </Link>
                        <Link color="inherit" href="conquista">
                            <ListItem button>
                                <ListItemIcon>
                                    <EmojiObjectsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Minhas Cartas" />
                            </ListItem>
                        </Link>
                    </div>
                </List>
                <Divider />
                <List>
                    <div>
                        <Link color="inherit" href="">
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Configurações" />
                            </ListItem>
                        </Link>
                        <Link color="inherit" href="">
                            <ListItem button>
                                <ListItemIcon>
                                    <HelpOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ajuda" />
                            </ListItem>
                        </Link>
                        <Link color="inherit" href="/mega-hack-3/login">
                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sair" />
                            </ListItem>
                        </Link>
                    </div></List>
            </Drawer>
            <main className={classes.content} />
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Divider style={{ marginBottom: "20px" }} />
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="baseline"
                    spacing={2}
                >

                    {/* <Grid item xs={7} md={3} lg={9} >
                        <Paper className={fixedHeightPaper} >
                            <Card name="meu livro" alt="sda" image="/mega-hack-3/loliWisky.jpg" autor="eu" genero="eudnv" link="http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-%E2%80%93-O-Senhor-dos-An%C3%A9is-%E2%80%93-Vol-1.pdf" tags={["teste", "teste1"]} />
                        </Paper>
                    </Grid> */}

                </Grid>
                <Box pt={4}>
                    <h1>teste</h1>
                </Box>
            </Container>
        </div>
    )
}

