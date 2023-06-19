

export default  {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};