// Nav bar link click
$(document).ready(function(){
      $( '#nav_options li' ).on( 'click', function() {
            $( this ).parent().find( '.active' ).removeClass( 'active' );
            $( this ).find('.btn').addClass( 'active' );
        
            $('#nav_options').scrollTo({duration:1000});
      });
});
// ---


/*
TODO: Active click = good
      smooth slide on link click
      project pic
      form contact
      
      social media
      contact form
      */