var scroll = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el)
{
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var YPos = currentY + window.innerHeight;
  var animator = setTimeout('autoScrollTo(\''+el+'\')', speed);
  if (YPos > bodyHeight)
  {
    clearTimeout(animator);
  }
else if (currentY < targetY-distance)     
{
  scrollY = currentY+distance;
  window.scroll(0, scrollY);
}
  else
  {
    clearTimeout(animator);
  }
}

function resetScroller(el)
{
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var animator = setTimeout('resetScroller(\''+el+'\')',speed);
  if (currentY > targetY)
      {
        scrollY = currentY - distance;
        window.scroll(0, scrollY);
      }
   else
       {
        clearTimeout(animator);
        }
}


//$(document).ready(function(){


//});
  