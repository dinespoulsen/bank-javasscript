describe("transaction", function(){
  var transaction

  beforeEach(function(){
    myDebit = new Transaction("debit");
    myCredit = new Transaction("credit");
  });

  it("should be reconizable", function(){
    expect(myDebit.getType()).toEqual("debit");
  });
});
