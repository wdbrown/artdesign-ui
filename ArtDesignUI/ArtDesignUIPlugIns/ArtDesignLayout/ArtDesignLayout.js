/*
!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!

ArtDesignUI (v.1.0.0)
www.artdesign-ui.com

ArtDesignLayout (v.1.0.0) - part of ArtDesignUI
199 Lines
www.artdesign-ui.com/ArtDesignLayout

License: ArtDesignCreative

Author:
ArtDesign Creative Studio
www.artdesign-creative.com
office@artdesign-creative.com

More jQuery PlugIns:
www.artdesign-jquery.com

!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!
*/
;(function($, window) {
    if (!$.ns) {
        $.ns                                                                    = {};
    }
    $.ns.ArtDesignLayout                                                        = function(Element) {
        var PlugIn                                                              = this;
        PlugIn.$Element                                                         = $(Element);
        var Layout                                                              = [],
        ElementCounter                                                          = 0,
        WrapMaxWidth                                                            = [],
        WrapMinWidth                                                            = [],
        WrapWidthToFull                                                         = [],
        ElementsCounter                                                         = 0,
        ChildrenMaxWidth                                                        = [],
        ChildrenMinWidth                                                        = [],
        ChildrenMargin                                                          = [],
        ResizeTimer;
        PlugIn.Methods                                                          = {
            Initialize                                                          : function() {
                PlugIn.$Element.find("[data-plugin-ad-layout='ad-layout']").each(function() {
                    if(!$(this).attr("data-ad-radio-initialize")) {
                        Layout[ElementCounter]                                  = $(this);
                        Layout[ElementCounter].attr("data-ad-layout-initialize", "initialize");
                        PlugIn.Methods.PrepareElement(ElementCounter);
                        PlugIn.Methods.CSS(ElementCounter);
                        PlugIn.Methods.WindowResize(ElementCounter);
                        ElementCounter++;
                    }
                });
            },
            PrepareElement                                                      : function(ElementCounter) {
                Layout[ElementCounter].children("[data-ad-layout-children='children']").each(function() {
                    $(this).wrap("<div></div>");
                });
                if(Layout[ElementCounter].attr("data-ad-layout-max-width")) {
                    WrapMaxWidth[ElementCounter]                                = PlugIn.Methods.DataToOptions(Layout[ElementCounter].attr("data-ad-layout-max-width"));
                }
                if(Layout[ElementCounter].attr("data-ad-layout-min-width")) {
                    WrapMinWidth[ElementCounter]                                = PlugIn.Methods.DataToOptions(Layout[ElementCounter].attr("data-ad-layout-min-width"));
                }
                if(Layout[ElementCounter].attr("data-ad-layout-width-to-full")) {
                    WrapWidthToFull[ElementCounter]                             = PlugIn.Methods.DataToOptions(Layout[ElementCounter].attr("data-ad-layout-width-to-full"));
                }
                ChildrenMaxWidth[ElementCounter]                                = [];
                ChildrenMinWidth[ElementCounter]                                = [];
                ChildrenMargin[ElementCounter]                                  = [];
                ElementsCounter                                                 = 0;
                Layout[ElementCounter].find("[data-ad-layout-children='children']").each(function() {
                    if($(this).attr("data-ad-layout-max-width")) {
                        ChildrenMaxWidth[ElementCounter][ElementsCounter]       = PlugIn.Methods.DataToOptions($(this).attr("data-ad-layout-max-width"));
                    }
                    if($(this).attr("data-ad-layout-min-width")) {
                        ChildrenMinWidth[ElementCounter][ElementsCounter]       = PlugIn.Methods.DataToOptions($(this).attr("data-ad-layout-min-width"));
                    }
                    if($(this).attr("data-ad-layout-margin")) {
                        ChildrenMargin[ElementCounter][ElementsCounter]         = PlugIn.Methods.DataToOptions($(this).attr("data-ad-layout-margin"));
                    }
                    ElementsCounter++;
                });
                if(Layout[ElementCounter].attr("data-ad-layout-width-to-full") && parseInt(WrapWidthToFull[ElementCounter]["width-to-full"]) < Layout[ElementCounter].width()) {
                    PlugIn.Methods.Native(ElementCounter);
                }
                else {
                    PlugIn.Methods.Modify(ElementCounter);
                }
            },
            CSS                                                                 : function(ElementCounter) {
                Layout[ElementCounter].css({
                    "width"                                                     : "100%",
                    "display"                                                   : "table"
                });
                if(Layout[ElementCounter].attr("data-ad-layout-max-width")) {
                    Layout[ElementCounter].css({
                        "maxWidth"                                              : WrapMaxWidth[ElementCounter]["max-width"] + WrapMaxWidth[ElementCounter]["unit"]
                    });
                }
                if(Layout[ElementCounter].attr("data-ad-layout-min-width")) {
                    Layout[ElementCounter].css({
                        "minWidth"                                              : WrapMinWidth[ElementCounter]["min-width"] + WrapMinWidth[ElementCounter]["unit"]
                    });
                }
            },
            Native                                                              : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                Layout[ElementCounter].find("[data-ad-layout-children='children']").each(function() {
                    $(this).parent().css({
                        "marginTop"                                             : ChildrenMargin[ElementCounter][ElementsCounter]["margin-top"] + "px",
                        "marginBottom"                                          : ChildrenMargin[ElementCounter][ElementsCounter]["margin-bottom"] + "px",
                        "display"                                               : "table-cell",
                        "verticalAlign"                                         : "top"
                    });
                    if($(this).attr("data-ad-layout-max-width")) {
                        if(ChildrenMaxWidth[ElementCounter][ElementsCounter]["unit"] === "px") {
                            $(this).parent().css({
                                "width"                                         : ChildrenMaxWidth[ElementCounter][ElementsCounter]["max-width"] + "px"
                            });
                        }
                        else if(ChildrenMaxWidth[ElementCounter][ElementsCounter]["unit"] === "%") {
                            $(this).parent().css({
                                "width"                                         : ChildrenMaxWidth[ElementCounter][ElementsCounter]["max-width"] + "%"
                            });
                        }
                    }
                    if($(this).attr("data-ad-layout-min-width")) {
                        if(ChildrenMinWidth[ElementCounter][ElementsCounter]["unit"] === "px") {
                            $(this).parent().css({
                                "minWidth"                                      : ChildrenMinWidth[ElementCounter][ElementsCounter]["min-width"]  + "px"
                            });
                        }
                        else if(ChildrenMinWidth[ElementCounter][ElementsCounter]["unit"] === "%") {
                            $(this).parent().css({
                                "minWidth"                                      : ChildrenMinWidth[ElementCounter][ElementsCounter]["min-width"] + "%"
                            });
                        }
                    }
                    if($(this).attr("data-ad-layout-margin")) {
                        $(this).css({
                            "marginLeft"                                        : ChildrenMargin[ElementCounter][ElementsCounter]["margin-left"] + "px",
                            "marginRight"                                       : ChildrenMargin[ElementCounter][ElementsCounter]["margin-right"] + "px"
                        });
                    }
                    ElementsCounter++;
                });
            },
            Modify                                                              : function(ElementCounter) {
                ElementsCounter = 0;
                Layout[ElementCounter].find("[data-ad-layout-children='children']").each(function() {
                    $(this).parent().css({
                        "marginTop"                                             : ChildrenMargin[ElementCounter][ElementsCounter]["margin-top"] + "px",
                        "marginBottom"                                          : ChildrenMargin[ElementCounter][ElementsCounter]["margin-bottom"] + "px",
                        "display"                                               : "block"
                    });
                    $(this).parent().css({
                        "width"                                                 : "100%"
                    });
                    if($(this).attr("data-ad-layout-min-width")) {
                        $(this).parent().css({
                            "minWidth"                                          : ChildrenMinWidth[ElementCounter][ElementsCounter]["min-width"] + ChildrenMinWidth[ElementCounter][ElementsCounter]["unit"]
                        });
                    }
                    $(this).css({
                        "margin"                                                : 0
                    });
                    ElementsCounter++;
                });
            },
            WindowResize                                                        : function(ElementCounter) {
                $(window).on("resize", function() {
                    if(Layout[ElementCounter].attr("data-ad-layout-width-to-full") && parseInt(WrapWidthToFull[ElementCounter]["width-to-full"]) < Layout[ElementCounter].width()) {
                        PlugIn.Methods.Native(ElementCounter);
                    }
                    else {
                        PlugIn.Methods.Modify(ElementCounter);
                    }
                    function AfterResizing(){
                        if(Layout[ElementCounter].attr("data-ad-layout-width-to-full") && parseInt(WrapWidthToFull[ElementCounter]["width-to-full"]) < Layout[ElementCounter].width()) {
                            PlugIn.Methods.Native(ElementCounter);
                        }
                        else {
                            PlugIn.Methods.Modify(ElementCounter);
                        }
                    }
                    clearTimeout(ResizeTimer);
                    ResizeTimer                                                 = setTimeout(AfterResizing(), 100);
                });
            },
            DataToOptions                                                       : function(String) {
                return eval("( {" + String + "} )");
            }
        };
        PlugIn.Methods.Initialize();
    };
    $.fn.ArtDesignLayout                                                        = function() {
        var ArtDesignLayout                                                     = (new $.ns.ArtDesignLayout(this));
        return ArtDesignLayout.PublicMethods;
    };
})(jQuery, window);