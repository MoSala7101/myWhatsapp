//  waiting till the page is loaded

if ($(document).ready()) {
  $(".loading").css("display", "none");
}




// ad an action to the contact button
$('#contactButton').click(function () {
  // check if there an email typed
  if (!$('#contactEmail').val()) {

    window.location = '#about';

  } else {
    // then the user enter his email
    var theMessage = $('#contactEmail').val();

    var theMailLink = " mailto:7amoosala7@gmail.com?subject=About WhatsLandPage.com&body=" + theMessage + " ";

    // empty the message box
    $('#contactEmail').val('');


    window.location.href = theMailLink;

  }

});





//  add shadow to the darker section

$(".feature-section-darker").addClass("shadow-lg");
$("#share").addClass("shadow-lg");
$("#video").addClass("shadow-lg");
$("#voice").addClass("shadow-lg");
$("#messaging").addClass("shadow-lg");
$("#location").addClass("shadow-lg");
$("#security").addClass("shadow-lg");



// Adding show class when hover to the contact button
$('#contactButton').hover(function () {
  // when hover in
  $(this).addClass("shadow-lg");
},
  function () {
    // when hover out
    $(this).removeClass("shadow-lg");

  });

var cross = 0; // cross sign when clicking the menu on mobile or tablet

//  change menu icon when clicking it

$('.title-font-icon').click(function () {

  if ($(this).hasClass("fa-align-justify") && (cross == 0)) {
    $(this).css("transform", "rotate(180deg)");
    $(this).css("transition", "0.7s");
    cross = 1;
    $(this).removeClass("fa-align-justify");
    $(this).addClass("fa-times");
    return;
  }

  if ($(this).hasClass("fa-times") && (cross == 1)) {
    $(this).css("transform", "rotate(-180deg)");
    $(this).css("transition", "0.7s");


    $(this).addClass("fa-align-justify");
    $(this).removeClass("fa-times");
    cross = 0;

    return;

  }
});


// check the width of the screen to hide or show the about -footer
$(window).resize(function () {

  if ($(window).width() >= 1000) {

    // Desktop
    $('.footer-column-center').css("display", "block");
    $('.footer-grid-container').css("grid-template-columns", "1fr 1fr 1fr");
    $('.title-font-icon').css("display", "none");
    $('.menus-container-large').css("display", "block");

  } else {
    // Not a Desktop .. Movile or tablet
    $('.footer-column-center').css("display", "none");
    $('.footer-grid-container').css("grid-template-columns", "1fr 1fr");

    $('.title-font-icon').css("display", "block");
    $('.menus-container-large').css("display", "none");

  }
});


// Media query to change style if this is a desktop
if ($(window).width() >= 1000) {

  // if a Desktop 
  $('.footer-column-center').css("display", "block");
  $('.footer-grid-container').css("grid-template-columns", "1fr 1fr 1fr");
  $('.title-font-icon').css("display", "none");
  $('.menus-container-large').css("display", "block");

} else {

  // if Not a Desktop .. Mobile or tablet
  $('.footer-column-center').css("display", "none");
  $('.footer-grid-container').css("grid-template-columns", "1fr 1fr");
  $('.title-font-icon').css("display", "block");
  $('.menus-container-large').css("display", "none");

}


//  check the language
// var userLang = navigator.language || navigator.userLanguage;

// if (userLang == "en-US" || userLang == "en-UK") {
//   // disable arabic

// }

var toggled = "no";

if (toggled == "yes") {
  $("#navbarMenus").css("display", "block");


} else {
  //  hide the navbar menu container
  $("#navbarMenus").css("display", "none");

}

$('.menu-toggler').click(function () {
  // change toggled value
  if (toggled == "no") {
    toggled = "yes";
    $("#navbarMenus").css("display", "block");

  } else {
    toggled = "no";
    $("#navbarMenus").css("display", "none");

  }
});

$('.nav-item').click(function () {
  $("#navbarMenus").css("display", "none");


});


// Adding show class when hover
$('#features div a div').hover(function () {
  // when hover in
  $(this).addClass("shadow-lg");
},
  function () {
    // when hover out
    $(this).removeClass("shadow-lg");

  }


);






// Adding show class when hover
$('#download .download-device-container').hover(function () {
  // when hover in
  $(this).addClass("shadow-lg");
},
  function () {
    // when hover out
    $(this).removeClass("shadow-lg");

  }


);




// show a border aroung the section after press the shortcus of it

//  Messaging
$("#messagingCut").click(function () {

  // add animations with suitable directions
  // check the position of this feature-section

  if ($('#messaging').hasClass("feature-section-right")) {
    $('#messaging').addClass("animated");
    $('#messaging').addClass("fadeInRight");
    $('#messaging').addClass("faster");

    setTimeout(function () {
      $('#messaging').removeClass("animated");
      $('#messaging').removeClass("fadeInRight");
      $('#messaging').removeClass("faster");
    }, 500
    );
  }

  // add animations
  // check the position of this feature-section
  if ($('#messaging').hasClass("feature-section-left")) {
    $('#messaging').addClass("animated");
    $('#messaging').addClass("fadeInLeft");
    $('#messaging').addClass("faster");
    setTimeout(function () {
      $('#messaging').removeClass("animated");
      $('#messaging').removeClass("fadeInRight");
      $('#messaging').removeClass("faster");
    }, 500
    );

  }

});


// voice
$("#voiceCut").click(function () {

  // add animations
  // check the position of this feature-section
  if ($('#voice').hasClass("feature-section-right")) {
    $('#voice').addClass("animated");
    $('#voice').addClass("fadeInRight");
    $('#voice').addClass("faster");
    setTimeout(function () {
      $('#voice').removeClass("animated");
      $('#voice').removeClass("fadeInRight");
      $('#voice').removeClass("faster");
    }, 500
    );


  }
  // add animations
  // check the position of this feature-section
  if ($('#voice').hasClass("feature-section-left")) {
    $('#voice').addClass("animated");
    $('#voice').addClass("fadeInLeft");
    $('#voice').addClass("faster");
    setTimeout(function () {
      $('#voice').removeClass("animated");
      $('#voice').removeClass("fadeInLeft");
      $('#voice').removeClass("faster");
    }, 500
    );

  }
});


// video
$("#videoCut").click(function () {


  // add animations
  // check the position of this feature-section
  if ($('#video').hasClass("feature-section-right")) {
    $('#video').addClass("animated");
    $('#video').addClass("fadeInRight");
    $('#video').addClass("faster");
    setTimeout(function () {
      $('#video').removeClass("animated");
      $('#video').removeClass("fadeInRight");
      $('#video').removeClass("faster");
    }, 500
    );

  }
  // add animations
  // check the position of this feature-section
  if ($('#video').hasClass("feature-section-left")) {
    $('#video').addClass("animated");
    $('#video').addClass("fadeInLeft");
    $('#video').addClass("faster");
    setTimeout(function () {
      $('#video').removeClass("animated");
      $('#video').removeClass("fadeInLeft");
      $('#video').removeClass("faster");
    }, 500
    );

  }
});

//share
$("#shareCut").click(function () {


  // add animations
  // check the position of this feature-section
  if ($('#share').hasClass("feature-section-right")) {
    $('#share').addClass("animated");
    $('#share').addClass("fadeInRight");
    $('#share').addClass("faster");
    setTimeout(function () {
      $('#share').removeClass("animated");
      $('#share').removeClass("fadeInRight");
      $('#share').removeClass("faster");
    }, 500
    );

  }
  // add animations
  // check the position of this feature-section
  if ($('#share').hasClass("feature-section-left")) {
    $('#share').addClass("animated");
    $('#share').addClass("fadeInLeft");
    $('#share').addClass("faster");
    setTimeout(function () {
      $('#share').removeClass("animated");
      $('#share').removeClass("fadeInLeft");
      $('#share').removeClass("faster");
    }, 500
    );

  }

});

// location
$("#locationCut").click(function () {


  // add animations
  // check the position of this feature-section
  if ($('#location').hasClass("feature-section-right")) {
    $('#location').addClass("animated");
    $('#location').addClass("fadeInRight");
    $('#location').addClass("faster");
    setTimeout(function () {
      $('#location').removeClass("animated");
      $('#location').removeClass("fadeInRight");
      $('#location').removeClass("faster");
    }, 500
    );
  }
  // add animations
  // check the position of this feature-section
  if ($('#location').hasClass("feature-section-left")) {
    $('#location').addClass("animated");
    $('#location').addClass("fadeInLeft");
    $('#location').addClass("faster");
    setTimeout(function () {
      $('#location').removeClass("animated");
      $('#location').removeClass("fadeInLeft");
      $('#location').removeClass("faster");
    }, 500
    );

  }
});

// security
$("#securityCut").click(function () {


  // add animations
  // check the position of this feature-section
  if ($('#security').hasClass("feature-section-right")) {
    $('#security').addClass("animated");
    $('#security').addClass("fadeInRight");
    $('#security').addClass("faster");
    setTimeout(function () {
      $('#security').removeClass("animated");
      $('#security').removeClass("fadeInRight");
      $('#security').removeClass("faster");
    }, 500
    );

  }
  // add animations
  // check the position of this feature-section
  if ($('#security').hasClass("feature-section-left")) {
    $('#security').addClass("animated");
    $('#security').addClass("fadeInLeft");
    $('#security').addClass("faster");
    setTimeout(function () {
      $('#security').removeClass("animated");
      $('#security').removeClass("fadeInLeft");
      $('#security').removeClass("faster");
    }, 500
    );

  }

});
