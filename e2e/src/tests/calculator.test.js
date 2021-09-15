module.exports = {
  'do addition': function (browser) {
    const calculator = browser.page.calculator();
    calculator.navigate();
    calculator.setNumber1('3');
    calculator.setNumber2('3');
    calculator.setOperation('+');
    calculator.clickSubmit();
    calculator.assertResult('6');
    browser.end();
  },
  'do subtraction': function (browser) {
    const calculator = browser.page.calculator();
    calculator.navigate();
    calculator.setNumber1('3');
    calculator.setNumber2('3');
    calculator.setOperation('-');
    calculator.clickSubmit();
    calculator.assertResult('0');
    browser.end();
  },
  'do multiplication': function (browser) {
    const calculator = browser.page.calculator();
    calculator.navigate();
    calculator.setNumber1('3');
    calculator.setNumber2('3');
    calculator.setOperation('*');
    calculator.clickSubmit();
    calculator.assertResult('9');
    browser.end();
  },
  'do division': function (browser) {
    const calculator = browser.page.calculator();
    calculator.navigate();
    calculator.setNumber1('3');
    calculator.setNumber2('3');
    calculator.setOperation('/');
    calculator.clickSubmit();
    calculator.assertResult('1');
    browser.end();
  }
};
