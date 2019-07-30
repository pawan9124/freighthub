exports.config = {
  specs: ["./scripts/seleniumTestCase.js"],
  capabilities: {
    browserName: "chrome"
  },
  baseUrl: "http://localhost:4000",
  framework: "jasmine"
};
