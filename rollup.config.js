import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/parser.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      "process.env.NODE_ENV": '"production"',
      "process.env": JSON.stringify({ NODE_ENV: "production" }),
    }),
    babel({
      envName: "babel-parser"
    })
  ]
};
