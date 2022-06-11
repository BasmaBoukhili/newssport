/*load more*/
var i = 0;
function read()
{
    if(!i)
    {
        document.getElementById("more").style.display = "flex";
        document.getElementById("loadmore").innerHTML = "شاهد أقل...";
        i=1;
    }
    else
    {
        document.getElementById("more").style.display = "none";
        document.getElementById("loadmore").innerHTML = "شاهد أكثر...";
        i=0;
    }
}
var j=1;
function read1()
{
    if(!j)
    {
        document.getElementById("more1").style.display = "flex";
        document.getElementById("loadmore1").innerHTML = "شاهد أقل...";
        i=j=1;
    }
    else
    {
        document.getElementById("more1").style.display = "none";
        document.getElementById("loadmore1").innerHTML = "شاهد أكثر...";
        j=0;
    }
}