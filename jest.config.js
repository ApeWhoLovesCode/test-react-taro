/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  globals: {
    // ...
    window: true,
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    ENABLE_MUTATION_OBSERVER: true,
  },
  moduleNameMapper: {
    // ...
    '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/components': '@tarojs/components/dist-h5/react',
    // '@tarojs/plugin-framework-react/dist/runtime': '<rootDir>/__mocks__/taro-framework',
  },

};
