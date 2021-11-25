module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {},

  noUnusedExpressions: [2, { allowShortCircuit: true, allowTernary: true }],
};
