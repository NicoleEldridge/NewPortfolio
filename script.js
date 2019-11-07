$(document).ready(() => {
//Mobile Drop Menu
  $('#mobileMenu').on('click', () => {
    $('#mobileDropMenu').show();
  })

  $('#Close').on('click', () => {
    $('#mobileDropMenu').hide();
  })

//Social Icon Rollovers
  $('#linkedIn').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/SocialIcons/linkedIn_teal.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/SocialIcons/linkedIn.png');
  });

  $('#gitHub').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/SocialIcons/GitHub_Teal.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/SocialIcons/GitHub-Mark-64px.png');
  });

  $('#behance').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/SocialIcons/behance_teal.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/SocialIcons/behance.png');
  });


//Skill Bar Animations
  $('.HTML').on('mouseenter', event => {
    $(event.currentTarget).animate({
        width: '90%'
    });
  });

//Rollover Portfolio Images
$('#portfolioWeb').on('mouseenter', event => {
  $(event.currentTarget).attr('src', 'Images/CoverImages/Coding_Cover.png');
}).on('mouseleave', event => {
  $(event.currentTarget).attr('src', 'Images/CoverImages/Website_Cover.png');
});

$('#wedding').on('mouseenter', event => {
  $(event.currentTarget).attr('src', 'Images/CoverImages/Wedding_ThankYouTag.png');
}).on('mouseleave', event => {
  $(event.currentTarget).attr('src', 'Images/CoverImages/Wedding_Invite.png');
});

  $('#teaCozy').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/TeaCozy_ScreenShot_2.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/TeaCozy_ScreenShot_1.png');
  });

  $('#brayInvite').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Bray_Harrel_Sheehan_Event_Invite_2.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Bray_Harrel_Sheehan_Event_Invite.png');
  });

  $('#guineaPigs').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Guinea-Pig-Illustrations-Misty.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Guinea-Pig-Illustrations-Gypsy.png');
  });

  $('#riverviews').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Riverviews_Inside.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Riverviews_Cover.png');
  });

  $('#tcMouse').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Town_CountryMouse-Inside.png');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Town_CountryMouseCover.png');
  });

  $('#animatedDate').on('mouseenter', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Animated-Date.gif');
  }).on('mouseleave', event => {
    $(event.currentTarget).attr('src', 'Images/CoverImages/Animated-Date.png');
  });

//Lightbox
  $('.portfolioPageImg').on('click', () => {
    $('.lightbox').show();
  });

  $('.portfolioPageImg2').on('click', () => {
    $('.lightbox2').show();
  });

  $('.portfolioPageImg3').on('click', () => {
    $('.lightbox3').show();
  });
  
  $('#imgClose').on('click', () => {
    $('.lightbox').hide();
  });

  $('#imgClose2').on('click', () => {
    $('.lightbox2').hide();
  })

  $('#imgClose3').on('click', () => {
    $('.lightbox3').hide();
  })
});