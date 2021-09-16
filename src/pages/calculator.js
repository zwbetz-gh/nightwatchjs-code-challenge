module.exports = {
  elements: {
    number1: '#number1',
    number2: '#number2',
    operation: '#operation',
    result: '#result',
    submit: '#submit'
  },
  commands: [
    {
      setNumber1: function (val) {
        this.expect.element('@number1').to.be.enabled.before(5000);
        this.setValue('@number1', val);
        return this;
      },
      setNumber2: function (val) {
        this.expect.element('@number2').to.be.enabled.before(5000);
        this.setValue('@number2', val);
        return this;
      },
      setOperation: function (val) {
        this.expect.element('@operation').to.be.enabled.before(5000);
        this.setValue('@operation', val);
        return this;
      },
      clickSubmit: function () {
        this.expect.element('@submit').to.be.enabled.before(5000);
        this.click('@submit');
        return this;
      },
      assertResult: function (val) {
        this.assert.value('@result', val);
        return this;
      }
    }
  ]
};
