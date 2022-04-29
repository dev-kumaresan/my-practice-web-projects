  i=0; count=0;
    function SecAqn()
    {
        count++;
        var a = document.getElementById("addqns");
        var b = document.createElement("input");
        b.setAttribute("type","text");
        b.style.display="block";
        b.setAttribute("id","t"+(i++));
        a.appendChild(b);
    }
    j=0; count1=0;
    function SecBqn()
    {
        count1++;
        var c = document.getElementById("addqns1");
        var d = document.createElement("input");
        d.setAttribute("type","text");
        d.style.display="block";
        d.setAttribute("id","u"+(j++));
        c.appendChild(d);
    }
function CreatePDF() 
{
    if(document.getElementById("college_name").value == "" || document.getElementById("test").value == "" || 
    document.getElementById("date").value == "" || document.getElementById("department").value == "" ||
    document.getElementById("semester").value == "" || document.getElementById("papercode").value == "" ||
    document.getElementById("subject").value == "" || document.getElementById("time").value == "" ||
    document.getElementById("subject").value == "" || document.getElementById("maxmarks").value == "" ||
    document.getElementById("myList1").value == "" || document.getElementById("myList2").value == "")
    {
        alert("Please Enter all the fields, are mandatory");
    }
    else
    {
        var doc = new jsPDF();
        doc.setFontSize(12);
        doc.rect(7, 7, doc.internal.pageSize.width - 14, doc.internal.pageSize.height - 20, 'S');
        doc.text(document.getElementById("college_name").value, 50, 15);
        doc.text(document.getElementById("test").value, 75, 21);
        doc.text(document.getElementById("date").value, 98, 21);
        doc.text(document.getElementById("department").value, 40, 30);
        doc.text(document.getElementById("semester").value, 55, 30);
        doc.text(document.getElementById("papercode").value, 95, 30);
        doc.text(document.getElementById("subject").value, 125, 30);
        doc.text(document.getElementById("time").value, 13, 40);
        doc.text(document.getElementById("maxmarks").value, 150, 40);
        doc.text(document.getElementById("myList1").value, 80, 50);
        var i=0,left=20,top=60;
        while(i<count)
        {
            
            doc.text(document.getElementById("t"+(i)).value, left, top);
            i++; 
            top+=10;

        }
        doc.text(document.getElementById("myList2").value, 80, top);
        var j=0,left1=20,top1=top+10;
        while(j<count1)
        {
            
            doc.text(document.getElementById("u"+(j)).value, left1, top1);
            j++; 
            top1+=10;

        }
        doc.save("Question_Paper.pdf");
        alert("Click 'OK' to Download !");
    }
}
