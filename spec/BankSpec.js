describe("bank", function(){
  var myBank;

  beforeEach(function(){
    myBank = new Bank();
  });

  it("should have starting balance of 0", function(){
    expect(myBank.getBalance()).toEqual(0);
  });

  it("should be able to deposit money to the balance", function(){
    myBank.deposit(10, "03/25/2016");
    expect(myBank.getBalance()).toEqual(10);
  });

  it("should thor an error if amount is not a number", function(){
    expect( function(){myBank.deposit("fg", "03/25/2016");}).toThrow(new Error("You can't make the deposit: Amount is smaller than 0"));
  });

  it("should thor an error if amount is not greater than 0", function(){
    expect( function(){myBank.deposit(-5, "03/25/2016");}).toThrow(new Error("You can't make the deposit: Amount is smaller than 0"));
  });

  it("should be able to withdraw money from the balance", function(){
    myBank.deposit(10, "03/25/2016");
    myBank.withdraw(5, "03/25/2016");
    expect(myBank.getBalance()).toEqual(5);
  });

  it("should not be able to withdraw more than the balance", function(){
    myBank.deposit(10, "03/25/2016");
    expect( function(){myBank.withdraw(11);}).toThrow(new Error("You can't make the withdrawel: Insufficient funds"));
  });

  it("should thor an error if amount is not a number when withdrawing", function(){
    expect( function(){myBank.withdraw("fg", "03/25/2016");}).toThrow(new Error("You can't make the withdrawel: Amount is smaller than 0"));
  });

  it("should thor an error if amount is not greater than 0 when withdrawing", function(){
    expect( function(){myBank.withdraw(-5, "03/25/2016");}).toThrow(new Error("You can't make the withdrawel: Amount is smaller than 0"));
  });

  it("should be able to get a statement of the balance history", function(){
    myBank.deposit(10, "03/25/2016");
    myBank.withdraw(5, "03/26/2016");
    expect(myBank.statement()).toEqual("<table><tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr><tr><td>Sat Mar 26 2016</td><td></td><td>5.00</td><td>5.00</td></tr><tr><td>Fri Mar 25 2016</td><td>10.00</td><td></td><td>10.00</td></tr></table>");
  });
});
