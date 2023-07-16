let celsius =document.getElementById("Celsius")
let fa=document.getElementById("fh");
console.log(celsius,fa);
function celtoFar()
{
    let output=(parseFloat(celsius.value)*9/5)+32;
    fa.value=parseFloat(output.toFixed(2));
    
}
function fartoCel()
{
    let output=(parseFloat(fa.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
}