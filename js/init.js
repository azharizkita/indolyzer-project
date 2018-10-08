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
              }, 1000);
            }, 1000);
          }, 1000);
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
