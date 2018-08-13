module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        jquery: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        indent: ["error", 4],
        semi: [2, "always", { "omitLastInOneLineBlock": true}]
    },
    globals: {}
}
