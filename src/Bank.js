(function(exports){
  function Bank(){
    this._balance = 0;
    this._balanceHistory = new BalanceHistory;
  };

  Bank.prototype.getBalance = function(){
    return this._balance;
  };

  Bank.prototype.deposit = function(amount, date){
    this._balance += amount;
    this._balanceHistory.addDeposit(amount, date, this.getBalance());
  };

  Bank.prototype.withdraw = function(amount, date){
    if(amount > this._balance) {
      throw new Error("You can't make the withdrawel: Insufficient funds")
    }
    this._balance -= amount;
    this._balanceHistory.addWithdrawel(amount, date, this.getBalance());
  };

  Bank.prototype.statement = function(){
    var history = this._balanceHistory.getHistory();
    var statement = "<table><tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr>";
    for(i = 0; i < history.length; i += 1) {
      if(history[i][0] === "debit") {
        statement += "<tr><td>" + history[i][2].toDateString() + "</td><td></td><td>" + history[i][1] + "</td><td>" + history[i][3] + "</td></tr>";
      } else {
        statement += "<tr><td>" + history[i][2].toDateString() + "</td><td>" + history[i][1] + "</td><td></td><td>" + history[i][3] + "</td></tr>";
      }
    };
    return  statement += "</table>"
  };

  Bank.prototype.updateView = function(){
    var table = document.getElementById("statement");
    table.innerHTML = this.statement();
  };

  exports.Bank = Bank;

})(this);
