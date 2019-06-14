var john = {
  bills:[124, 48, 268, 180, 42],
  tips:[],
  amounts:[],
  calculateTips: function(){
    for(i=0; i < this.bills.length; i++){
      var bill = this.bills[i];
      var tip;

      if(bill < 50){
        tip = bill * 0.20;
        this.tips.push(tip)
        this.amounts.push(bill + tip)
      } else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15;
        this.tips.push(tip)
        this.amounts.push(bill + tip)
      } else {
        tip = bill * 0.10;
        this.tips.push(tip)
        this.amounts.push(bill + tip)
      }
    }
  }
}
john.calculateTips();
console.log(john)