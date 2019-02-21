import { createMuiTheme } from '@material-ui/core/styles';
import DESIGN_SYSTEM from './designSystem';

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
            contrastText: DESIGN_SYSTEM.PALETTE.TEXT,
            dark: DESIGN_SYSTEM.PALETTE.BLUE_DARK,
            light: DESIGN_SYSTEM.PALETTE.BLUE_LIGHT,
            main: DESIGN_SYSTEM.PALETTE.BLUE,
        },
        secondary: {
            contrastText: '#000',
            dark: '#ba000d',
            light: '#ff7961',
            main: '#f44336',
        },
    },
    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
    typography: {
        useNextVariants: true,
    },
});

export default theme;
