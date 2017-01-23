describe("balanceHistory", function(){
  var myBalanceHistory;

  beforeEach(function(){
    myBalanceHistory = new BalanceHistory();
  });

  it("should be able to add a deposit to history", function(){
    myBalanceHistory.addDeposit(10);
    expect(myBalanceHistory.getHistory().length).toEqual(1);
  });

  it("should be able to add a withdrawel to history", function(){
    myBalanceHistory.addWithdrawel(10);
    expect(myBalanceHistory.getHistory().length).toEqual(1);
  });
});
