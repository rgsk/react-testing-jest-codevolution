# test-coverage

scripts.coverage contains below command

```
yarn test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'
```

--coverage -> flag generates the coverage

--watchAll -> is alternative to `a`

--collectCoverageFrom -> we can specify the file patterns to include or exclude for coverage report

## coverage-report in gui

a coverage folder is created we can access `covergage/lcov-report/index.html` to view to coverage report as gui
