# vx-ast-parser

AST Parser for VisionX

Fork from [@babel/parser](https://github.com/babel/babel/tree/master/packages/babel-parser)

## Install

```sh
tnpm install --save vx-ast-parser
```

## Usage

```js
const parser = require('vx-ast-parser');

const ast = parser.parse(visionxCode, {
  jsxTopLevel: true,
  plugins: [
    'jsx',
    'optionalChaining',
    'decorators',
    'objectRestSpread',
    'pipelineOperator',
  ]
});
```
