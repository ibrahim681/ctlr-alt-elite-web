import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#F6F4EB', // lights background color
        },
        primary: {
            main: '#91C8E4',
        },
        secondary: {
            main: '#749BC2',
        },
        info: {
            main: '#4682A9',
        },
    },
});

export default theme;
