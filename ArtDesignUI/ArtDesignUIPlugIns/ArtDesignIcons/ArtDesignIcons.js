/*
!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!

ArtDesignUI (v.1.0.0)
www.artdesign-ui.com

ArtDesignIcons (v.1.0.0) - part of ArtDesignUI
59 Lines
www.artdesign-ui.com/ArtDesignIcons

License: ArtDesignCreative

Author:
ArtDesign Creative Studio
www.artdesign-creative.com
office@artdesign-creative.com

More jQuery PlugIns:
www.artdesign-jquery.com

!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!
*/
;(function($) {
    if (!$.ns) {
        $.ns                                                                    = {};
    }
    $.ns.ArtDesignIcons                                                         = function(Element, Options) {
        var PlugIn                                                              = this;
        var a;
        PlugIn.$Element                                                         = $(Element);
        PlugIn.Options                                                          = $.extend({}, $.ns.ArtDesignIcons.DefaultOptions, Options);
        PlugIn.Methods                                                          = {
            Initialize                                                          : function() {
                for(a = 0; a < PlugIn.Options.Selectors.length; a++) {
                    PlugIn.$Element.find(PlugIn.Options.Selectors[a]).each(function() {
                        if (!$(this).attr("data-ad-icons-initialize")) {
                            $(this).attr("data-ad-icons-initialize", "initialize");
                            $(this).html($.ArtDesignIconsCode[$(this).attr("class").match(/[\w-]*icon-[\w-]*/g)]);
                            $(this).css({
                                "fontFamily"                                    : "artdesignicons",
                                "fontStyle"                                     : "normal",
                                "fontWeight"                                    : "normal",
                                "textAlign"                                     : "center"
                            });
                        }
                    });
                }
            }
        };
        PlugIn.Methods.Initialize();
    };
    $.ns.ArtDesignIcons.DefaultOptions                                          = {
        Selectors                                                               : [".Icon", ".But_Icon", ".Inp_Icon", ".Sel_Icon", ".Rad_Icon", ".ChB_Icon", ".Tabs_Icon", ".IF_Icon"]
    };
    $.fn.ArtDesignIcons                                                         = function(Options) {
        var ArtDesignIcons                                                      = (new $.ns.ArtDesignIcons(this, Options));
        return ArtDesignIcons.PublicMethods;
    };
})(jQuery);