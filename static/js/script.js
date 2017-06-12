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
});