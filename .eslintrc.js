module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: false,
    },
    plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'quotes': ['warn', 'single'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'no-unused-vars': 'off',
        'no-console': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-style': ['warn', 'last'],
        'semi': ['warn', 'always'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-key': ['warn', { warnOnDuplicates: true }],
        'react/jsx-max-props-per-line': ['warn', { 'maximum': 1, 'when': 'multiline' }],
        'react/jsx-sort-props': ['warn'],
        'react/jsx-wrap-multilines': ['warn',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
            }],
        'react/jsx-closing-bracket-location': 'warn',
        'react/jsx-curly-spacing': 'warn',
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'warn',
        'react/jsx-curly-brace-presence': [
            'warn',
            { props: 'never', children: 'never' },
        ],
        'react/jsx-curly-newline': 'warn',
        //#region  //*=========== Unused Import ===========
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        //#endregion  //*======== Unused Import ===========

        //#region  //*=========== Import Sort ===========
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // ext library & side effect imports
                    ['^@?\\w', '^\\u0000'],
                    // {s}css files
                    ['^.+\\.s?css$'],
                    // Lib and hooks
                    ['^@/lib', '^@/hooks'],
                    // static data
                    ['^@/data'],
                    // components
                    ['^@/components', '^@/container'],
                    // zustand store
                    ['^@/store'],
                    // Other imports
                    ['^@/'],
                    // relative paths up until 3 level
                    [
                        '^\\./?$',
                        '^\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\./\\.\\.(?!/?$)',
                    ],
                    ['^@/types'],
                    // other that didnt fit in
                    ['^'],
                ],
            },
        ],
        //#endregion  //*======== Import Sort ===========
    },
    globals: {
        React: true,
        JSX: true,
    },
};
