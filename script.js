function compute()
{
    p = document.getElementById("principal").value;
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    si = p*n*r/100;
    x = 2021;
    y=n;
    cyear = parseInt(x) + parseInt(y);
   document.getElementById("compute").innerHTML="If you deposit "+ p + ","+ "\n" + "at an interest rate of " + r + "."+ "\n" + "You will receive an amount of " + si + ","+ "\n" + "in the year " + cyear;
if (p.length==0) {
    alert('Enter principal amount');
  } else if (isNaN(p) || p < 1) {
            alert("Input entered is not valid");
        }
 else {
    alert("Input OK");
return false
  }  
       
}
        
