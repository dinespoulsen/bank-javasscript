(function(exports){
  function Bank(){
    this._balance = 0;
    this._balanceHistory = new BalanceHistory;
  };

  Bank.prototype.getBalance = function(){
    return this._balance;
  };

  Bank.prototype.deposit = function(amount, date = new Date()){
    if(isNaN(amount) || amount < 0) {
      throw new Error("You can't make the deposit: Amount is smaller than 0")
    } else {
      this._balance += amount;
      var transaction = new Transaction("credit", date, amount, this.getBalance());
      this._balanceHistory.addDeposit(transaction);
    }
  };

  Bank.prototype.withdraw = function(amount, date){
    if(amount > this._balance) {
      throw new Error("You can't make the withdrawel: Insufficient funds")
    }
    this._balance -= amount;
    var transaction = new Transaction("debit", date, amount, this.getBalance());
    this._balanceHistory.addWithdrawel(transaction);
  };

  Bank.prototype.statement = function(){
    var history = this._balanceHistory.getHistory();
    var statement = "<table><tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr>";
    for(i = 0; i < history.length; i += 1) {
      if(history[i].getType() === "debit") {
        statement += "<tr><td>" + history[i].getDate() + "</td><td></td><td>" + history[i].getAmount().toFixed(2) + "</td><td>" + history[i].getBalance().toFixed(2) + "</td></tr>";
      } else {
        statement += "<tr><td>" + history[i].getDate() + "</td><td>" + history[i].getAmount().toFixed(2) + "</td><td></td><td>" + history[i].getBalance().toFixed(2) + "</td></tr>";
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
