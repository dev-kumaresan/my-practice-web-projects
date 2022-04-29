i=0; count=0;
function Mean_Individual()
{
        count++;
        var a = document.getElementById("addlimits");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","t"+(i++));
        a.appendChild(b);
}
i=0;
sumx=0;
var mean;
var x = new Array(100); 
function Find_MI()
{
  for(i=0;i<count;i++)
  {
    x[i] = document.getElementById("t"+(i)).value;
  }
  for(i=0;i<count;i++)
  {
    sumx= parseFloat(sumx) + parseFloat(x[i]);
  }
  mean = sumx / count;
  document.writeln('<body><h2><b>Mean :-</b><br></body><style>body{background-color:ghostwhite;color:black;text-align:justify;margin-left:5%;}</style>');
  for(i=0;i<=count;i++)
  {
   if(i!=count)
   {
     document.writeln(x[i],' + ');
   }
   if(i==count)
   {
     x[i]=0;
     document.writeln(x[i]);
   }
  }
  document.writeln(' = ',sumx);
  document.writeln('<br>',sumx,' / ',count," = ",mean);
  document.writeln('<br><br>:. Mean = ',mean);
  document.writeln('<body><br><br><a href="#"><font>&#171 Back</font></a></body><style>a{color:red;font-size:15px;}</style>');
}
