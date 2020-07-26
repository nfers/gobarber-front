module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "tsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  "rules": {
    "mo-unused-expressions": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "prettier/prettier": ["error", {}, {
      "fileInfoOptions": {
        "withNodeModules": true
      }
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/prefer-default-export": "off",
    "default-case": "off",
    "no-dupe-class-members": "off",
    // "@typescript-eslint/no-angle-bracket-type-assertion": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      {
        "functions": false,
        "classes": false,
        "variables": false,
        "typedefs": false
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "args": "none", "ignoreRestSiblings": true }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "import/extensions": 0,
    "import/no-unresolved": 0
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    },
  }
}