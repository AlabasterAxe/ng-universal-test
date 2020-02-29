import { join } from 'path';

const { app } = require('../../../../../ng/dist/ng-universal-test/server/main');

const distFolder = join(process.cwd(), '../ng/dist/ng-universal-test/browser');

app(distFolder).listen(4040, ()=>{
  console.log("Node Express server listening on http://localhost:4040");
});