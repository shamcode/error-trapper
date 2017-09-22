# Error Trapper
[![Build Status](https://travis-ci.org/shamcode/error-trapper.svg?branch=master)](https://travis-ci.org/shamcode/error-trapper)

### Install
Install from npm:
`npm install -D error-trapper`

And add `babel-macros` plugin to your babel config. 

### Usage

```js
import initialize from 'error-trapper';
import ERROR_TRAP from 'error-trapper/macros/trap.macro';

initialize( `${window.location.hash}../node_modules/error-trapper/lib/esprima-bundle.js` );

ERROR_TRAP( () => {
    const foo = { firstName: 'Andy' };
    const bar = foo.lastName.toString;
}, ( e, context ) => {
    console.dir( context );
} )();

```

Console output:

![Console output](https://github.com/shamcode/error-trapper/blob/master/screens/console-dir.png?raw=true)

Or print with `ErrorTrap.printContext`:

![Console output](https://github.com/shamcode/error-trapper/blob/master/screens/print-context.png?raw=true)