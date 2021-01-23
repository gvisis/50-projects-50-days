module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["eslint:recommended", "prettier"],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },

  rules: {
    curly: ["error", "all"],
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    "no-mixed-operators": "error",
    "no-confusing-arrow": ["error", { allowParens: false }],
  },
};
