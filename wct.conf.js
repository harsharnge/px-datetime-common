module.exports = {
  verbose: false,
  plugins: {
    local: {
        browsers: ['chrome', 'firefox']
    },
    sauce: {
      disabled: true,
      "browsers": [{
          "browserName": "microsoftedge",
          "platform": "Windows 10",
          "version": ""
        }, {
          "browserName": "internet explorer",
          "platform": "Windows 8.1",
          "version": "11"
        },
        {
          "browserName": "safari",
          "platform": "OS X 10.11",
          "version": "9"
        }, {
          "browserName": "safari",
          "platform": "OS X 10.10",
          "version": "8"
        }
      ]
    }
  },
  suites: [
    'test/px-datetime-entry-test-fixture.html'
  ]
};
