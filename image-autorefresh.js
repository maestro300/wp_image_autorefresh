/**
 * Created by kvu022 on 8/22/14.
 */

jQuery(document).ready(function(){

    /* set image width to the same as container */
    jQuery('img.image_autorefresh')
    		.not('.image_autorefresh_changed_width')
    		.css('width',(jQuery('#content')
    		.width()));


    /* when the window regains focus, reload all images */
    jQuery(document).focus(function(){
        jQuery('img.image_autorefresh').each(function(){
               d = new Date();

               if(this.dataset.query == ''){
            	   document.getElementById(this.id).src = this.dataset.src + "?" + d.getTime();
               }else{
            	   document.getElementById(this.id).src = this.dataset.src  + "?" + d.getTime() + "&" + this.dataset.query;
               } 
        });

    });

});
