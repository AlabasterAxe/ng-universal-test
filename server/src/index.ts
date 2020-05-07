import { join } from 'path';
import express from 'express';

const { app } = require('../../../../../ng/dist/ng-universal-test/server/main');

const baseServer = express();

const distFolder = join(process.cwd(), '../ng/dist/ng-universal-test/browser');

app(baseServer, distFolder).listen(4040, ()=>{
  console.log("Node Express server listening on http://localhost:4040");
});