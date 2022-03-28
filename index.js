
class Calculator{
    constructor(x,y){
        //properties
        this.x = x
        this.y = y
    }
    p () {
      return Math.PI
    }
    e () {
      return  Math.E
    }
    ratio (){
      let rat =this.y * (Math.E ** this.x)
      return rat
    }

    add (){
      let sum = this.x + this.y
      return sum
    }
    sqrt (){
      let res = Math.sqrt(this.x)
      return res
    }
    percentage(){
  return (this.x/100)*this.y;
}
subtract (){
  let sum = this.x - this.y
  return sum
}
multiply (){
  let sum = this.x * this.y
  return sum
}
divide (){
  let sum = this.x / this.y === 0 ? console.log(" -->>> Error") : console.log("is oky number " + + this.y)  ;
  return sum
}
modulation(){
  let sum = this.x % this.y === 0 ? console.log(" -->>> Error") : console.log("is oky number " + + this.y)  ;
  return sum
}
elevate(){
  let sum = Math.pow(this.x , this.y)
  return sum
 }

 sqrt(){
   let sum = Math.sqrt(this.x)
   return sum
  }

}

let mycalculator =  new Calculator(10,2)
console.log(mycalculator.p());
console.log(mycalculator.e());
console.log(mycalculator.ratio());
console.log(mycalculator.add());
console.log(mycalculator.sqrt());
console.log(mycalculator.percentage());
console.log(mycalculator.subtract());
console.log(mycalculator.multiply());
mycalculator.divide();
mycalculator.modulation();
console.log(mycalculator.elevate());
console.log(mycalculator.sqrt());
