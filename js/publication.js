/*
 * @cond LICENSE
 * ######################################################################################
 * # LGPL License                                                                       #
 * #                                                                                    #
 * # This file is part of the jQuery BibJSON Publication Plugin                         #
 * # Copyright (c) 2017, Philipp Kraus (philipp.kraus@flashpixx.de)                     #
 * # This program is free software: you can redistribute it and/or modify               #
 * # it under the terms of the GNU Lesser General Public License as                     #
 * # published by the Free Software Foundation, either version 3 of the                 #
 * # License, or (at your option) any later version.                                    #
 * #                                                                                    #
 * # This program is distributed in the hope that it will be useful,                    #
 * # but WITHOUT ANY WARRANTY; without even the implied warranty of                     #
 * # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                      #
 * # GNU Lesser General Public License for more details.                                #
 * #                                                                                    #
 * # You should have received a copy of the GNU Lesser General Public License           #
 * # along with this program. If not, see http://www.gnu.org/licenses/                  #
 * ######################################################################################
 * @endcond
 */


"use strict";
(function() {

    var pluginname = "publication";

    // ---- jQuery initialization -------------------------------------------------------------------------------------------

    /**
     * plugin initialize
     *
     * @param options any options
     */
    jQuery.fn[pluginname] = function (options) {
        var plugin = this.data("plugin_" + pluginname);

        if (!plugin) {
            plugin = new Publication(this, jQuery.extend(true, {}, jQuery.fn[pluginname].defaultSettings, options || {}));
            this.data("plugin_" + pluginname, plugin);
        }

        return plugin;
    };


    /**
     * default settings
     */
    jQuery.fn[pluginname].defaultSettings = {
        
        // ajax url of the BibJSON data
        bibjson : null,

        // http url of the BibTeX data (optional)
        bibtex : null,



        // css class name to hide items
        csshidden : "hidden",

        // css class nem to show items
        cssvisible : "visible",
        
        // css class name of each publication entry
        cssentry  : "publication",
        
        // data-field name to store the BibTeX ID
        datafield : "bibtexid",

        // cross-domain ajax request
        crossdomain: false,



        // callback to generate a publication entry
        callbackEntryGenerator : function( po ) { return jQuery( "<li>" ); },

        // callback to generate a callback to define css ids
        callbackIDGenerator : function( po_this ) { 
            var lc_id = po_this.dom.attr("id"); 
            if ( !lc_id ) 
                throw new Error( "parent object needs an id attribute" ); 
            return function(i) { return lc_id + "-" + i.replace(/[^a-z0-9\-_]|^[^a-z]+/gi, "_"); }; 
        },

        // finish callback to determine successful execution
        callbackFinish : null,


        // any other callbacks, which are called in-order within each entry
        // numeric keys allows to order the function calling
        callbackEntry : {
            
            // title
            0 : function( po_this, po ) { 
                    var lo = jQuery('<span class="title">'); 
                    lo.append( po.URL ? jQuery("<a>").attr("href", po.URL ).append( po.title ) : po.title ); 
                    if ( po.DOI )
                        lo.append(' (')
                          .append( 
                              jQuery("<a>").attr("href", "https://doi.org/" + po.DOI)
                                           .attr("target", "_blank")
                                           .html("DOI")
                          )
                          .append(')');
                    return lo; 
            },

            // authors
            10 : function( po_this, po ) {
                    if (!po.author)
                        return null;

                    var lo = jQuery('<span class="author">'); 
                    lo.append( 
                        po.author.map( function(i) { 
                            return i.given && i.family 
                                ? i.family + ( i["dropping-particle"] ? " " + i["dropping-particle"] : "" ) + ", " + i.given + "."
                                : ( i["literal"] ? i["literal"] : null ); 
                        })
                        .filter(function(i) { return i != null; }).join(", ") 
                    ); 
                    return lo; 
            },

            // publishing
            20 : function( po_this, po ) {
                    var lo = jQuery('<span class="publishing">');
                    var la = [];

                    if ( po["container-title"] )
                        la.push( po["container-title"] );

                    if ( po["collection-number"] )
                        la.push( "number " + po["collection-number"] );

                    if ( ( po["issue"] ) && ( po["issued"] ) ) 
                        la.push( po["issue"] + "." + (jQuery.isNumeric(po["issue"]) ? "" : " ") + po["issued"]["date-parts"].map(function(i) { return i.join(" ") }) );

                    if ( po["volume"] )
                        la.push( "volume " + po["volume"] );

                    if ( po["page"] )
                        la.push( "page " + po["page"] );

                    if ( po["publisher"] )
                        la.push( po["publisher"] );
            
                    if (la.length == 0)
                        return null;

                    lo.append( la.join(", ") );
                    return lo;
            },

            // editors
            30 : function( po_this, po ) {
                    if ( !po.editor )
                        return null;

                    var lo = jQuery('<span class="editor">');    
                    lo.append( 
                        po.editor.map( function(i) { 
                            return i.given && i.family 
                                ? i.family + ( i["dropping-particle"] ? " " + i["dropping-particle"] : "" ) + ", " + i.given[0] + "."
                                : null; 
                        })
                        .filter(function(i) { return i != null; }).join(", ") 
                    );
                    return lo;     
            },
            // text
            40: function( po_this, po ) {
                    var lo = jQuery( "<p>" ).attr( "class", "publicationtext" );
                    lo.append(
                      jQuery( "<a>" )
                      .attr("name", "#publication-" + po.id )
                      .attr("href", "/publications/#publication-" + po.id )
                      .attr("title", po.id)
                      .append( "&#128206;&nbsp;&nbsp;" )
                    );
                    // authors
                    if ( po.author )
                        lo.append(
                          jQuery('<em>').append(
                            po.author.map( function(i) { 
                                return i.given && i.family 
                                    ? i.family + ( i["dropping-particle"] ? " " + i["dropping-particle"] : "" ) + ", " + i.given[0] + "."
                                    : ( i["literal"] ? i["literal"] : null ); 
                            })
                            .filter(function(i) { return i != null; }).join("; ") 
                          )
                        );
                    // year
                    if ( po.issued && po.issued["date-parts"][0][0] )
                        lo.append(
                          " (" + po.issued["date-parts"][0][0] + "). "
                        );
                    // title
                    lo.append( po.URL ? jQuery("<a>").attr("href", po.URL ).append( titlecase( po.title ) + "." ) : titlecase( po.title ) + "." ); 
                    if ( po.DOI )
                        lo.append(' (')
                          .append( 
                              jQuery("<a>").attr("href", "https://doi.org/" + po.DOI)
                                           .attr("target", "_blank")
                                           .html("DOI")
                          )
                          .append(').');
                    // publisher
                    var la = [];

                    if ( po["container-title"] )
                        la.push( po["container-title"] );

                    if ( po["collection-number"] )
                        la.push( "number " + po["collection-number"] );

                    if ( ( po["issue"] ) && ( po["issued"] ) ) 
                        la.push( po["issue"] + "." + (jQuery.isNumeric(po["issue"]) ? "" : " ") + po["issued"]["date-parts"].map(function(i) { return i.join(" ") }) );

                    if ( po["volume"] )
                        la.push( "volume " + po["volume"] );

                    if ( po["page"] )
                        la.push( "page " + po["page"] );

                    if ( po["publisher"] )
                        la.push( po["publisher"] );

                    if ( la.length > 0 ) {
                      // capitalise first element
                      la[0] = la[0].substr(0, 1).toUpperCase() + la[0].substr(1);
                      lo.append( " " + la.join(", ") + "." );
                    }
                    
                    // editors
                    if ( po.editor ) {
                      lo.append( " Eds: ");
                      lo.append(
                          po.editor ? po.editor.map( function(i) { 
                              return i.given && i.family 
                                  ? i.family + ( i["dropping-particle"] ? " " + i["dropping-particle"] : "" ) + ", " + i.given[0] + "."
                                  : null; 
                          }).filter(function(i) { return i != null; }).join(", ") : ""
                      );
                    }
                    return lo;
            }

        }

    };


    // ---- plugin definition (public methods) ------------------------------------------------------------------------------

    /**
     * plugin factory
     *
     * @param po_element DOM element
     * @param po_options initialize options
     * @return self reference / instance
     */
    function Publication(po_element, po_options) {
        this.dom = po_element;
        this.settings = po_options;
        this.bibjson = [];
        this.bibtex = "";
        
        return this.load();
    }

    Publication.prototype = {

        /**
         * load data
         * 
         * @return self reference
         */
        load : function() {
            var self = this;

            if ( self.settings.bibjson )
                jQuery.ajax({ url: self.settings.bibjson, datatype : "json", crossdomain: self.settings.crossdomain })
                      .done( function( pa_data ) { 
                          self.bibjson = {};
                          pa_data.forEach( function(i) { self.bibjson[i.id] = i;  }) 

                          if ( !self.settings.bibtex )
                              processdata( self )
                          else   
                              jQuery.get( self.settings.bibtex, "text" )
                                    .done( function(pc_data) {
                                        // we add between closing entry backet and @ an explicit linebreak for matching the regular expression
                                        self.bibtex = pc_data.replace(/\s+/g, " ").replace(/\} @/g, "}\n@");
                                        processdata( self );
                                    })
                                    .fail( function() {
                                        throw new Error( "BibTeX source [" + self.settings.bibtex + "] cannot be read" );
                                    });
                      })
                      .fail( function() {
                          throw new Error( "BibJSON source [" + self.settings.bibjson + "] cannot be read" );
                      })
            
            return this;
        },

        /**
         * adds a filter to the items
         * 
         * @param po_filter filter function (true element is shown, otherwise element is hidden)
         * @return self reference
         */
        filter : function( po_filter ) {
            var self = this;
            var lo_generator = self.settings.callbackIDGenerator( this );
            var lo_filter = po_filter && ( typeof( po_filter ) === "function" ) ? po_filter : function() { return true; } 

            Object.values(this.bibjson).forEach(function(i) {
                var lc_id = lo_generator( i.id );
                if ( !lc_id )
                    return;

                if ( lo_filter( i ) )
                    jQuery( "#" + lc_id ).removeClass( self.settings.csshidden )
                                         .addClass( self.settings.cssvisible );
                else
                    jQuery( "#" + lc_id ).addClass( self.settings.csshidden )
                                         .removeClass( self.settings.cssvisible );    
            });

            return this;
        },

        /**
         * sorts the list
         * 
         * @param po_sort sorting function
         * @return self reference
         */
        sort : function( po_sort ) {
            var self = this;
            var lo_sort = po_sort && ( typeof(po_sort) === "function" )
                          ? po_sort
                          : function() { return 0; }

            this.dom.children().sort(function(i, j) { return lo_sort( self.bibjson[ jQuery(i).data( self.settings.datafield ) ], self.bibjson[ jQuery(j).data( self.settings.datafield ) ] ); }).appendTo( this.dom );
            return this;
        },

        /**
         * returns for a Bibtex key the full entry
         * 
         * @param pc_id Bibtex identifier
         * @return string with Bibtex
         */
        bibtexsource : function( pc_id ) {
            var lo_search = new RegExp( "@.+\\{" + pc_id.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + "(.|\\s)+?(@|$)" ).exec( this.bibtex );
            if ( ( !lo_search ) || ( lo_search.length == 0 ) )
                return null;

            var lc_result = lo_search[0].slice(0, -1).trim()
            return lc_result[ lc_result.length - 1 ] != '}'
                   ? lc_result + "}"
                   : lc_result;
        }

    };


    // ---- private function ------------------------------------------------------------------------------------------------

    /**
     * As our bibtex file contains rather poorly formatted titles, etc. use this function to fancify titles
     */
    var titlecase = function ( str )
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    /**
     * process BibJSON array
     * 
     * @param po_this plugin reference
     * @param pc_filter filter string
     */
    var processdata = function ( po_this, pc_filter )
    {
        if ( typeof(po_this.settings.callbackIDGenerator) !== "function" )
            throw new Error( "ID generator not set" );

        if ( typeof(po_this.settings.callbackEntryGenerator) !== "function" )
            throw new Error( "entry generator callback not set" );


        // instance of id generator
        var lo_idgenerator = po_this.settings.callbackIDGenerator( po_this );

        // check function to analyse BibTeX source
        var lo_bibtexcheck = po_this.settings.bibtex
                             ? function(i) { 
                                   if ( !new RegExp( "@.+\\{" + i.id.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") ).test( po_this.bibtex ) )
                                        throw new Error( "BibJSON ID [" + i.id + "] not found in BibTeX source, data sources seems not be synchronized" );
                                   return i; 
                               }
                             : function(i) { return i; };


        // clear dom element and iterate over all bibjson data
        po_this.dom.empty();
        Object.values( po_this.bibjson )

        // check all existing entries within BibTex (only if exists)
        .map( lo_bibtexcheck )

        // create list with meta-data
        .forEach(function( i ) { po_this.dom.append( format_entry( po_this, lo_idgenerator, i ) ); });

        // execute finisher iif exist
        if ( typeof( po_this.settings.callbackFinish ) === "function" )
            po_this.settings.callbackFinish( po_this );    
    }


    /**
     * format function for a BibJSON object
     * 
     * @param po_this plugin reference
     * @param po_idgenerator id generator 
     * @param po_item BibJSON object
     * @return DOM entry
     */
    var format_entry = function ( po_this, po_idgenerator, po_item ) {
        var lo_dom = po_this.settings.callbackEntryGenerator( po_item );

        lo_dom.attr("data-" + po_this.settings.datafield, po_item.id )
              .attr( "id", po_idgenerator( po_item.id ) )
              .addClass( po_this.settings.cssentry )
              .addClass( po_this.settings.cssvisible );
        
        if (po_item["type"])
            lo_dom.addClass( po_item["type"].replace(/[^a-z0-9\-_]|^[^a-z]+/gi, "_") );
        

        Object.values(po_this.settings.callbackEntry).forEach(function(i) {
            var lo = i( po_this, po_item );
            if ( !lo )
                return;

            lo_dom.append(" ").append( lo );             
        });

        return lo_dom;
    }

}(jQuery));

jQuery(function() {
    jQuery("#publication").publication({

            // URL of the BibJSON and BibTeX file
            bibjson : "/references.json",
            bibtex  : "/references.bib",

            // callback of formatter of bibtex element
            callbackEntry : {
                50 : function( po_this, po ) { 
                                    var lo_id = po_this.settings.callbackIDGenerator( po_this );
                                    return jQuery("<a>").addClass("bibtex")
                                                        .attr("href", "#" + lo_id( po.id ) )
                                                        .attr("data-clipboard-text", po_this.bibtexsource( po.id ) )
                                                        .attr("title", "copy BibTeX entry '" + po.id + "' to clipboard")
                                                        .html("&#128203;&nbsp;BibTeX");
                }
            },

            // callback of finisher, after all entries are added to the DOM
            callbackFinish : function( po_this ) { 

                // give-all items
                var lo_all = new ClipboardJS("#giveall", { text : function() {
                    return jQuery(".visible > a").filter(function(i, po) { return jQuery(po).parent().attr("class").indexOf("hidden") === -1; })
                                                 .map(function(i, po) { return jQuery(po).data("clipboard-text"); })
                                                 .get()
                                                 .join("\n");
                }});
                lo_all.on("success", function(po) { alert("BibTeX Entries copied to Clipboard"); po.clearSelection(); });

                // set clipboard for bibtex button
                var lo = new ClipboardJS(".bibtex"); 
                lo.on("success", function(po) { alert("BibTeX Entry copied to Clipboard"); po.clearSelection(); });

                // sort action year -> author -> title
                po_this.sort( function(i,j) {
                    if ( i.issued["date-parts"][0][0] > j.issued["date-parts"][0][0] )
                        return -1;
                    else if ( i.issued["date-parts"][0][0] < j.issued["date-parts"][0][0] )
                        return 1;
                    else {
                         var author_compare = i.author.map( function(i) { 
                            return i.given && i.family 
                                        ? i.family + ( i["dropping-particle"] ? " " + i["dropping-particle"] : "" ) + ", " + i.given[0] + "."
                                        : ( i["literal"] ? i["literal"] : null ); 
                                })
                                .filter(function(i) { return i != null; }).join("; ").localeCompare(
                                    j.author.map( function(i) { 
                                    return i.given && i.family 
                                        ? i.family + ( i["dropping-particle"] ? " " + i["dropping-particle"] : "" ) + ", " + i.given[0] + "."
                                        : ( i["literal"] ? i["literal"] : null ); 
                                })
                                .filter(function(i) { return i != null; }).join("; ") )
                         if ( author_compare != 0 )
                            return author_compare; 
                         else
                            return i.title.localeCompare( j.title );
                    }

                });
            }
        });

        var livesearch = function() {
            var lc = jQuery( "#search" ).val();
            
            if ( ( !lc ) || ( lc.length < 3 ) )
                jQuery("#publication").publication().filter();
            else
            {
                var la = lc.split(/(\s+)/).filter( function(i) { return i.trim().length > 0; } );

                jQuery("#publication").publication().filter( function(po) {
                    return ["title", "publisher", "collection-title"].some(function(j) {
                        return po[j] && ( jQuery( "#and" ).is(":checked") ? la.every(function(i){ 
                            return po[j].toLowerCase().indexOf( i.toLowerCase() ) != -1;
                         })
                        : la.some(function(i){ 
                            return po[j].toLowerCase().indexOf( i.toLowerCase() ) != -1;
                         }));
                    })
                    || ["author", "editor"].some(function(j) {
                        return po[j] && ( jQuery( "#and" ).is(":checked") ? la.every(function(i){
                            return po[j].some(function(n) { return n.family && n.family.toLowerCase().indexOf( i.toLowerCase() ) != -1 || n.given && n.given.toLowerCase().indexOf( i.toLowerCase() ) != -1; });
                        })
                        : la.some(function(i){
                            return po[j].some(function(n) { return n.family && n.family.toLowerCase().indexOf( i.toLowerCase() ) != -1 || n.given && n.given.toLowerCase().indexOf( i.toLowerCase() ) != -1; });
                        }));
                    });
                });
            }
        }

        // search action (search only iif more than 2 charcters are inserted)
        jQuery( "#search" ).on("change keyup paste", livesearch );

        // re-search on mode change
        jQuery( "#and" ).change( livesearch );
        jQuery( "#or" ).change( livesearch );

        // show only
        ["thesis", "paper-conference", "chapter", "book", "article-journal"].forEach(function(i) {
            jQuery( "#" + i ).change(function() {
                jQuery( ".publication:not(." + i + ")" ).addClass( "hidden" + i );
                ["thesis", "paper-conference", "chapter", "book", "article-journal"].filter(function(j) { return j !== i }).forEach(function(k) {
                    jQuery( ".publication:not(." + k + ")" ).removeClass( "hidden" + k );
                });
            });
        });
        
        jQuery( "#all" ).change(function() {
            ["thesis", "paper-conference", "chapter", "book", "article-journal"].forEach(function(i) {
                jQuery( ".publication:not(." + i + ")" ).removeClass( "hidden" + i );
            });
        });

        $(document).ready(function() {
            jQuery( "#search" ).focus();
        });
});
