var bill = document.querySelector('#bill');
var people = document.querySelector('#nmbr-ppl');
var percents = document.querySelectorAll('.percent');

var costTip = document.getElementById('top')
var total = document.getElementById('total')

var zero = document.querySelector(".zero");

var reset = document.querySelector(".reset");
var custom = document.querySelector(".percent-custom");

var tip;
var tipRate;
var billAmount;
var currentRate;
var numberOfPeople;
var tipEach;

bill.addEventListener("input", (e)=>{
    billAmount = parseFloat(e.target.value);
})

people.addEventListener("input", ()=>{
    numberOfPeople = parseInt(people.value);
   
    getTipAndTotal(numberOfPeople);
})

percents.forEach((rate)=>{
    rate.addEventListener("click", (e)=>
    {
          if(billAmount !=null && numberOfPeople !== 0){
            var current = e.target;
            current.classList.add("active");
            tipRate = parseInt(e.target.innerHTML);
          
            tip = billAmount * tipRate/100;
        
            getTipAndTotal(numberOfPeople);
          }
    })
})

custom.addEventListener("input", (e)=>{
    tipRate = parseInt(e.target.value);

    tip = billAmount * tipRate/100;
    getTipAndTotal(numberOfPeople);
})

function getTipAndTotal(numberOfPeople){

    if(numberOfPeople === 0){
        zero.style.display="block";
        people.style.outline = "2px solid red";
      }
      else{
        zero.style.display ="none";
        people.style.outline = "none";
  
        var tip = tipRate * billAmount /100;
        console.log(tip);
        
        tipEach = tip/numberOfPeople;
        
        costTip.innerHTML = (tipEach).toFixed(2);
        
        total.innerHTML = ((billAmount + tip)/numberOfPeople).toFixed(2);
    }
}

reset.addEventListener("click", ()=>{
    location.reload();
})