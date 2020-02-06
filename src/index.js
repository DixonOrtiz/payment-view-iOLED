import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#00EAA6',
      dark: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </MuiThemeProvider>,

  document.querySelector('#root'),
);
