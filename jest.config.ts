import type { Config } from '@jest/types';

// using below config was raising error, so we used package.json instead
// this file is useful to typescript suggestions anyways

const config: Config.InitialOptions = {
  // with below threshold
  // jest will fail if
  // there is less than 80% branch, functions or lines coverage
  // or more than 10 uncovered statements
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
export default config;
