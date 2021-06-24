function compute()
{
        let principal = document.getElementById('principal').value;
        var rate = document.getElementById("rate").value;
        let years = document.getElementById("years").value;
        var interest = principal*years*rate/100;
        var year = new Date().getFullYear()+parseInt(years);
        let amount = interest*1;
 //amount validation check
        if(principal<1){
            alert("Please enter a positive number");
            principal.focus();
            }
        else {
        document.getElementById("result").innerHTML="\<br\>\<br\>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\><br\>"
}}


function updateRate()
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval

}
