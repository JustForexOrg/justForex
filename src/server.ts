import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
var index = require('./routes/index.js');

const PORT = 4000;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
const opts = { document: template, url: options.req.url };

renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

//View Engine
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(join(__dirname, '..', 'dist')));
app.use(express.static(join(__dirname, 'app')));


app.get('*', index);

app.listen(PORT, () => {
console.log(`listening on http://localhost:${PORT}!`);
});
