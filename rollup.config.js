import typescript from "rollup-plugin-typescript2";
// import sass from "rollup-plugin-sass";
// import scss from 'rollup-plugin-scss';
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import packageJson from "./package.json";

//"build": "webpack --config webpack.config.js --watch",

export default {
  input: "src/App.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    typescript(),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
          "isValidElementType",
          "isContextConsumer"
        ],
        "node_modules/react-dom/index.js": ["render"],
        "node_modules/react-is/index.js": ["isFragment", "ForwardRef", "Memo", "isValidElementType", "isContextConsumer"],
        "node_modules/prop-types/index.js": ["elementType", "func", "bool", "element", "oneOfType"]
      }
    }),
    // sass({
    //   insert: true
    // }),
    // scss()
  ]
};