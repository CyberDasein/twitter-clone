import dotenv from 'dotenv';

import './core/db';

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidations } from './validations/register';
import { passport } from './core/passport';
dotenv.config();

const app = express();

app.use(express.json());
app.use(passport.initialize());

/*
  TODO:
  2. Сделать авторизацию через JWT + Passport
  3. Сделать возможность добавлять твиты через авторизованного пользователя
*/

app.get('/users', UserCtrl.index);
app.get('/users/me', passport.authenticate('jwt'), UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show);
app.get('/auth/verify', registerValidations, UserCtrl.verify);
app.post('/auth/register', registerValidations, UserCtrl.create);
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, (): void => {
  console.log('SERVER RUNNING!');
});
