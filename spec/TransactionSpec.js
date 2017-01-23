describe("transaction", function(){
  var transaction

  beforeEach(function(){
    myDebit = new Transaction("debit", "03/26/2016", 10, 10);
    myCredit = new Transaction("credit", "03/26/2016", 10, 10);
  });

  it("should be reconizable", function(){
    expect(myDebit.getType()).toEqual("debit");
  });

  it("should keep a date of transaction", function(){
    expect(myDebit.getDate()).toEqual("Sat Mar 26 2016")
  });

  it("should keep information about amount", function(){
    expect(myDebit.getAmount()).toEqual(10)
  });

  it("should keep information about the balance", function(){
    expect(myDebit.getBalance()).toEqual(10)
  });
});
