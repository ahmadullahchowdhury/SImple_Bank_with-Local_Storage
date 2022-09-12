/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function (){
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  

  const warnElm = document.getElementById('warn')
  if( isNaN(newWithdrawAmount)){
    alert('put some amount')
    return
  }
  else if(newWithdrawAmount > previousBalanceTotal){
    warnElm.classList.remove('hidden')
    warnElm.innerText = `Your don't have ${newWithdrawAmount} Taka in your account`
    return
  }

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotal);
  localStorage.setItem('withdraw-amount', newWithdrawTotal)

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
  localStorage.setItem('balance-amount',newBalanceTotal)

  loadIntoUI()
  

});


function loadIntoUI1(){

  const newWithDrawTotalLocalStorage =  localStorage.getItem('withdraw-amount')

  if(newWithDrawTotalLocalStorage){
    setTextElementValueById("withdraw-total", newWithDrawTotalLocalStorage);
  }
  else{
    setTextElementValueById("withdraw-total", 0);
  }
}
loadIntoUI()
  