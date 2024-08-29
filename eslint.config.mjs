export default [
  {
    ignores: [
      "webpack.config.js",
      "webpack.*.js",
      "node_modules/**",
      "dist/**"
    ],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];
