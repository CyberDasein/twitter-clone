import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import './index.css';

import App from './App';
import theme from './theme';
import { store } from './store/store';

// TODO
// 1. Попробовать сделать пункт "Главная" в меню
// 2. Сделать возможность добавлять твиты асинхронно
// 3. Сделать редюсер для "Кого читать"
// 4. Сделать получение информации о пользователе (простой объект. имитация авторизации)
// 5. Попытаться сделать поиск и просмотро актуальных тем из БД

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
