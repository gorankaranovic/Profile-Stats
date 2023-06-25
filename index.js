const nums = document.querySelectorAll(".number");

nums.forEach((num) => {
    num.innerText = "0";
    incrementF();
    function incrementF(){
        let  currentNum = +num.innerText;
        const dataCeil = num.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNum += Math.ceil(increment);
        if(currentNum < dataCeil){
            num.innerText = currentNum;
            setTimeout(incrementF, 50);
        }else{
            num.innerText = dataCeil;
        }
    }
})



