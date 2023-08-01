// .eslintrc.cjs example
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@babel/eslint-parser",
        "requireConfigFile": false,
    },
    "rules" : {
        "comma-dangle": [2, "never"],
        "space-before-blocks": 2,
        "space-infix-ops": 2,
        "no-irregular-whitespace": 2, //不规则的空白不允许
        "no-trailing-spaces": 2, //一行结束后面有空格就发出警告
        "array-bracket-spacing": ["error","always"],
        "object-curly-spacing": ["error","always"],
        "quotes": [2, "single"],
        "semi": [2, "never"],
        'no-multiple-empty-lines': [2, {
            'max': 1
        }],
    }
}
