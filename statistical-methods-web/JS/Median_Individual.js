i=0; count=0;
function Median_Individual()
{
        count++;
        var a = document.getElementById("addlimits7");
        var b = document.createElement("input");
        b.setAttribute("type","number");
        b.style.display="block";
        b.setAttribute("id","t"+(i++));
        a.appendChild(b);
}
temp=0;
m=0;
var i=0;
var j=0;
var median;
var x = new Array(100);
function Find_Med_I()
{
    for(i=0;i<count;i++)    
    {
        x[i] = document.getElementById("t"+(i)).value;
    }
    for(i=0;i<count;i++)
    {
        for(j=i+1;j<count;j++)
        {
            if(Number(x[i])>Number(x[j]))
            {
                temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }
    document.write('<body><h2><b><u>Soln</u> :-</b><br><br></body><style>body{background-color:ghostwhite;color:black;text-align:justify;margin-left:5%;}</style>');
    document.write('Arrange the Data in Ascending Order');
    document.write('<br><br><table border="1" width="5%"><tr><td width="15.5%"><b><center>X</center></b></td></tr></table>');
    for(i=0;i<count;i++)
    {
        document.write(`<table border="1" width="5%"><tr><td><b><center>${x[i]}</center></b></td></tr></table>`);
    }
    document.write('<br>Here n = ',count);
    m = (count+1)/2;
    document.write('<br>Formula : m = sizeof(n+1)/2th item');
    document.write('<br>n = sizeof(',count,'+1)/2th item');
    document.write('<br>n = sizeof(',count+1,')/2th item');
    if(count%2==1)
    {
        document.write('<br>n = sizeof(' ,m,'th) item');
    }
    else if(count%2==0)
    {
        m = parseInt(m);
        document.write('<br>n = sizeof(',(parseFloat(m)+parseFloat(m+1))/2,') th item');
    }
    for(i=0;i<m;i++)
    {
        if(count%2==1)
        {
            median = x[i];
        }
        else if(count%2==0)
        {
            median = (parseFloat(x[i]) + parseFloat(x[i+1]))/2;
        }
    }
    document.write('<br>:. Median = ',median);
    document.writeln('<br><br><a href="#"><font>&#171 Back</font></a></body><style>a{color:red;font-size:15px;}</style>');
}
