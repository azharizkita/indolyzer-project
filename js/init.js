(function($){
  $(function(){
    $('.sidenav').sidenav({
      draggable: true
    });
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 60,
      getActiveElement: function(id) {
        if (id == "layanan") {
          $("#moto").css("animation-play-state", "running");
          setTimeout(function() { 
            $("#iotCard").css("animation-play-state", "running");
            setTimeout(function() { 
              $("#itcCard").css("animation-play-state", "running");
              setTimeout(function() { 
                $("#adCard").css("animation-play-state", "running");
              }, 500);
            }, 500);
          }, 500);
        }

        if (id == "about") {
          $("#aboutText").css("animation-play-state", "running");
        }

        if (id == "penanggungjawab") {
          $("#moto2").css("animation-play-state", "running");
          setTimeout(function() { 
            $("#manCard").css("animation-play-state", "running");
            setTimeout(function() { 
              $("#ceo1").css("animation-play-state", "running");
              setTimeout(function() { 
                $("#ceo2").css("animation-play-state", "running");
                $("#ceo3").css("animation-play-state", "running");
                setTimeout(function() { 
                  $("#se1").css("animation-play-state", "running");
                  $("#he1").css("animation-play-state", "running");
                  setTimeout(function() { 
                    $("#se2").css("animation-play-state", "running");
                    $("#he2").css("animation-play-state", "running");
                    $("#se3").css("animation-play-state", "running");
                    $("#he3").css("animation-play-state", "running");
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }

        if (id == "gallery") {
          $("#galleryText").css("animation-play-state", "running");
          setTimeout(function() { 
            $("#containerGallery").css("animation-play-state", "running");
            setTimeout(function() { 
              $("#downBeat").css("animation-play-state", "running");
            }, 1000);
          }, 1000);
        }

        if (id == "contact") {
          $("#contactInfo").css("animation-play-state", "running");
          setTimeout(function() { 
            $("#blockDown").css("animation-play-state", "running");
            setTimeout(function() { 
              $("#downBeat").css("animation-play-state", "running");
            }, 1000);
          }, 1000);
        }

      }
    });
    $('.tabs').tabs();
  });
})(jQuery);

var officeBtn = document.getElementById('officeButton');
var productBtn = document.getElementById('productButton');
var activitiesBtn = document.getElementById('activitiesButton');
officeBtn.disabled = false;
productBtn.disabled = false;
activitiesBtn.disabled = false;

var activated = false;

$( document ).ready(function() {

  officeBtn.onclick = function() {
    $("#galleryContent").empty();
    var div = document.getElementById('galleryContent');
    var table = document.createElement('div');
    table.className = 'carousel carousel-slider fade-in-fwd';
    productBtn.disabled = false;
    activitiesBtn.disabled = false;

    var link1 = document.createElement('a');
    link1.className = 'carousel-item';
    link1.src = '#one!';
    var img1 = document.createElement('img');
    img1.src = './assets/gallery/office/1.jpg';
    div.appendChild(table);
    table.appendChild(link1);
    link1.appendChild(img1);

    var link2 = document.createElement('a');
    link2.className = 'carousel-item';
    link2.src = '#two!';
    var img2 = document.createElement('img');
    img2.src = './assets/gallery/office/2.jpg';
    div.appendChild(table);
    table.appendChild(link2);
    link2.appendChild(img2);

    var link3 = document.createElement('a');
    link3.className = 'carousel-item';
    link3.src = '#two!';
    var img3 = document.createElement('img');
    img3.src = './assets/gallery/office/3.jpg';
    div.appendChild(table);
    table.appendChild(link3);
    link3.appendChild(img3);

    var link4 = document.createElement('a');
    link4.className = 'carousel-item';
    link4.src = '#two!';
    var img4 = document.createElement('img');
    img4.src = './assets/gallery/office/4.jpg';
    div.appendChild(table);
    table.appendChild(link4);
    link4.appendChild(img4);

    var link5 = document.createElement('a');
    link5.className = 'carousel-item';
    link5.src = '#two!';
    var img5 = document.createElement('img');
    img5.src = './assets/gallery/office/5.jpg';
    div.appendChild(table);
    table.appendChild(link5);
    link5.appendChild(img5);

    var link6 = document.createElement('a');
    link6.className = 'carousel-item';
    link6.src = '#two!';
    var img6 = document.createElement('img');
    img6.src = './assets/gallery/office/6.jpg';
    div.appendChild(table);
    table.appendChild(link6);
    link6.appendChild(img6);

    officeBtn.disabled = true;
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true
    });
  }

  productBtn.onclick = function() {
    $("#galleryContent").empty();
    var div = document.getElementById('galleryContent');
    var table = document.createElement('div');
    table.className = 'carousel carousel-slider fade-in-fwd';
    officeBtn.disabled = false;
    activitiesBtn.disabled = false;

    var link1 = document.createElement('a');
    link1.className = 'carousel-item';
    link1.src = '#one!';
    var img1 = document.createElement('img');
    img1.src = './assets/gallery/products/1.jpg';
    div.appendChild(table);
    table.appendChild(link1);
    link1.appendChild(img1);

    var link2 = document.createElement('a');
    link2.className = 'carousel-item';
    link2.src = '#two!';
    var img2 = document.createElement('img');
    img2.src = './assets/gallery/products/2.jpg';
    div.appendChild(table);
    table.appendChild(link2);
    link2.appendChild(img2);

    var link3 = document.createElement('a');
    link3.className = 'carousel-item';
    link3.src = '#three!';
    var img3 = document.createElement('img');
    img3.src = './assets/gallery/products/3.jpg';
    div.appendChild(table);
    table.appendChild(link3);
    link3.appendChild(img3);

    var link4 = document.createElement('a');
    link4.className = 'carousel-item';
    link4.src = '#four!';
    var img4 = document.createElement('img');
    img4.src = './assets/gallery/products/4.jpg';
    div.appendChild(table);
    table.appendChild(link4);
    link4.appendChild(img4);

    var link5 = document.createElement('a');
    link5.className = 'carousel-item';
    link5.src = '#five!';
    var img5 = document.createElement('img');
    img5.src = './assets/gallery/products/5.jpg';
    div.appendChild(table);
    table.appendChild(link5);
    link5.appendChild(img5);

    var link6 = document.createElement('a');
    link6.className = 'carousel-item';
    link6.src = '#six!';
    var img6 = document.createElement('img');
    img6.src = './assets/gallery/products/6.jpg';
    div.appendChild(table);
    table.appendChild(link6);
    link6.appendChild(img6);

    productBtn.disabled = true;
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true
    });
  }

  activitiesBtn.onclick = function() {
    $("#galleryContent").empty();
    var div = document.getElementById('galleryContent');
    var table = document.createElement('div');
    table.className = 'carousel carousel-slider fade-in-fwd';
    officeBtn.disabled = false;
    productBtn.disabled = false;

    var link1 = document.createElement('a');
    link1.className = 'carousel-item';
    link1.src = '#one!';
    var img1 = document.createElement('img');
    img1.src = './assets/gallery/activities/1.jpg';
    div.appendChild(table);
    table.appendChild(link1);
    link1.appendChild(img1);

    var link2 = document.createElement('a');
    link2.className = 'carousel-item';
    link2.src = '#two!';
    var img2 = document.createElement('img');
    img2.src = './assets/gallery/activities/2.jpg';
    div.appendChild(table);
    table.appendChild(link2);
    link2.appendChild(img2);

    var link3 = document.createElement('a');
    link3.className = 'carousel-item';
    link3.src = '#three!';
    var img3 = document.createElement('img');
    img3.src = './assets/gallery/activities/3.jpg';
    div.appendChild(table);
    table.appendChild(link3);
    link3.appendChild(img3);

    activitiesBtn.disabled = true;
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true
    });
  }

});

