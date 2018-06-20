let moneyList = ["$1,000,000", "$2,000", "$10,000"];
function changeStringToNum(num){
  let result = ''
  for(let i = 0; i < num.length; i++){
    if(!isNaN(num[i])){
      result += num[i];
    }
  }
  result = parseInt(result);
  return result;
}
let goodMoneyList = [];
for(let i = 0; i < moneyList.length; i++){
  let goodMoney = changeStringToNum(moneyList[i]);
  goodMoneyList.push(goodMoney);
}
let sum = 0;
for(let i = 0; i < goodMoneyList.length; i++){
  sum += goodMoneyList[i]
}
console.log(sum);
