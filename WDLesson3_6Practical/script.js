// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function AverageG(){
      let G1=parseFloat(document.getElementById("G1").value);
      let G2=parseFloat(document.getElementById("G2").value);
      let G3=parseFloat(document.getElementById("G3").value);
      let op=document.getElementById("output");
      let A=(G1+G2+G3)/3
      op.innerHTML="Average is: "+ A;
}
// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
      let X1=parseFloat(document.getElementById("X1").value);
      let X2=parseFloat(document.getElementById("X2").value);
      let Y1=parseFloat(document.getElementById("Y1").value);
      let Y2=parseFloat(document.getElementById("Y2").value);
      let op=document.getElementById("out");
      let A=(Y2-Y1)/(X2-X1);
      op.innerHTML="Slope is: "+ A;
}
// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI(){
      let H=parseFloat(document.getElementById("H").value);
      let W=parseFloat(document.getElementById("W").value);
      let op=document.getElementById("put");
      let A= (W/(H*H))*703;
      op.innerHTML="BMI is: "+ A;
}