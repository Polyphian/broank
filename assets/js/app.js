$(function() {
    var divNavBody = $(".navBody");
    var divNavTitleSolo = $(".navTitleSolo");
    var divNavBtn = $(".navBtn");
    var divNavIcon = $(".navIconGear");
    var heroImg = $(".heroImg");
    var heroTitle = $(".heroTitle");
    var navBro = $(".navBro");
    var heroDesc = $(".heroDesc");
    var menuBtn = $(".menuBtn");
    var navSettingsBtn = $(".navSettingsBtn");
    var navSettingsBtn2 = $(".navSettingsBtn2");
    var nav1 = $(".nav1");
    var nav2 = $(".nav2");
    var nav3 = $(".nav3");
    var divpageTitle = $(".pageTitle");
    var divpageTitle2 = $(".pageTitle2");
    var navBtnHome = $(".btnNavHome");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 26) {
          divpageTitle2.removeClass('pageTitle').addClass("pageTitleOff");
          divpageTitle.removeClass('pageTitle').addClass("pageTitleOff");
            divNavTitleSolo.removeClass('navTitleSolo').addClass("navTitleSoloS");
            divNavBody.removeClass('navBody').addClass("navBodyScroll");
            divNavBtn.removeClass('navBtn').addClass("navBtnScroll");
            divNavIcon.removeClass('navIconGear').addClass("navIconGearScroll");
            heroImg.removeClass('heroImg').addClass('heroImgScroll');
            navSettingsBtn.removeClass('navSettingsBtn').addClass('navSettingsBtnScroll');
            navSettingsBtn2.removeClass('navSettingsBtn2').addClass('navSettingsBtnScroll2');
            navBtnHome.removeClass('btnNavHome').addClass("btnNavHomeScroll");
            
        } else {
          divpageTitle2.removeClass('pageTitleOff').addClass("pageTitle");
          divpageTitle.removeClass('pageTitleOff').addClass("pageTitle");
            divNavTitleSolo.removeClass('navTitleSoloS').addClass("navTitleSolo");
            divNavBody.removeClass('navBodyScroll').addClass("navBody");
            divNavBtn.removeClass('navBtnScroll').addClass("navBtn");
            divNavIcon.removeClass('navIconGearScroll').addClass("navIconGear");
            heroImg.removeClass('heroImgScroll').addClass('heroImg'); 
            navSettingsBtn.removeClass('navSettingsBtnScroll').addClass('navSettingsBtn');
            navSettingsBtn2.removeClass('navSettingsBtnScroll2').addClass('navSettingsBtn2');
            navBtnHome.removeClass('btnNavHomeScroll').addClass("btnNavHome");
        }
    });
});

function openGlanceDL() {
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.opacity = "1";
}

function closeGlanceDL() {
  document.getElementById("main").style.top = "-100vh";
  document.getElementById("main").style.opacity = "0";
}

function openSettingThemes() {
  document.getElementById("mainWrap").style.display = "none";
  document.getElementById("themes").style.right = "0";
  document.getElementById("themes").style.opacity = "1";
  
}

function closeSettingThemes() {
  document.getElementById("mainWrap").style.display = "initial";
  document.getElementById("themes").style.right = "-100vw";
  document.getElementById("themes").style.opacity = "1";
  
}

function navMultiMenuOpen() {
  document.getElementById("navMultiTitle").classList.toggle("navMultiTitleON");
  document.getElementById("navMultiMenuDrop").classList.toggle("navMultiMenuDropON");
}

function pageCover() {
  var x2 = document.getElementById("coverBlur");

  if (x2.classList.contains("on")) {
    x2.classList.remove("on");
  } else {
    x2.classList.add("on");
  }
  
  document.getElementById("navMultiTitle").classList.toggle("navMultiTitleON");
  document.getElementById("navMultiMenuDrop").classList.toggle("navMultiMenuDropON");
}

var elements = document.querySelectorAll("[id^='btnToggleOff-']");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    this.style.display = "none";
  });
}



let pageTitle = document.getElementById("pageTitle");

window.onscroll = function() {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll >= 1) {
    window.requestAnimationFrame(function() {
      let newOpacity = 1 - (scroll - 1) / 30;
      pageTitle.style.opacity = newOpacity;
    });
  } else {
    pageTitle.style.opacity = "1";
  }
};

function clearLocalStorage() {
  localStorage.clear(); }

  function share(event) {
    event.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: 'Title of shared item',
        text: 'Description of shared item',
        url: 'https://example.com',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  }

  // Detect if the user is on an iOS device
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Show the div element if the user is on an iOS device
if (isIOS()) {
  document.getElementById("iOSDive").style.display = "block";
}