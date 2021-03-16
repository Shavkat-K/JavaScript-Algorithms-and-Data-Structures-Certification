function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var currency = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]
let drawerCash = 0;
cid.forEach(bill => drawerCash += bill[1])
let drawer = {
  status: '',
  change: []
}
  let changeArr = []
  if(change <= drawerCash){
    for (let index = cid.length -1; index >= 0; index--){
      if (change >= currency[index][1] && cid[index][1] !== 0) {
        let unitAmount = cid[index][1] 
        if (unitAmount > change){
          let bills = currency[index][1] * Math.floor(change/currency[index][1])
          change === drawerCash? drawer.status = 'CLOSED': drawer.status = 'OPEN'
          changeArr.push(currency[index])
          changeArr[changeArr.length-1][1] = bills
          cid[index][1] -= bills
          change -= bills
          change = change.toFixed(2)
          drawer.change = changeArr
        } else {
          change === drawerCash? drawer.status = 'CLOSED': drawer.status = 'OPEN'
          changeArr.unshift(currency[index])
          changeArr[0][1] = unitAmount
          cid[index][1] = 0;
          change -= unitAmount
          change = change.toFixed(2)
          drawer.change = changeArr
        }
      } else if (cid[index][1] === 0) {
        changeArr.unshift(cid[index])
      }
    }
  } else {
    drawer.status = 'INSUFFICIENT_FUNDS'
    return drawer
  }
  if(change > 0){
    drawer.status = 'INSUFFICIENT_FUNDS'
    drawer.change = []
  }
  changeArr.sort((a,b) => b[1]-a[1])
  return drawer;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
