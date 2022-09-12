

function depositBtnClkd() {

  const newDepositAmount = getInputFieldValueById("deposit-field");
  console.log('new deposit entered', newDepositAmount)

  if(isNaN(newDepositAmount)){
    alert('you must enter some taka to deposit')
    return
  }

  const previousDepositTotal = getTextElementValueById("deposit-total");


  const newDepositTotal = parseInt(previousDepositTotal) + newDepositAmount; 
  setTextElementValueById("deposit-total", newDepositTotal);
  localStorage.setItem('deposit-amount', newDepositTotal)
  
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  
  const previousBalanceTotal = getTextElementValueById("balance-total");

  const newBalanceTotal = parseInt(previousBalanceTotal) + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
  localStorage.setItem('balance-amount', newBalanceTotal)
  
  loadIntoUI()


  // console.log('total balance',newBalanceTotal)



}
function loadIntoUI(){

  const newDepositTotalLocalStorage =   localStorage.getItem('deposit-amount')

  if(newDepositTotalLocalStorage){
    setTextElementValueById("deposit-total", newDepositTotalLocalStorage);
  }
  else{
    setTextElementValueById("deposit-total", 0);
  }


  const newBalanceTotalLocalStorage  =   localStorage.getItem('balance-amount')

  if(newBalanceTotalLocalStorage){
    setTextElementValueById("balance-total", newBalanceTotalLocalStorage);
  }else{
    localStorage.setItem('balance-amount', 1250)
    setTextElementValueById("balance-total", 1250);
  }

}
loadIntoUI()

  // return newDepositTotalLocalStorage


// console.log(depositBtnClkd())

// function loadUI{
//   const newDepositTotalLocalStorageReturned = depositBtnClkd()
//   setTextElementValueById("deposit-total", newDepositTotalLocalStorageReturned);
// }

// loadUI()


// function balanceTotal(){

// }

  // const textElement = document.getElementById('deposit-total');
  // textElement.innerText = `${localStorage.getItem('deposit-amount')}`;

  // get previous balance by using the function


;
