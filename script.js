function calculate()
{
    let principal = document.getElementById("principalamt").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principalamt").focus();
        return;
    }

    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100; //Formula to calculate interest

    let dateNow = new Date();
    let yearNow = parseInt(dateNow.getFullYear()) + parseInt(years); 
    
    let resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function ProgressValue()
{
    let slider = document.getElementById("rate");
    let output = document.getElementById("rate_display");
    output.innerHTML = slider.value; //current display
    slider.oninput = function() //updating the value
    {
        output.innerHTML = this.value;
    }  
}
function calculateCompoundInterest(){
    let p = document.getElementById("principalamt").value;
    if(p == "" || p <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principalamt").focus();
        return;
    }
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("years").value);
    const amount = p*(Math.pow((1+r/100),t));
   const interest = amount - p;
   let resultDisplay = document.getElementById("result1");
   let ci=parseFloat(p)+Math.trunc(interest);
   resultDisplay.innerHTML= "If you deposit " + "<span class='highlight'>" + p + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + r + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + Math.trunc(interest) + "</span>" + ", <br> after " + "<span class='highlight'>" + t +" years" + "</span>" + "<br> The total amount will be " +"<span class='highlight'>" + ci +"<span>";
   

}