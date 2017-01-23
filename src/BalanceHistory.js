(function(exports){
  function BalanceHistory(){
    this._history = [];
  };

  BalanceHistory.prototype.getHistory = function(){
    return this._history.reverse();
  };

  BalanceHistory.prototype.addDeposit = function(amount, date, balance){
    this._history.push(["credit", amount, new Date(date), balance]);
  };

  BalanceHistory.prototype.addWithdrawel = function(amount, date, balance){
    this._history.push(["debit", amount, new Date(date), balance]);
  };

  exports.BalanceHistory = BalanceHistory;
})(this);
