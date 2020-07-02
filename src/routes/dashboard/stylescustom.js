import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
        backgroundImage: "url('https://i.pinimg.com/originals/78/df/8a/78df8a1b2d0f5dc55db7daff161f0f83.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "max-heiht"

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
        marginTop: "25px"

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

const drawerWidth = 240;

