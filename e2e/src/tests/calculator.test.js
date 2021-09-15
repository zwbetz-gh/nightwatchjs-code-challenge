module.exports = {
  'do addition': function (browser) {
    const calculator = browser.page.calculator();
    calculator.navigate();
    calculator.setNumber1('1');
    calculator.setNumber2('2');
    calculator.setOperation('+');
    calculator.clickSubmit();
    calculator.assertResult('3');
    browser.end();
  }
};
