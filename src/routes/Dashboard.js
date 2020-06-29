import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

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
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 25, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    // ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
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
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
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
    alignItems:'center'

  },
  topMenuSelect: {
    backgroundImage: "url('https://media1.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  },name: {
    display:"flex",
    textAlign:"center"

  }
}));


export default function Dashboard(props) {

  const separaUrl = () => {
    try {
      var a = window.location.href.split('/dashboard/');
      a = a[1].split('/');
      var nm = a[1].replace(/(%20)+/g, ' ');
    return { email: a[0], name: nm, id: a[2] }
    } catch (error) {
      return { email: 'null', name: 'null', id: 'null' }
    }
      
  }
  const classes = useStyles();
  const [data, setState] = useState(separaUrl);

  
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
    
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const click = (e) => {
    alert(e.target)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          
          <IconButton
            edge="start"
            color="inherit"
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
                // value={values.amount}
                // onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start"> <strong>Pesquisa:</strong>  </InputAdornment>}
                labelWidth={60}
              />
            </FormControl>


          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
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
          <div className={classes.toolbarIcon}>
          <h4 className={classes.name}>{data.name.split(' ')[0]}</h4>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.localavatar}>
            <Avatar onClick={click} className={classes.avatar} alt="Loli Dançante" src="https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif" />
           
          </div>

        </div>

        <Divider />
        <List><div>
          <ListItem button onClick={click}>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Gêneros" />
          </ListItem>
          <ListItem button onClick={click}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Formatos" />
          </ListItem>
          <ListItem button onClick={click}>
            <ListItemIcon>
              <EmojiObjectsIcon />
            </ListItemIcon>
            <ListItemText primary="Conquistas" />
          </ListItem>
        </div></List>
        <Divider />
        <List><div>
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
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </div></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {/* Onde a gente coloca cards etc */}
        <Container maxWidth="lg" className={classes.container}>
          {/* <Grid container spacing={3}>
            
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid> */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
