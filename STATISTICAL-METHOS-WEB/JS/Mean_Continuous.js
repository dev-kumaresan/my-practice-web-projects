i=0; count=0;
function Mean_Continuous_X()
{
        count++;
        var a = document.getElementById("addlimits4");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","t"+(i++));
        a.appendChild(b);
}
j=0; count=0;
function Mean_Continuous_Y()
{
        count++;
        var a = document.getElementById("addlimits5");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","u"+(j++));
        a.appendChild(b);
}
k=0; count=0;
function Mean_Continuous_f()
{
        count++;
        var a = document.getElementById("addlimits6");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","v"+(k++));
        a.appendChild(b);  
}
sumf=0;
sumfm=0;
var mean;
var x = new Array(100);
var y = new Array(100);
var f = new Array(100);
function Find_MC()
{
        count = count/3;
        for(i=0;i<count;i++)
        {
                x[i] = document.getElementById("t"+(i)).value;
        }
        for(j=0;j<count;j++)
        {
                y[j] = document.getElementById("u"+(j)).value;
        }
        for(k=0;k<count;k++)
        {
                f[k] = document.getElementById("v"+(k)).value;
        }
        for(k=0;k<count;k++)
        {
                sumf = parseFloat(sumf) + parseFloat(f[k]);
        }
        document.write('<body><h2><b><u>Soln</u> :-</b><br></body><style>body{background-color:ghostwhite;color:black;text-align:justify;margin-left:5%;}</style>');
        document.write('<br><br><table border="1" width="40%"><tr><td width="15.5%"><b><center>X</center></b></td><td width="15.5%"><b><center>f</center></b></td><td width="15.5%"><b><center>m</center></b></td><td width="15.5%"><b><center>fm</center></b></td></tr></table>');
        for(i=0,j=0,k=0;i<count,j<count,k<count;i++,j++,k++)
        {
                document.write(`<table border="1" width="40%"><tr><td width="15.5%"><b><center>${x[i]}-${y[j]}</center></b></td><td width="15.5%"><b><center>${f[k]}</center></b></td><td width="15.5%"><b><center>${(parseFloat(x[i])+parseFloat(y[j]))/2}</center></b></td><td width="15.5%"><b><center>${parseFloat(f[k])*(parseFloat(x[i])+parseFloat(y[j]))/2}</center></b></td></tr></table>`)
        }
        for(i=0,j=0,k=0;i<count,j<count,k<count;i++,j++,k++)
        {
                sumfm = parseFloat(sumfm) + (parseFloat(f[k])*(parseFloat(x[i])+parseFloat(y[j]))/2); 
        }
        mean = sumfm / sumf;
        document.write("<br><br>&#8721f = ",sumf);
        document.write("<br>&#8721fm = ",sumfm);
        document.write("<br>Mean = ",sumfm," / ",sumf," = ",mean);
        document.writeln('<br><br><a href="#"><font>&#171 Back</font></a></body><style>a{color:red;font-size:15px;}</style>');
}
