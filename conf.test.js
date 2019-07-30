exports.config = {
  specs: ["./e2e/scripts/seleniumTestCase.js"],
  capabilities: {
    browserName: "firefox"
  },
  baseUrl: "http://localhost:4000",
  framework: "jasmine"
};
