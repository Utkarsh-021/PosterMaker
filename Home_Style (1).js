$(document).ready(function(){
document.getElementById("content_editable").contentEditable = true; 
   $(".slidingDiv").hide();
        $(".show_hide").show();

    $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle();
    });
    $("#content_editable").css("color","red");
});
