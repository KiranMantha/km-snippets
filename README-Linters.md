## eslint

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // TODO - need to fix all warnings given by below rules and then need to turn them on
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
```

## prettier

```javascript
module.exports = {
  singleQuote: true,
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'none',
  endOfLine: 'auto',
};
```

## stylelint

```javascript
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    // TODO - need to fix all errors given by below rules and then need to turn them on
    'no-empty-source': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': null,
  },
};
```

## using variable in javascript regex

```javascript
let utf = { '#': '123', '(': '456', ')': '789' };
let name = '#(#test)#';
Object.keys(utf).forEach((val) => {
  let str = `[${val}]`;
  name = name.replace(new RegExp(str, 'g'), utf[val]);
});
console.log(name);
```
