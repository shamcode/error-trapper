# Error Trapper
[![Build Status](https://travis-ci.org/shamcode/error-trapper.svg?branch=master)](https://travis-ci.org/shamcode/error-trapper)
[![npm version](https://badge.fury.io/js/error-trapper.svg)](https://badge.fury.io/js/error-trapper)
[![Dependency Status](https://david-dm.org/shamcode/error-trapper.svg)](https://david-dm.org/shamcode/error-trapper)
[![devDependency Status](https://david-dm.org/shamcode/error-trapper.svg)](https://david-dm.org/shamcode/error-trapper#info=devDependencies)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

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