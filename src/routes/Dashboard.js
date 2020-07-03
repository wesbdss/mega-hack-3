import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory, Link
} from "react-router-dom";
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
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
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Card from './dashboard/Card.js';
import Genero from './dashboard/Genero.js'
import Conquista from './Conquista';
import Livro from './Livro.js';
import useStyles from "./dashboard/stylescustom.js"
import Perfil from './Perfil';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © '}
      <Link color="inherit" to="/mega-hack-3/">
        NeoGuará
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Dashboard(props) {
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
  const history = useHistory();
  // redirecionamento
  const click = (e) => {
    let path = `livro#${e.target.alt}`;
    history.push(path);
  }
 

  return (
    <div className={classes.root} >
      {/* Topo da pagina */}
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
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start"> <strong>Pesquisa:</strong>  </InputAdornment>}
                labelWidth={60}
              />
            </FormControl>


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
            {/* Lateral da pagina */}
          </div>

          <Link to="/mega-hack-3/perfil">
            <div className={classes.localavatar}>
              <Avatar className={classes.avatar} alt="Loli Dançante" src="https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif" />
            </div>
          </Link>

        </div>

        <Divider />
        <List>
          <div>
            <Link color="inherit" to="/mega-hack-3/dashboard/populares">
              <ListItem button>
                <ListItemIcon>
                  <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Popular" />
              </ListItem>
            </Link>
            <Link color="inherit" to="/mega-hack-3/dashboard/formato">
              <ListItem button>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Formatos" />
              </ListItem>
            </Link>
            <Link color="inherit" to="/mega-hack-3/dashboard/conquista">
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

            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Configurações" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Ajuda" />
            </ListItem>

            <Link color="inherit" to="/mega-hack-3/login">
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItem>
            </Link>
          </div></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {/* Routes para cada opção do dashboard*/}

        <Container maxWidth="lg" className={classes.container}>


          <Switch>
            <Route exact path="/mega-hack-3/dashboard/populares">

              <h2 className={classes.text} style={{ display: "flex" }}>Populares</h2>
              <Divider style={{ marginBottom: "20px" }} />
              <Grid container
                direction="row"
                justify="center"
                alignItems="baseline"
                spacing={2}
              >
                {livro.map((elem) => (
                  <Grid item xs={7} md={3} lg={9} >
                    <Paper className={fixedHeightPaper} onClick={click} >
                      <Card name={elem.nome} alt={elem.id} image={elem.image} autor={elem.autor} tipo={elem.tipo} nota={elem.nota} link={elem.compra} tags={elem.tags} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Route>


            <Route exact path="/mega-hack-3/dashboard/formato">
              <h1>Formatos</h1>
              <Genero />
            </Route>

            <Route exact path="/mega-hack-3/dashboard/conquista">
              <Conquista />
            </Route>
            <Route exact path="/mega-hack-3/perfil/">
                <Perfil />
              </Route>

            <Route exact path="/mega-hack-3/dashboard/livro">
              <Livro />
            </Route>

            <Route exact path="/mega-hack-3/dashboard/config">
              <h1>/config</h1>
            </Route>

            <Route exact path="/mega-hack-3/dashboard/ajuda">
              <h1>/Ajuda</h1>
            </Route>

            <Route path="/mega-hack-3/dashboard">
              <h2 className={classes.text} style={{ display: "flex", }}>Populares</h2>
              <Divider style={{ marginBottom: "10px" }} />
              <Grid container
                direction="row"
                justify="center"
                alignItems="baseline"
                spacing={2}
              >
                {livro.map((elem) => (<Grid item xs={7} md={3} lg={9} >
                  <Paper className={fixedHeightPaper} onClick={click} id="teste1">
                    <Card name={elem.nome} alt={elem.id} image={elem.image} autor={elem.autor} tipo={elem.tipo} nota={elem.nota} link={elem.compra} tags={elem.tags} />
                  </Paper>
                </Grid>
                ))}
              </Grid>
            </Route>
          </Switch>
          <Box pt={4} style={{ bottom: 0 }}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div >
  );
}
