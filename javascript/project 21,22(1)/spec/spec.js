var modulePow = require('../js/script.js');


describe("A suite", function() {
  it("positive degree", function() {
    // prepare
    var result;
    // act
      result = modulePow.pow(2, 3);
    // assert

    expect(result).toBe( 2 * 2 * 2);
  });

  it("negative degree", function() {
    // prepare
    var result;
    // act
      result = modulePow.pow(10, -2);
    // assert
    expect(result).toBe( 0.01);
  });

  it("zero", function() {

    // prepare
    var result;
    // act
      result = modulePow.pow(10, 0);
    // assert

    expect(result).toBe( 1);
  });

});
