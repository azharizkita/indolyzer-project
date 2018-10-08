(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 60,
      getActiveElement:   function(id) {
        console.log(id)
      }
    });
    $('.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space
