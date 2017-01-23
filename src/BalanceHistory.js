(function(exports){
  function BalanceHistory(){
    this._history = [];
  };

  BalanceHistory.prototype.getHistory = function(){
    return this._history.reverse();
  };

  BalanceHistory.prototype.addDeposit = function(transaction){
    this._history.push(transaction);
  };

  BalanceHistory.prototype.addWithdrawel = function(transaction){
    this._history.push(transaction);
  };

  exports.BalanceHistory = BalanceHistory;
})(this);
