function Transaction(type){
  this._type = type;
  this.getType = function(){
    return this._type;
  };
};

var myType = new Transaction("debit");
console.log(myType);
