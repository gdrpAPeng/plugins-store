module.exports = {
  extends: [
      'eslint-config-alloy/vue',
  ],
  globals: {
      // 这里填入你的项目需要的全局变量
      // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
      //
      // Vue: false
  },
  rules: {
      // 这里填入你的项目需要的个性化配置，比如：
       'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
      /**
         * 模版中使用 4 个空格缩进
         * @category Improving Readability
         * @fixable
         */
        'vue/html-indent': ['error', 2],
        /**
         * 一个缩进必须用四个空格替代
         * @category Uncategorized
         */
        'vue/script-indent': [
            'error',
            2,
            {
                switchCase: 1
            }
        ],
        "vue/eqeqeq": "off",
        "eqeqeq": "off",
        "quotes": ["error", "single"],
        "semi": [2, "never"],
        "no-console": "off",
        "vue/max-attributes-per-line": ["error", {
            "singleline": 1,
            "multiline": {
            "max": 1,
            "allowFirstLine": false
            }
        }],
        'vue/valid-v-bind-sync': 0,
        'vue/component-definition-name-casing': 0,
        'vue/component-tags-order': 0,
        'vue/no-deprecated-scope-attribute': 0,
        'vue/valid-v-slot': 0,
        'vue/no-reserved-component-names': 0,
        'vue/no-irregular-whitespace': 0,
        'vue/no-empty-pattern': 0,
        'vue/no-deprecated-slot-scope-attribute': 0,
        'vue/no-deprecated-slot-attribute': 0,
        'vue/no-duplicate-attributes': 0
  }
};