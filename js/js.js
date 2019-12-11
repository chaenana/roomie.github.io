console.log("load");
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        //hash 라는건 알아서 다음꺼로 계산을 해주는? 그런거인듯함
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


$(document).ready(function(){
	
	$(document).on('mouseover', '[data-toggle="attribute"]', function () {
			var $target = $($(this).data('target'));
			var img_switch = $(this).data('switch');
			$target.attr('src', img_switch);
			
			return false;
		});

});


// 마우스커서


//마우스 커서
var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");

window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e) {
    var posX = e.clientX, posY = e.clientY;
    TweenMax.to($cursorDot, 0.1,{css : {top:posY,left:posX}, ease : Quad.easeInOut});
    TweenMax.to($cursorBG, 0.18,{css : {top:posY,left:posX}, ease : Quad.easeInOut});

}

