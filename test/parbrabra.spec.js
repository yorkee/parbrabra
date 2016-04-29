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

  it("should return false if it does not close", function() {
    expect(parbrabra('[hello')).equals(false);
  });

  it("should return true if it close propely", function() {
    expect(parbrabra('[hello]')).equals(true);
  });

  it("should return true if it wrapped with multiple PBB", function() {
    expect(parbrabra('{([hello])}')).equals(true);
  });

  it("should return true if multiple text wrap with muitple PBB", function() {
    expect(parbrabra('{([hello])(hehehe)}[hahaha]')).equals(true);
  });

  it("should return false if the don't match", function() {
    expect(parbrabra('{([hello)](hehehe)}[hahaha]')).equals(false);
  });

  it("should return false if they don't match without text", function() {
    expect(parbrabra('{([)]()}[]')).equals(false);
  });

  it("should return true if multiple brackets without text", function() {
    expect(parbrabra('{([])()}[]')).equals(true);
  });

  it("should return false if multiple brackets without text that does not close", function() {
    expect(parbrabra('{([])()}[')).equals(false);
  });
});