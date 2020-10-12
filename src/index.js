import express from 'express';
import consign from 'consign';
const app = express();

consign({
  cwd: __dirname
})
//ejecuta la config de base de datos, la base y luego middlewares para configurar el sv
//luego inicia el sv
.include('libs/config.js')
.then('db.js')
.then('libs/middlewares.js')
.then('libs/boot.js')
.then('routes')
.into(app)
