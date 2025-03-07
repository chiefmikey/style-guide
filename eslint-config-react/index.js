import baseConfig from '@mikey-pro/eslint-config';
import reactAppConfig from 'eslint-config-react-app-bump';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPerformancePlugin from 'eslint-plugin-react-perf';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

const reactConfig = [
  ...baseConfig,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-perf': reactPerformancePlugin,
      'testing-library': testingLibraryPlugin,
      'jest-dom': jestDomPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    languageOptions: {
      parserOptions: {
        ...baseConfig.languageOptions.parserOptions,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          ...baseConfig.languageOptions.parserOptions.babelOptions,
          presets: [
            ...baseConfig.languageOptions.parserOptions.babelOptions.presets,
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },
    },
    rules: {
      ...reactAppConfig.rules,
      ...baseConfig.rules,

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': [
        'error',
        {
          additionalHooks: '(useAsync|useAsyncCallback|useMemoizedCallback)',
          enableDangerousAutofixThisMayCauseInfiniteLoops: false,
        },
      ],

      // Accessibility
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',

      // Modern React
      'react/hook-use-state': 'warn',
      'react/jsx-no-leaked-render': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-array-index-key': 'warn',

      // Performance
      'react-perf/jsx-no-new-object-as-prop': 'warn',
      'react-perf/jsx-no-new-array-as-prop': 'warn',
      'react-perf/jsx-no-new-function-as-prop': 'warn',

      // Modern Patterns
      'react/prefer-stateless-function': 'error',
      'react/no-unused-prop-types': 'warn',
      'react/no-unstable-nested-components': ['error', {
        allowAsProps: true,
        customValidators: ['memo', 'Suspense'],
      }],
      'react/jsx-no-constructed-context-values': ['error', {
        allowObjectLiteral: false,
        checkFragmentShorthand: true,
      }],

      // Existing rules...
      'react/display-name': ['warn', { ignoreTranspilerName: false }],
      'react/function-component-definition': [
        'off',
        { namedComponents: 'arrow-function' },
      ],
      'react/jsx-curly-spacing': 'warn',
      'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
        },
      ],
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-undef': 'warn',
      'react/jsx-tag-spacing': ['warn', { beforeSelfClosing: 'always' }],
      'react/jsx-uses-vars': 'warn',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'warn',
      'react/no-did-mount-set-state': 'warn',
      'react/no-did-update-set-state': 'warn',
      'react/no-find-dom-node': 'warn',
      'react/no-is-mounted': 'warn',
      'react/no-string-refs': 'warn',
      'react/prefer-es6-class': 'warn',
      'react/prefer-stateless-function': 'warn',
      'react/require-render-return': 'warn',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: false,
        },
      ],
      'react/state-in-constructor': 'off',

      // Testing Library
      'testing-library/await-async-queries': 'error',
      'testing-library/no-await-sync-queries': 'error',
      'testing-library/prefer-screen-queries': 'warn',
      'testing-library/no-node-access': 'error',
      'testing-library/prefer-presence-queries': 'error',
      'testing-library/prefer-user-event': 'error',
      'testing-library/prefer-query-by-disappearance': 'error',
      'testing-library/prefer-find-by': 'error',

      // Testing Best Practices
      'jest-dom/prefer-checked': 'error',
      'jest-dom/prefer-in-document': 'error',
      'jest-dom/prefer-to-have-attribute': 'error',
      'jest-dom/prefer-enabled-disabled': 'error',
      'jest-dom/prefer-required': 'error',

      // Additional Performance
      'react/no-object-type-as-default-prop': 'warn',
      'react-perf/jsx-no-jsx-as-prop': ['error', {
        allowDestructuredProps: true,
      }],

      // Advanced React Performance
      'react/jsx-handler-names': ['warn', {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
      }],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

      // React 18+ Features
      'react/prefer-read-only-props': 'warn',
      'react/no-unused-class-component-methods': 'error',
      'react/no-arrow-function-lifecycle': 'error',

      // Testing Best Practices
      'testing-library/no-container': 'error',
      'testing-library/no-node-access': ['error', { allowContainerFirstChild: true }],
      'testing-library/prefer-explicit-assert': 'warn',
      'jest-dom/prefer-focus': 'error',

      // React 18.2+ Features
      'react/hook-use-state': ['error', {
        allowDestructuredState: true,
        allowStatefulImports: false
      }],
      'react/no-unstable-default-props': ['error', {
        forbidAllDefaults: true
      }],
      'react/prefer-exact-props': 'error',

      // Enhanced Testing
      'testing-library/no-render-in-lifecycle': 'error',
      'testing-library/prefer-wait-for': 'error',
      'testing-library/no-wait-for-empty-callback': 'error',

      // Performance Guards
      'react/forbid-dom-props': ['error', { forbid: ['style'] }],
      'react-perf/jsx-no-new-function-as-prop': ['error', {
        allowInlineArrows: true,
        allowMethods: true
      }],
      'react/jsx-no-constructed-context-values': ['error', {
        allowObjectLiteral: false
      }],

      // Strict Mode Optimizations
      'react/jsx-no-leaked-render': ['error', {
        validStrategies: ['ternary', 'coalescing', 'suspense']
      }],

      // Advanced Testing
      'testing-library/prefer-user-event': ['error', {
        allowedMethods: ['type', 'click', 'keyboard', 'upload']
      }],
      'testing-library/render-result-naming-convention': ['error', {
        prefix: 'render'
      }],

      // Concurrent Mode
      'react/no-unstable-nested-components': ['error', {
        allowAsProps: true,
        customValidators: ['memo', 'Suspense']
      }],
      'react/jsx-no-constructed-context-values': ['error', {
        allowObjectLiteral: false,
        checkFragmentShorthand: true
      }],

      // Error Boundaries
      'react/no-unstable-default-props': ['error', {
        forbidAllDefaults: true
      }],
      'react/iframe-missing-sandbox': 'error',
      'react/jsx-no-leaked-render': ['error', {
        validStrategies: ['ternary', 'coalescing', 'suspense']
      }],

      // Testing
      'testing-library/no-global-regexp-flag-in-query': 'error',
      'testing-library/prefer-query-matchers': 'error',
      'testing-library/no-manual-cleanup': 'error'
    },
    settings: {
      ...baseConfig.settings,
      react: {
        version: 'detect',
        formComponents: ['Form'],
        linkComponents: ['Link', 'NavLink', 'RouterLink'],
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['./tsconfig.json', './tsconfig.*.json']
          }
        },
        'jsx-runtime': 'automatic'
      }
    }
  }
];

export default reactConfig;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = reactConfig;
}
