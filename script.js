$(document).ready(function(){

 
  $('#bottonClick').click(function(){
    $('#clickResult').text("hello!");
  });

  
  $('#bottonHide').click(function(){
    $('.textHide').hide();
  });

 
  $('#bottonShow').click(function(){
    $('.textShow').show();
  });

  
  $('#bottonToggle').click(function(){
    $('.toggleBox').toggle();
  });

  
  $('#bottonSlideDown').click(function(){
    $('.slideDownBox').slideDown();
  });

 
  $('#bottonSlideUp').click(function(){
    $('.slideUpBox').slideUp();
  });

  
  $('#bottonSlideToggle').click(function(){
    $('.slideToggleBox').slideToggle();
  });


  $('#bottonFadeIn').click(function(){
    $('.fadeInBox').fadeIn();
  });

  $('#bottonFadeOut').click(function(){
    $('.fadeOutBox').fadeOut();
  });


  $('#bottonAddClass').click(function(){
    $('#addClassText').addClass('highlight');
  });


  $('#bottonBefore').click(function(){
    $('#beforeText').before("I didn’t know how to use jQuery.");
  });

 
  $('#bottonAfter').click(function(){
    $('#afterText').after("I will use jQuery to make interactive web pages.");
  });

 
  $('#bottonAppend').click(function(){
    $('#appendBox').append(" text added");
  });

  
  $('#bottonHtml').click(function(){
    $('#htmlBox').html("<b>HTML content changed!</b>");
  });

  
  $('#bottonAttr').click(function(){
    $('#attrImg').attr('src', 'HTML.png');
  });


  $('#bottonVal').click(function(){
    let value = $('#inputVal').val();
    $('#valResult').text("You typed: " + value);
  });


  $('#bottonText').click(function(){
    $('#textBox').text(" text  updated");
  });

});
