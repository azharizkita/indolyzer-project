(function($){
  $(function(){
    $('.sidenav').sidenav({
      draggable: true
    });
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
