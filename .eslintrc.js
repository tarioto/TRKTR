module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "plugins": [ "react" ],
  "rules": {
    "indent": [ 2, 2 ],
    "quotes": [ 2, "single" ],
    "linebreak-style": [ 2, "unix" ],
    "semi": [ 2, "always" ],
    "no-console": [ 0 ],
    "no-loop-func": [ 0 ],
    "new-cap": [ 0 ],
    "no-trailing-spaces": [ 0 ],
    "no-param-reassign": [ 0 ],
    "func-names": [ 0 ],
    "comma-dangle": [ 0 ],
    "no-unused-expressions" : [ 0 ], // until fixed https://github.com/babel/babel-eslint/issues/158
    "block-scoped-var": [ 0 ], // until fixed https://github.com/eslint/eslint/issues/2253
    "react/prop-types": [ 0 ]
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "mocha": true
  }
};
