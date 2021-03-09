console.log ("Your index file is loaded correctly!");

$(document).ready(function(){
    $('.enlarge').hover(function() {
        $(".enlarge").addClass('transition');
    
    }, function() {
        $(".enlarge").removeClass('transition');
    });
});

$(document).ready(function(){
    $('#enlargeimg').hover(function() {
        $("#enlargeimg").addClass('transitionimg');
    
    }, function() {
        $("#enlargeimg").removeClass('transitionimg');
    });
});

$(document).ready(function(){
    $('.enlarge1').hover(function() {
        $(".enlarge1").addClass('transition');
    
    }, function() {
        $(".enlarge1").removeClass('transition');
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
