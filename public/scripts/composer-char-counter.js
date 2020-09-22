$(document).ready(function () {
  //Count input characters when typing text in textarea element and display in counter element
  let count = $('.counter').val();
  $('#tweet-text').on('keyup', function () {
    let input = $('#tweet-text').val();
    $('.counter').val(count - input.length);
    //Change color if the number of input characters > 140
    if ($('.counter').val() < 0) {
      $('.counter').css("color", "#FF0000");
    } else {
      $('.counter').css("color", "#000000");
    }
  });

  //Handling the Hover using JQuery mouseover event
  $('.tweet').on('mouseover', function () {
    $(this).find("span").val();
  });
  $('.tweet').on('mouseout', function () {
    $(this).find("span").val("");
  });
});