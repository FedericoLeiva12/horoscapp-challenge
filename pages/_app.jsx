import '../styles/globals.css'
import ThemeProvider from '../theme';
import {MuiPickersUtilsProvider} from '@material-ui/pickers'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp
