describe("App visiting site flow", function() {
  var loginUrl, homeUrl, name;

  it("registers a user and redirects to home", function() {
    browser.driver.get("http://localhost:4000");
    browser.driver.wait(function() {
      return browser.driver
        .executeScript("return document.readyState")
        .then(function(readyState) {
          return readyState === "complete";
        });
    });
    //Find the input box and put ID
    browser.driver
      .findElement(by.xpath('//*[@id="searchShipId"]'))
      .sendKeys("S1001");
    browser.sleep(2000);
    //Click the search button
    browser.driver.findElement(by.xpath('//*[@id="basic-addon2"]')).click();
    browser.sleep(4000);
    expect(
      browser.driver
        .findElement(by.xpath('//*[@id="shipmentTable"]/tbody/tr[1]/td[1]'))
        .getText()
    ).toBe("S1001");
  });

  it("test the name change and url change", function() {
    browser.sleep(3000);
    browser.driver
      .findElement(by.xpath('//*[@id="shipmentTable"]/tbody/tr[1]/td[8]/a'))
      .click();
    browser.sleep(5000);
    browser.driver
      .findElement(
        by.xpath(
          '//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/div[2]/button'
        )
      )
      .click();
    browser.sleep(500);
    browser.driver
      .findElement(
        by.xpath(
          '//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/div[1]/div/input'
        )
      )
      .sendKeys("");
    browser.sleep(800);
    browser.driver
      .findElement(
        by.xpath(
          '//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/div[1]/div/input'
        )
      )
      .sendKeys("New Name Test");
    browser.sleep(600);
    browser.driver
      .findElement(
        by.xpath(
          '//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/div[2]/div/button[1]'
        )
      )
      .click();
  });
});
