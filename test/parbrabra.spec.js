describe('Parbrabra', function() {

  it("should exist", function() {
    expect(parbrabra).to.be.instanceof(Function);
  });

  it("should return true if input is empty", function() {
    expect(parbrabra('')).equals(true);
  });

  it("should return true if input has no pbb", function() {
    expect(parbrabra('hello')).equals(true);
  });

});