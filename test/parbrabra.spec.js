describe('Parbrabra', function() {

  it("should exist", function(){
    expect(parbrabra).to.be.instanceof(Function);
  });

  it("should return true if input is []", function(){
    expect(parbrabra('')).equals(true);
  });
});