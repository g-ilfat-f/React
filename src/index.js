import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



const theme = createTheme({
  palette: {
    primary: {
      main: "#0098FF",
    },
    secondery: {
      main: "#0098FF",
    },
  },
});


ReactDOM.render (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
