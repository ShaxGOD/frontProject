var visionButton = document.querySelector('#vision');
var missionButton = document.querySelector('#mission');
var paragraphs = document.querySelectorAll('.vision-mission .infos p');



visionButton.addEventListener('click', function(){
    missionButton.className = '';
    visionButton.className = 'activeB';
    paragraphs[0].innerHTML = 'We’re a nimble San Francisco video production company helping brands and organizations push the world forward.';
    paragraphs[1].innerHTML = 'Through new ways of reaching your audience, and being an integral part of the process all the way from concept to consumer, we help create a different future.';
});


missionButton.addEventListener('click', function(){
    missionButton.className = 'activeB';
    visionButton.className = '';
    paragraphs[0].innerHTML = 'Showing someone > telling someone. We are here to elevate the video industry and we’re taking you with us. These video solutions are becoming definable services in order to streamline the process and deliver more targeted videos.';
    paragraphs[1].innerHTML = 'Our seven-part mini-course will show you practical ways to guide customers through every step from Awareness to Conversion—and beyond.';
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
//Yandex Map
    ymaps.ready(init);
    function init(){ 
      var myMap = new ymaps.Map("map", {
        center: [43.223982, 76.955514],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    }),

    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.223982, 76.955514]
        },
        properties: {
            hintContent: 'ProLine studio'
        }
    }),
    myRectangle = new ymaps.Rectangle([
      [43.226067, 76.954825],
      [43.222226, 76.959986]
  ], {
      hintContent: 'Buildings of ProLine holding',
      balloonContent: 'ProLine holding area'
  }, {
      fillColor: '#7df9ff33',
      fillOpacity: 0.5,
      strokeColor: '#0000FF',
      strokeOpacity: 0.5,
      strokeWidth: 2,
      borderRadius: 6
  });
  var myPolyline = new ymaps.Polyline([
    [43.219093,76.955568],
    [43.219002, 76.960254],
    [43.215595, 76.958502],
    [43.215699, 76.954157],
    [43.219093,76.955568]
], {
    balloonContent: "Our Removable platform"
}, {
    balloonCloseButton: false,
    strokeColor: "#000000",
    strokeWidth: 4,
    strokeOpacity: 0.5
});
    myMap.geoObjects
    .add(myGeoObject)
    .add(myRectangle)
    .add(myPolyline)
    }
    window.onscroll = function() {navFunction()};

    var navbar = document.getElementById("myTopnav");
    var sticky = navbar.offsetTop;
    
    function navFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    function changeBackground(x) {
      x.style.backgroundColor = "#ddd";
    }
    function removeBackground(x) {
      x.style.backgroundColor="white";
    }