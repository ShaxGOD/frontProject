var visionButton = document.querySelector('#vision');
var missionButton = document.querySelector('#mission');
var paragraphs = document.querySelectorAll('.vision-mission .infos p');



visionButton.addEventListener('click', function(){
    missionButton.className = '';
    visionButton.className = 'activeB';
    paragraphs[0].innerHTML = 'Ljbkjdfvkjdn dknbkjngkjnkbjnkjnbkjkjpisicing elit.';
    paragraphs[1].innerHTML = 'Lorem ipsum dlorem6 Lorem ipsum dolor si consectetur adipisicing eliisicing elit.';
    paragraphs[2].innerHTML = 'Lorem Lorem ipsum dolor sit. adipisicing elit.';
});


missionButton.addEventListener('click', function(){
    missionButton.className = 'activeB';
    visionButton.className = '';
    paragraphs[0].innerHTML = 'Misionfvj';
    paragraphs[1].innerHTML = 'birdenkeler zhasasn go';
    paragraphs[2].innerHTML = 'biduuuuuuuuuuuuuuuuuuuuuuu';
});
  function onClickImage() {
    location.href="https://bxfilms.tv/?utm_source=themanifest.com&utm_medium=referral&utm_campaign=video-production"
  }
  $(document).ready(function(){
    $("#hideAdOrShow").click(function(){
      $("#ad-image").toggle();
    });
  });
  $(document).ready(function(){
    $("#show-second-ad").click(function(){
      $("#second-ad").fadeToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#flip").click(function(){
      $(".ads").slideToggle();
    });
  });
  $(document).ready(function(){
    $("#third-button-ad").click(function(){
      $("#tripods").animate({
        height: 'toggle'
      });
    });
  });
  $(document).ready(function(){
    $("#fadeTo").click(function(){
      $("#mac-ad").fadeTo(5000, 0);
    });
    $("#stop").click(function(){
      $("#mac-ad").stop();
    });
  });
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  