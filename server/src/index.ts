import express from "express";
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { APP_BASE_HREF } from '@angular/common'

const { AppServerModule } = require('../../../../../ng/dist/ng-universal-test/server/main');

const app = express();

const angularBuildDir = join(process.cwd(), '..', 'ng', 'dist', 'ng-universal-test', 'browser');
    
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    }),
  );

  app.set('view engine', 'html');
  app.set('views', angularBuildDir);

  app.get(
    '*.*',
    express.static(angularBuildDir, {
      maxAge: '1y',
    }),
  );

  // All regular routes use the Universal engine
  app.get('*', (req, res) => {
    res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  app.listen(4000, () => {
    console.log(`Node Express server listening on http://localhost:4000`);
  });