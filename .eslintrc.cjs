module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // eslint
        'no-var': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-unexpected-multiline': 'error',
        'no-useless-escape': 'error',

        // typescript
        // 禁止使用未定义的变量
        '@typescript-eslint/no-unused-vars': 'error',
        // 禁止使用 ts-ignore
        '@typescript-eslint/ban-ts-comment': 'off',
        // 禁止使用 any
        '@typescript-eslint/no-explicit-any': 'off',
        // 结尾不允许加分号
        '@typescript-eslint/semi': ['error', 'never'],

        // eslint-plugin-vue
        // 要求组件始终使用'-'连接
        'vue/multi-word-component-names': 'off',
        // 其他
        'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
}
