$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) 
    {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    
    event.preventDefault(); // Prevent default anchor click behavior
    var hash = this.hash;// Store hash

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({ scrollTop: $(hash).offset().top
                            }, 900, function(){

     
      window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
      });
    } // End if
  });
  
  $("#galleryButton").on('click', function(event){
    event.preventDefault();
    
  
  });
  
  
});