import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

export const palette = {};

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

export default theme;
