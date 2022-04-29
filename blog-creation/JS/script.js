var btnText = document.getElementById("read-more");
function showMore()
{
     var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  if (dots.style.display === "none") 
  {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } 
  else 
  {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }

}
var btnText2 = document.getElementById("read-more2");
function showMore_t(){
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  if (dots2.style.display === "none") 
  {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } 
  else 
  {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}
