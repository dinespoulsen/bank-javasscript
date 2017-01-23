window.onload = function(){
  var bank = new Bank();
  var amount = document.getElementById("amount");
  var deposit = document.getElementById("deposit");
  var withdraw = document.getElementById("withdrawel");
  var statement = document.getElementById("withdraw");
  var message = document.getElementById("error-message");

  deposit.addEventListener("click", function(){
    if(isNaN(amount.value) || amount.value < 0) {
      message.innerHTML = "Input has to be a positive value!"
    } else {
      bank.deposit(parseFloat(amount.value));
      amount.value = "";
      bank.updateView();
    }

  })

  withdraw.addEventListener("click", function(){
    if(isNaN(amount.value) || amount.value < 0) {
      message.innerHTML = "Input has to be a positive value!"
    } else {
      bank.withdraw(parseFloat(amount.value));
      amount.value = "";
      bank.updateView();
    }
  });

};
