module.exports = {
  parser       : 'babel-eslint',
  parserOptions: {
    sourceType                 : 'module',
    allowImportExportEverywhere: false,
    ecmaVersion                : 8
  },
  plugins: [
    'babel',
    'immutable',
    'import',
    'lodash',
    'mocha',
    'react',
    'compat'
  ],
  env: {
    browser: true,
    node   : true,
    mocha  : true,
    es6    : true
  },
  extends: [
    // 'plugin:lodash/recommended', // I prefer JS over lodash
    'eslint:recommended',
    'airbnb',
    // 'plugin:flowtype/recommended',
    'plugin:react/recommended'
  ],
  globals: {
    window  : true,
    document: true,
    global  : true
  },
  // settings: {
  //   flowtype: {
  //     onlyFilesWithFlowAnnotation: false
  //   }
  // },
  rules: {
    // *****  eslint ************************************************************
    // Possible Errors
    // Best Practices
    'class-methods-use-this': 0,
    complexity              : 1, // unfortunately, reducers screw this up

    // Strict Mode
    // Variables
    // Node.js and CommonJS

    // Compatability
    'compat/compat': 2,

    // Stylistic Issues
    'brace-style'                : [2, '1tbs', { allowSingleLine: true }],
    'comma-dangle'               : [2, 'never'],
    'consistent-return'          : 0,
    curly                        : [2, 'all'],
    'func-names'                 : 0,
    indent                       : [2, 2, { SwitchCase: 1 }],
    'key-spacing'                : [2, { align: 'colon' }],
    'keyword-spacing'            : 0,
    'linebreak-style'            : 1,
    'max-len'                    : [1, 120],
    'no-case-declarations'       : 0,
    'no-cond-assign'             : 2,
    'no-console'                 : [1, { allow: ['warn', 'error'] }],
    'no-extra-semi'              : 'error',
    'no-param-reassign'          : 2,
    'no-underscore-dangle'       : 0,
    'no-unused-expressions'      : [2, { allowShortCircuit: true }],
    'no-unused-vars'             : [2, { args: 'all', varsIgnorePattern: '[mM]eteor' }],
    'no-use-before-define'       : [2, { functions: false, classes: true }],
    'padding-blocks'             : 0,
    semi                         : ['error', 'never'],
    'space-before-function-paren': 1,

    // ECMAScript 6
    'prefer-arrow-callback': 1,
    'prefer-destructuring' : [2, { array: false, object: true }, { enforceForRenamedProperties: false }],
    'prefer-spread'        : 2,

    // ***** babel **************************************************************

    // ***** immutable **********************************************************

    // ***** flowtype ***********************************************************
    // 'flowtype/boolean-style'                : [2, 'boolean'],
    // 'flowtype/define-flow-type'             : 1,
    // 'flowtype/generic-spacing'              : [2, 'never'],
    // 'flowtype/require-parameter-type'       : 2,
    // 'flowtype/require-return-type'          : [2, 'always', { annotateUndefined: 'never' }],
    // 'flowtype/require-valid-file-annotation': 2,
    // 'flowtype/semi'                         : [2, 'never'],
    // 'flowtype/space-after-type-colon'       : [2, 'always'],
    // 'flowtype/space-before-generic-bracket' : [2, 'never'],
    // 'flowtype/space-before-type-colon'      : [2, 'never'],
    // 'flowtype/union-intersection-spacing'   : [2, 'always'],
    // 'flowtype/use-flow-type'                : 1,
    // 'flowtype/valid-syntax'                 : 1,

    // ***** import *************************************************************
    // static analysis
    // helpful warnings
    // module systems
    // style guide
    'import/extensions'                : [0, 'always', { js: 'never', jsx: 'never' }],
    'import/first'                     : 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved'             : [0, { ignore: ['^meteor/'] }],
    'import/prefer-default-export'     : 1,

    // ***** lodash *************************************************************

    // ***** react **************************************************************
    // JSX rules
    // react rules
    'react/jsx-filename-extension': 0,
    'react/no-danger'             : 1,
    'react/no-find-dom-node'      : 1,
    'react/no-string-refs'        : 2,
    'react/no-unused-prop-types'  : 1,
    'react/prop-types'            : 1,
    'react/sort-comp'             : 1
  }
}
