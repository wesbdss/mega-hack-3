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
import TopAvatar from "./perfil/Topavatar";
import Charts from './perfil/Chart';
import Deposits from './perfil/Deposits';
import Orders from './perfil/Orders';
import useStyles from "./dashboard/stylescustom"
import Dados from './perfil/Dados';

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








export default function Perfil() {
    const classes = useStyles();

    const [livro, livros] = useState([]);

    React.useEffect(() => {
        async function request() {
            const response = await fetch(`https://back-airtoon.herokuapp.com/books`);
            const json = await response.json();
            livros(json);
        }
        request();


    });


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

            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="flex"
                    spacing={2}
                >
                    <TopAvatar></TopAvatar>
                    <Divider style={{ margin: "40px" }} />
                    <Paper style={{ padding: '20px' }}>
                        <Box> Seu HANK : #20</Box>
                    </Paper>

                    <Divider style={{ margin: "40px" }} />
                    <Dados />
                    <Divider style={{ margin: "40px" }} />
                    <Orders></Orders>

                    {/* <Deposits></Deposits> */}
                    {/* <Grid item xs={7} md={3} lg={9} >
                        <Paper className={fixedHeightPaper} >
                            <Card name="meu livro" alt="sda" image="/mega-hack-3/loliWisky.jpg" autor="eu" genero="eudnv" link="http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-%E2%80%93-O-Senhor-dos-An%C3%A9is-%E2%80%93-Vol-1.pdf" tags={["teste", "teste1"]} />
                        </Paper>
                    </Grid> */}

                </Grid>
            </Container>
        </div>
    )
}

