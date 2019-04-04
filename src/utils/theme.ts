import { createMuiTheme } from '@material-ui/core/styles';
import DESIGN_SYSTEM from './designSystem';

const variables = {
    background: {
        whiteTransparent: 'rgba(255, 255, 255, 0.1)',
    },
    color: {
        white: '#fff',
    },
    textSize: {
        smallText: '10px',
    },
};

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            // colorDefault: '#fff',
            // colorPrimary: 'red'
        },
        MuiButtonBase: {},
    },
    palette: {
        primary: {
            contrastText: DESIGN_SYSTEM.PALETTE.WHITE,
            dark: DESIGN_SYSTEM.PALETTE.BLUE_DARK,
            light: DESIGN_SYSTEM.PALETTE.BLUE_LIGHT,
            main: '#0ab775',
        },
        secondary: {
            contrastText: '#000',
            dark: '#ba000d',
            light: '#ff7961',
            main: '#354052',
        },
        text: {
            primary: '#354052',
            secondary: 'rgba(255,255,255,.8)',
        },
    },
    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
    spacing: {
        unit: 10,
    },
    typography: {
        useNextVariants: true,
    },
});

export default {...variables, ...theme};
