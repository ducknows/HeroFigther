module.exports = {
  // Specify test file patterns using globs
  spec: ['test/**/*.test.mjs', 'client/shared/game/**/*.test.js'], 

  // Set the reporter to use for test results (e.g., 'spec', 'nyan', 'json')
  reporter: 'spec',

  // Set a timeout for each test case (in milliseconds)
  timeout: 5000,

  // Define custom setup and teardown scripts
  // before: 'path/to/setup.js',
  // after: 'path/to/teardown.js',
};
