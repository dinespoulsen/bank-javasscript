
(function(exports){
  function Transaction(type, date, amount, balance){
    this._type = type;
    this._date = new Date(date);
    this._amount = parseFloat(amount);
    this._balance = balance;
    this.getType = function(){
      return this._type;
    };
    this.getDate = function(){
      return this._date.toDateString();
    };
    this.getAmount = function(){
      return this._amount;
    };
    this.getBalance = function(){
      return this._balance;
    };
  };

  exports.Transaction = Transaction;
})(this);
