module.exports = {
    "env": {
        "browser": true,
        "react-native/react-native": true,
        "es6": true,
        "node": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react-native/no-unused-styles": 2,
        "indent": [
            "error",
            4
        ],
        "react/prop-types":[0],
        "react/no-unescaped-entities": [0],
        "no-unused-vars": ["error", { "varsIgnorePattern": "navigation" }]
    }
};
