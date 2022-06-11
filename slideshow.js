var i = 0,
images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg","img5.jpg"],
time = 10000;
function changeImeg()
{
    document.slide.src= images[i];
    if (i<images.length-1)
    {
        i++;
    }
    else
    {
        i = 0;
    }
    setTimeout("changeImeg()", time);
}
window.onload = changeImeg;