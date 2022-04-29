i=0; count=0;
function Median_Discrete_X()
{
        count++;
        var a = document.getElementById("addlimits8");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","t"+(i++));
        a.appendChild(b);
}
j=0; count=0;
function Median_Discrete_Y()
{
        count++;
        var c = document.getElementById("addlimits9");
        var d = document.createElement("input");
        d.setAttribute("type","number");
        d.style.display="block";
        d.setAttribute("id","u"+(j++));
        c.appendChild(d);
}
i=0; j=0; 
temp=0;
sumf=0;
med=0;
var x = new Array(100);
var f = new Array(100);
var cf = new Array(100);
var median;
function Find_Med_D()
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
        for(i=j+1;i<count;i++)
        {
            if(Number(x[j])>Number(x[i]))
            {
                temp = x[i];
                x[i] = x[j];
                x[j] = temp;
                temp = f[i];
                f[i] = f[j];
                f[j] = temp;
            }
        }
    }
    for(j=0;j<count;j++)
    {
        sumf = parseFloat(sumf) + parseFloat(f[j]);
    }
    j=0;
    for(j=0;j<count;j++)
    {
        if(isNaN(cf[j]))
        {
            cf[j] = j;
        }
        for(i=0;i<j+1;i++)
        {
           switch(i)
           {
            case 0 : cf[j] = parseFloat(cf[j]) + parseFloat(f[i]); break;
            default : cf[j] = parseFloat(cf[j]) + parseFloat(f[i])-1; break;
            }
        }
    }  
    document.write('<body><h2><b><u>Soln</u> :-</b><br><br></body><style>body{background-color:ghostwhite;color:black;text-align:justify;margin-left:5%;}</style>');
    document.write('Arrange X values in Ascending Order and sort f values accordingly');
    document.write('<br><br><table border="1" width="40%"><tr><td width="15.5%"><b><center>X</center></b></td><td width="15.5%"><b><center>f</center></b></td><td width="15.5%"><b><center>c.f</center></b></td></tr></table>');
    for(j=0;j<count;j++)
    {
        document.write(`<table border="1" width="40%"><tr><td width="15.5%"><b><center>${x[j]}</center></b></td><td width="15.5%"><b><center>${f[j]}</center></b></td><td width="15.5%"><b><center>${cf[j]}</center></b></td></tr></table>`);
    }
    document.write('<br><br>&#8721f = ',sumf);
    document.write('<br>Here N = ',sumf);
    document.write('<br>Formula : m = sizeof(N+1)/2th item');
    document.write('<br>= sizeof(',sumf,'+1)/2th item');
    document.write('<br>= sizeof(',sumf+1,')/2th item');
    med = (sumf+1)/2;
    for(j=0;j<count;j++)
    {
        if(cf[j] >= med)
        {   
            document.write('<br>',cf[j],' >= ',med);
            median = x[j];
            document.write('<br>Median = ',median);
            break;
        }
    }
    document.writeln('<br><br><a href="#"><font>&#171 Back</font></a></body><style>a{color:red;font-size:15px;}</style>');
}
