describe("Testing throwDice", function(){
  var evenNumber, oddNumber;
  //executes before all test
  beforeEach(function() {
    evenNumber = 6;
    oddNumber = 7;
  });
  //test
  it("it does not return null", function() {
    expect(throwDice()).not.toBe(null);
  });
  //test
  it("it does return an integer", function() {
    expect(throwDice()).toMatch(/\d{1,}/);
  });
  //test
  it("it returns a number greater than zero", function() {
    expect(throwDice()).not.toBeLessThan(0);
  });
  //test
  it("it returns a number less than six", function() {
    expect(throwDice()).toBeLessThan(7);
  });


});
