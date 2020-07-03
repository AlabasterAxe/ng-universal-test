# Angular Universal AppServerModule Importing Bug

This is a minimal reproduction of an issue with Angular Universal where importing the AppServerModule from the compiled JavaScript into a different Express server results in errors.

Assuming you've already cloned this repo, to reproduce the issue, from the root of the repo run:

```
cd ng
npm i
npm run build:ssr

cd ../server
npm i
npm run build
npm start
```

visit localhost:4000 in your web browser. You should see the following error in your browser and the server logs:

Error: No NgModule metadata found for 'AppServerModule'.
    at NgModuleResolver.resolve (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@angular/compiler/bundles/compiler.umd.js:23041:27)
    at CompileMetadataResolver.getNgModuleMetadata (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@angular/compiler/bundles/compiler.umd.js:22144:47)
    at JitCompiler._loadModules (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@angular/compiler/bundles/compiler.umd.js:28333:55)
    at JitCompiler._compileModuleAndComponents (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@angular/compiler/bundles/compiler.umd.js:28314:40)
    at JitCompiler.compileModuleAsync (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@angular/compiler/bundles/compiler.umd.js:28274:41)
    at CompilerImpl.compileModuleAsync (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js:339:35)
    at CommonEngine.<anonymous> (/Volumes/SSD/projects/ng-universal-test/server/node_modules/@nguniversal/express-engine/bundles/express-engine.umd.js:95:69)
    at step (/Volumes/SSD/projects/ng-universal-test/server/node_modules/tslib/tslib.js:139:27)
    at Object.next (/Volumes/SSD/projects/ng-universal-test/server/node_modules/tslib/tslib.js:120:57)
    at /Volumes/SSD/projects/ng-universal-test/server/node_modules/tslib/tslib.js:113:75
