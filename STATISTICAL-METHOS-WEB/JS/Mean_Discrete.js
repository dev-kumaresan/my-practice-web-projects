i=0; count=0;
function Mean_Discrete_X()
{
        count++;
        var a = document.getElementById("addlimits2");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","t"+(i++));
        a.appendChild(b);
}
j=0; count=0;
function Mean_Discrete_Y()
{
        count++;
        var c = document.getElementById("addlimits3");
        var d = document.createElement("input");
        d.setAttribute("type","number");
        d.style.display="block";
        d.setAttribute("id","u"+(j++));
        c.appendChild(d);
}
i=0; j=0;
sumf=0;
sumfx=0;
var mean;
var x = new Array(100);
var f = new Array(100);
var fx = new Array(100);
function Find_MD()
{
        count = count/2;
        for(i=0;i<count;i++)
        {
                x[i] = document.getElementById("t"+(i)).value;
                
        }
        for(j=0;j<count;j++)
        {
                f[j] = document.getElementById("u"+(j)).value;
                
        }
        for(j=0;j<count;j++)
        {
                sumf = parseFloat(sumf) + parseFloat(f[j])
        }
        for(i=0;i<count;i++)
        {
                for(j=0;j<count;j++)
                 {
                         fx[i] = parseFloat(x[i]) * parseFloat(f[j]);
                 }
        }
        for(i=0;i<count;i++)
        {
                sumfx = parseFloat(sumfx) + parseFloat(fx[i]);
        }
        mean = sumfx / sumf;
        document.write('<body><h2><b><u>Soln</u> :-</b><br></body><style>body{background-color:ghostwhite;color:black;text-align:justify;margin-left:5%;}</style>');
        document.write('<br><br><table border="1" width="40%"><tr><td width="33.5%"><b><center>X</center></b></td><td width="33.5%"><b><center>f</center></b></td><td><b><center>fx</center></b></td></tr></table>');
        for(i=0,j=0;i<count,j<count;i++,j++)
        {
                 document.write(`<table border="1" width="40%"><tr><td width="33.5%"><b><center>${x[i]}</center></b></td><td width="33.5%"><b><center>${f[i]}</center></b></td><td><b><center>${fx[i]}</center></b></td></tr></table>`); 
        }
        document.write('<br><br>&#8721f = ',sumf);
        document.write('<br>&#8721fx = ',sumfx);
        document.write('<br><br>Mean = ',sumfx,' / ',sumf,' = ',mean);
        document.writeln('<br><br><a href="#"><font>&#171 Back</font></a></body><style>a{color:red;font-size:15px;}</style>');
} 
