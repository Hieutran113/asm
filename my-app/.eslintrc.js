module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    quotes: ["error" , "double" , { allowTemplateliterals: true}],
    indent:["error" , 4],
    "eol-last": ["error","never"],
  },
  
};
