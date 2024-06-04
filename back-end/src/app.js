import dotenv from 'dotenv'
// Carrega as variáveis do arquivo .env
// no objeto global process.env
dotenv.config()

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

/***************************************************
 * ROTAS
***************************************************/

import singupRouter from './routes/singup.js'
app.use('/singup', singupRouter)

import abastecimentoRouter from './routes/abastecimento.js'
app.use('/abastecimento', abastecimentoRouter)

import veiculoRouter from './routes/veiculoRouter.js'
app.use('/veiculos', veiculoRouter)

export default app;


