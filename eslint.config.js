import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'import/newline-after-import': ['error', { considerComments: false }],
  },
})
