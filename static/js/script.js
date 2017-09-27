"use strict";

jQuery(function() {
    /**
     * generate toc if exists
     */
    jQuery("#toc").toc({
        "selectors": "h2,h3,h4,h5,h6",
        "container": ".body"
    });

    /**
     * hide / show toc button
     */
    jQuery("#tochideshow").click(function() {
        jQuery("#toc").fadeToggle("slow", function() {
            jQuery("#tochideshow").text().match(/hide/i) ? jQuery("#tochideshow").text("Show") : jQuery("#tochideshow").text("Hide");
        });
    });

	/**
     * add anchor on headlines
     */
    jQuery("h2,h3,h4,h5,h6").filter("[id]").each(function () {
        jQuery(this).html( "<a class=\"anchor\" href=\"#" + jQuery(this).attr("id") + "\">" + jQuery(this).html() + "</a>" );
    });

    /**
     * swipe-left to go to the next page
     */
    if (window.innerWidth <= 766)
        jQuery("body").hammer().bind("swipeleft", function(){
            var lc = jQuery(this).data("nextpage");
            if (lc)
                window.location.href = lc;
        });

    /**
     * swipe-right to got to the previous page
     */
    if (window.innerWidth <= 766)
        jQuery("body").hammer().bind("swiperight", function(){
            var lc = jQuery(this).data("previouspage");
            if (lc)
                window.location.href = lc;
        });
});