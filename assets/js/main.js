(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*================================================
            01.mobile menu js
        ==================================================*/

        $(".mobile-menu-area").slicknav({
            prependTo: ".header-area .container"
        }); 

         /*================================================
            02.Fixed Header Variable
        ==================================================*/
        $(".header-area").sticky({
          topSpacing:0,
          smooth: true,

        });

        /*================================================
            03.hero selectbox selector js
        ==================================================*/

        $('.hero-selector').select2() 

        /*================================================
            04.Counter UP js 
        ==================================================*/
        $('.counter').counterUp({
                delay: 10,
                time: 2000,
            }); 

     

   
        

    });

    jQuery(window).load(function() {



    });

}(jQuery));