# About `ESM` Modules


## `NodeJS`:  What is an `ESM` Module ?

`Node.js` fully supports `ECMAScript` modules as they are currently specified and provides interoperability between them and its original module format, `CommonJS`.

See https://nodejs.org/api/esm.html#enabling :

* When you execute a NodeJS software, we have several options to tell nodejs those files are ESM Modules :
  * a given file is considered to be an ESM Module if and only if it has `*.mjs` extension,
  * Or the `package.json`  has `"type" : "module"` configuration property like below :

```JSon
{
  "name": "hugo-gmented-gulp",
  "version": "0.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "type": "module",
}
```

## `TypeScript`: What is an `ESM` module ?

According [official documentation](https://www.typescriptlang.org/docs/handbook/2/modules.html) :

* `ESM` Modules appeared were introduced in `ECMAScript` in `2015`.
* In `TypeScript`, just as in `ECMAScript 2015` :
  * any file containing a top-level `import` or `export` is considered a module.
  * Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).
* Modules are executed within their own scope, not in the global scope. This means:
  * that variables, functions, classes, etc. declared in a module are not visible outside the module
  * they are indeeed not visible outsie the modules they are declared in, unless they are explicitly exported using one of the export forms.

>
> If you have a file that doesn’t currently have any imports or exports, but you want to be treated as a module, add the line:
>
> ```JavaScript
> export {};
> ```
>


## `TypeScript` : `ESM` Module Syntax

According https://www.typescriptlang.org/docs/handbook/2/modules.html#es-module-syntax

A file can declare a main export via export default:

```JavaScript
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```

This is then imported via :

```JavaScript
import helloWorld from "./hello.js";
helloWorld();
```


```JavaScript
import Gulpfile from "./gulp.pokus/index.js";
```



## ANNEX A: ...

## References

* Official ESM Modules syntax : https://www.typescriptlang.org/docs/handbook/2/modules.html#es-module-syntax
* from commonjs to ESM :
  * https://medium.com/digio-australia/migrating-an-npm-package-to-use-es-modules-d59877963d61
  * https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#faq
  * very important why TypeScript And ESM do not work well together especially in a nodejs app : https://docs.joshuatz.com/cheatsheets/node-and-npm/node-esm/#typescript---fully-resolved-import-filepaths-with-extensions
