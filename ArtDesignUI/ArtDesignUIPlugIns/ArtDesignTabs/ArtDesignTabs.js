/*
!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!

ArtDesignUI (v.1.0.0)
www.artdesign-ui.com

ArtDesignTabs (v.1.0.0) - part of ArtDesignUI
1193 Lines
www.artdesign-ui.com/ArtDesignTabs

License: ArtDesignCreative

Author:
ArtDesign Creative Studio
www.artdesign-creative.com
office@artdesign-creative.com

More jQuery PlugIns:
www.artdesign-jquery.com

!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!
*/
;(function ( $ ) {
    if (!$.ns) {
        $.ns                                                                    = {};
    }
    $.ns.ArtDesignTabs                                                          = function (Element, Options) {
        var PlugIn                                                              = this;
        var ElementCounter                                                      = 0,
            ElementsCounter                                                     = 0,
            Tabs                                                                = [],
            TabsNavigation                                                      = [],
            TabsContent                                                         = [],
            TabsNavigationButton                                                = [],
            MaxElement                                                          = [],
            NativeOptions                                                       = [],
            NativeOptionsSplit                                                  = [],
            ElementsOptions                                                     = [],
            Icon                                                                = [],
            TempText,
            CurrentTabID                                                        = [],
            PrevTabID                                                           = [],
            HEX, HEXConvertResult, HEXR, HEXG, HEXB,
            ResultOuterNormal                                                   = [],
            ROuterNormal                                                        = [],
            GOuterNormal                                                        = [],
            BOuterNormal                                                        = [],
            ResultOuterHover                                                    = [],
            ROuterHover                                                         = [],
            GOuterHover                                                         = [],
            BOuterHover                                                         = [],
            ResultOuterClick                                                    = [],
            ROuterClick                                                         = [],
            GOuterClick                                                         = [],
            BOuterClick                                                         = [],
            ResultInnerNormal                                                   = [],
            RInnerNormal                                                        = [],
            GInnerNormal                                                        = [],
            BInnerNormal                                                        = [],
            ResultInnerHover                                                    = [],
            RInnerHover                                                         = [],
            GInnerHover                                                         = [],
            BInnerHover                                                         = [],
            ResultInnerClick                                                    = [],
            RInnerClick                                                         = [],
            GInnerClick                                                         = [],
            BInnerClick                                                         = [],
            ResultInnerActive                                                   = [],
            RInnerActive                                                        = [],
            GInnerActive                                                        = [],
            BInnerActive                                                        = [],
            WidthAll                                                            = [],
            WidthOne                                                            = [],
            WidthOneText                                                        = [],
            CheckActiveTab                                                      = [],
            Prevent                                                             = [],
            ResizeTimer;
        PlugIn.$Element                                                         = $(Element);
        PlugIn.Methods                                                          = {
            Initialize                                                          : function () {
                PlugIn.Options                                                  = $.extend({}, $.ns.ArtDesignTabs.DefaultOptions, Options);
                PlugIn.$Element.find("[data-plugin-ad-tabs='ad-tabs']").each(function() {
                    if (!$(this).attr("data-ad-tabs-initialize")) {
                        Tabs[ElementCounter]                                    = $(this);
                        Tabs[ElementCounter].attr("data-ad-tabs-initialize", "initialize");
                        ElementsOptions[ElementCounter]                         = $.extend({}, $.ns.ArtDesignTabs.DefaultOptions, Options);
                        if (Tabs[ElementCounter].attr("data-ad-tabs-options")) {
                            NativeOptions[ElementCounter]                       = Tabs[ElementCounter].attr("data-ad-tabs-options").replace(/ /g, "");
                            NativeOptionsSplit[ElementCounter]                  = NativeOptions[ElementCounter].split(',');
                            for (var a = 0; a < NativeOptionsSplit[ElementCounter].length; a++) {
                                if ($.Tabs !== undefined && $.Tabs[NativeOptionsSplit[ElementCounter][a]]) {
                                    ElementsOptions[ElementCounter]             = $.extend({}, ElementsOptions[ElementCounter], $.Tabs[NativeOptionsSplit[ElementCounter][a]]);
                                }
                            }
                        }
                        TabsNavigation[ElementCounter]                          = Tabs[ElementCounter].children().first();
                        TabsContent[ElementCounter]                             = TabsNavigation[ElementCounter].next();
                        TabsNavigation[ElementCounter].wrap("<div class='" + ElementsOptions[ElementCounter].ClassPrefix + "TabsNavigationWrap'></div>");
                        TabsContent[ElementCounter].wrap("<div class='" + ElementsOptions[ElementCounter].ClassPrefix + "TabsContentWrap'></div>");
                        PlugIn.Methods.PrepareElement(ElementCounter);
                        $("body").ArtDesignIcons();
                        PlugIn.Methods.CSS(ElementCounter);
                        PlugIn.Methods.WindowResize(ElementCounter);
                        ElementCounter++;
                    }
                });
                $(window).trigger("resize");
            },
            PrepareElement                                                      : function (ElementCounter) {
                TabsNavigation[ElementCounter].addClass(ElementsOptions[ElementCounter].ClassPrefix + "Navigation");
                TabsContent[ElementCounter].addClass(ElementsOptions[ElementCounter].ClassPrefix + "Content");
                ElementsCounter                                                 = 0;
                Prevent[ElementCounter]                                         = false;
                Icon[ElementCounter]                                            = [];
                TabsNavigationButton[ElementCounter]                            = [];
                TabsNavigation[ElementCounter].children().each(function() {
                    $(this).addClass(ElementsOptions[ElementCounter].ClassPrefix + "NavigationTab").addClass(ElementsOptions[ElementCounter].ClassPrefix + "NavigationTab-" + ElementsCounter).attr("data-ad-tabs-id", ElementsCounter);
                    TempText                                                    = $(this).text();
                    $(this).html("");
                    if ($(this).attr('data-ad-tabs-icon')) {
                        Icon[ElementCounter][ElementsCounter]                   = PlugIn.Methods.DataToOptions($(this).attr('data-ad-tabs-icon'));
                        if (ElementsOptions[ElementCounter].TabsNavigationIconPosition === "Left") {
                            $('<div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonText"><span class="' + ElementsOptions[ElementCounter].ClassPrefix + 'Icon ' + Icon[ElementCounter][ElementsCounter]['Icon'] + '"></span>' + TempText + '</div>')
                            .appendTo($(this));
                        }
                        else if (ElementsOptions[ElementCounter].TabsNavigationIconPosition === "Right") {
                            $('<div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonText">' + TempText + '<span class="' + ElementsOptions[ElementCounter].ClassPrefix + 'Icon ' + Icon[ElementCounter][ElementsCounter]['Icon'] + '"></span></div>')
                            .appendTo($(this));
                        }
                    }
                    else {
                        $('<div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonText">' + TempText + '</div>')
                        .appendTo($(this));
                    }
                    TabsNavigationButton[ElementCounter][ElementsCounter]       = TabsNavigation[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "NavigationTab-" + ElementsCounter);
                    MaxElement[ElementCounter]                                  = ElementsCounter;
                    ElementsCounter++;
                });
                ElementsCounter = 0;
                TabsContent[ElementCounter].children().each(function() {
                    $(this).addClass(ElementsOptions[ElementCounter].ClassPrefix + "ContentTab").addClass(ElementsOptions[ElementCounter].ClassPrefix + "ContentTab-" + ElementsCounter).attr("data-ad-tabs-id", ElementsCounter);
                    ElementsCounter++;
                });
                TabsNavigation[ElementCounter].children().each(function() {
                    if($(this).attr("data-ad-tabs-active")) {
                        CheckActiveTab[ElementCounter]                          = true;
                    }
                });
                if(CheckActiveTab[ElementCounter] !== true) {
                    TabsNavigation[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "NavigationTab-" + (ElementsOptions[ElementCounter].StartTab - 1)).attr("data-ad-tabs-active", "active");
                }
                TabsNavigation[ElementCounter].children().each(function() {
                    if($(this).attr("data-ad-tabs-active")) {
                        TabsContent[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ContentTab-" + $(this).attr("data-ad-tabs-id")).attr("data-ad-tabs-active", "active");
                    }
                });
            },
            CSS                                                                 : function (ElementCounter) {
                ResultOuterClick[ElementCounter]                                = [];
                ROuterClick[ElementCounter]                                     = [];
                GOuterClick[ElementCounter]                                     = [];
                BOuterClick[ElementCounter]                                     = [];
                ResultOuterHover[ElementCounter]                                = [];
                ROuterHover[ElementCounter]                                     = [];
                GOuterHover[ElementCounter]                                     = [];
                BOuterHover[ElementCounter]                                     = [];
                ResultOuterNormal[ElementCounter]                               = [];
                ResultInnerActive[ElementCounter]                               = [];
                RInnerActive[ElementCounter]                                    = [];
                GInnerActive[ElementCounter]                                    = [];
                BInnerActive[ElementCounter]                                    = [];
                ResultInnerClick[ElementCounter]                                = [];
                RInnerClick[ElementCounter]                                     = [];
                GInnerClick[ElementCounter]                                     = [];
                BInnerClick[ElementCounter]                                     = [];
                ResultInnerHover[ElementCounter]                                = [];
                RInnerHover[ElementCounter]                                     = [];
                GInnerHover[ElementCounter]                                     = [];
                BInnerHover[ElementCounter]                                     = [];
                ResultInnerNormal[ElementCounter]                               = [];
                RInnerNormal[ElementCounter]                                    = [];
                GInnerNormal[ElementCounter]                                    = [];
                BInnerNormal[ElementCounter]                                    = [];
                WidthAll[ElementCounter]                                        = 0;
                WidthOne[ElementCounter]                                        = [];
                WidthOneText[ElementCounter]                                    = [];
                Tabs[ElementCounter].css({
                    "width"                                                     : "100%",
                    "maxWidth"                                                  : Tabs[ElementCounter].attr("data-ad-tabs-width") === undefined ? ElementsOptions[ElementCounter].TabsMaxWidth : Tabs[ElementCounter].attr("data-ad-tabs-width") + ElementsOptions[ElementCounter].TabsMaxUnit
                });
                ResultOuterNormal[ElementCounter]                               = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].ShadowOuterColorNormal);
                ROuterNormal[ElementCounter]                                    = ResultOuterNormal[ElementCounter][0];
                GOuterNormal[ElementCounter]                                    = ResultOuterNormal[ElementCounter][1];
                BOuterNormal[ElementCounter]                                    = ResultOuterNormal[ElementCounter][2];
                ResultOuterHover[ElementCounter]                                = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].ShadowOuterColorHover);
                ROuterHover[ElementCounter]                                     = ResultOuterHover[ElementCounter][0];
                GOuterHover[ElementCounter]                                     = ResultOuterHover[ElementCounter][1];
                BOuterHover[ElementCounter]                                     = ResultOuterHover[ElementCounter][2];
                ResultOuterClick[ElementCounter]                                = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].ShadowOuterColorClick);
                ROuterClick[ElementCounter]                                     = ResultOuterClick[ElementCounter][0];
                GOuterClick[ElementCounter]                                     = ResultOuterClick[ElementCounter][1];
                BOuterClick[ElementCounter]                                     = ResultOuterClick[ElementCounter][2];
                TabsNavigation[ElementCounter].css({
                    "borderTopLeftRadius"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderTopLeftRadiusOuter + "px",
                    "borderBottomLeftRadius"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderBottomLeftRadiusOuter + "px",
                    "borderTopRightRadius"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderTopRightRadiusOuter + "px",
                    "borderBottomRightRadius"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderBottomRightRadiusOuter + "px",
                    "boxShadow"                                                 : ElementsOptions[ElementCounter].ShadowOuterXNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterYNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadNormal + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterNormal[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaNormal + ")"
                });
                TabsContent[ElementCounter].parent("." + ElementsOptions[ElementCounter].ClassPrefix + "TabsContentWrap").css({
                    "marginTop"                                                 : ElementsOptions[ElementCounter].TabsContentMarginTop + "px",
                    "borderTopStyle"                                            : ElementsOptions[ElementCounter].TabsContentBorderTopStyle,
                    "borderBottomStyle"                                         : ElementsOptions[ElementCounter].TabsContentBorderBottomStyle,
                    "borderLeftStyle"                                           : ElementsOptions[ElementCounter].TabsContentBorderLeftStyle,
                    "borderRightStyle"                                          : ElementsOptions[ElementCounter].TabsContentBorderRightStyle,
                    "borderTopWidth"                                            : ElementsOptions[ElementCounter].TabsContentBorderTopSize + "px",
                    "borderBottomWidth"                                         : ElementsOptions[ElementCounter].TabsContentBorderBottomSize + "px",
                    "borderLeftWidth"                                           : ElementsOptions[ElementCounter].TabsContentBorderLeftSize + "px",
                    "borderRightWidth"                                          : ElementsOptions[ElementCounter].TabsContentBorderRightSize + "px",
                    "borderTopColor"                                            : ElementsOptions[ElementCounter].TabsContentBorderTopColor,
                    "borderBottomColor"                                         : ElementsOptions[ElementCounter].TabsContentBorderBottomColor,
                    "borderLeftColor"                                           : ElementsOptions[ElementCounter].TabsContentBorderLeftColor,
                    "borderRightColor"                                          : ElementsOptions[ElementCounter].TabsContentBorderRightColor,
                    "borderTopLeftRadius"                                       : ElementsOptions[ElementCounter].TabsContentBorderTopLeftRadius + "px",
                    "borderTopRightRadius"                                      : ElementsOptions[ElementCounter].TabsContentBorderTopRightRadius + "px",
                    "borderBottomLeftRadius"                                    : ElementsOptions[ElementCounter].TabsContentBorderBottomLeftRadius + "px",
                    "borderBottomRightRadius"                                   : ElementsOptions[ElementCounter].TabsContentBorderBottomRightRadius + "px"
                });
                TabsContent[ElementCounter].css({
                    "paddingTop"                                                : ElementsOptions[ElementCounter].TabsContentPaddingTop + "px",
                    "paddingBottom"                                             : ElementsOptions[ElementCounter].TabsContentPaddingBottom + "px",
                    "paddingLeft"                                               : ElementsOptions[ElementCounter].TabsContentPaddingLeft + "px",
                    "paddingRight"                                              : ElementsOptions[ElementCounter].TabsContentPaddingRight + "px"
                });
                ElementsCounter                                                 = 0;
                TabsNavigation[ElementCounter].children().each(function() {
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "position"                                              : "absolute",
                        "marginLeft"                                            : "auto",
                        "marginRight"                                           : "auto",
                        "cursor"                                                : ElementsOptions[ElementCounter].TabsNavigationCursor,
                        "color"                                                 : ElementsOptions[ElementCounter].TabsNavigationColorNormal,
                        "fontFamily"                                            : ElementsOptions[ElementCounter].TabsNavigationFontFamily,
                        "fontSize"                                              : ElementsOptions[ElementCounter].TabsNavigationFontSize + "px",
                        "fontWeight"                                            : ElementsOptions[ElementCounter].TabsNavigationFontWeight,
                        "fontStyle"                                             : ElementsOptions[ElementCounter].TabsNavigationFontStyle,
                        "lineHeight"                                            : ElementsOptions[ElementCounter].TabsNavigationFontLineHeight + "em",
                        "textAlign"                                             : "center"
                    });
                    if(TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width')) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "width"                                             : TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "width"                                             : TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "absolute"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "relative"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                            "marginLeft"                                        : "auto",
                            "marginRight"                                       : "auto",
                            "position"                                          : "relative"
                        });
                        WidthOneText[ElementCounter][ElementsCounter]           = TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").width();
                        WidthOne[ElementCounter][ElementsCounter]               = WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter].TabsNavigationPaddingLeft + ElementsOptions[ElementCounter].TabsNavigationPaddingRight;
                        WidthAll[ElementCounter]                               += parseInt(TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width')) + ElementsOptions[ElementCounter].TabsNavigationBorderLeftSize + ElementsOptions[ElementCounter].TabsNavigationBorderRightSize;
                        if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate > 0) {
                            WidthAll[ElementCounter]                           += ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate;
                        }
                        else if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationForceSingleSeparate === true) {
                            WidthAll[ElementCounter]                           += -ElementsOptions[ElementCounter].TabsNavigationBorderRightSize;
                        }
                    }
                    else {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "float"                                             : "left"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "absolute"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "relative"
                        });
                        WidthOneText[ElementCounter][ElementsCounter]           = TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").width();
                        WidthOne[ElementCounter][ElementsCounter]               = WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter].TabsNavigationPaddingLeft + ElementsOptions[ElementCounter].TabsNavigationPaddingRight;
                        WidthAll[ElementCounter]                               += WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter].TabsNavigationPaddingLeft + ElementsOptions[ElementCounter].TabsNavigationPaddingRight + ElementsOptions[ElementCounter].TabsNavigationBorderLeftSize + ElementsOptions[ElementCounter].TabsNavigationBorderRightSize;
                        if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate > 0) {
                            WidthAll[ElementCounter]                           += ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate;
                        }
                        else if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationForceSingleSeparate === true) {
                            WidthAll[ElementCounter]                           += -ElementsOptions[ElementCounter].TabsNavigationBorderRightSize;
                        }
                    }
                    TabsNavigationButton[ElementCounter][ElementsCounter].css({
                        "position"                                              : "relative",
                        "overflow"                                              : "hidden",
                        "borderStyle"                                           : ElementsOptions[ElementCounter].TabsNavigationBorderStyle,
                        "borderTopWidth"                                        : ElementsOptions[ElementCounter].TabsNavigationBorderTopSize + "px",
                        "borderTopColor"                                        : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorNormal,
                        "borderBottomWidth"                                     : ElementsOptions[ElementCounter].TabsNavigationBorderBottomSize + "px",
                        "borderBottomColor"                                     : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorNormal,
                        "borderLeftWidth"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderLeftSize + "px",
                        "borderLeftColor"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorNormal,
                        "borderRightWidth"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderRightSize + "px",
                        "borderRightColor"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorNormal
                    });
                    ResultInnerActive[ElementCounter][ElementsCounter]          = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].TabsNavigationShadowInnerColorActive);
                    RInnerActive[ElementCounter][ElementsCounter]               = ResultInnerActive[ElementCounter][ElementsCounter][0];
                    GInnerActive[ElementCounter][ElementsCounter]               = ResultInnerActive[ElementCounter][ElementsCounter][1];
                    BInnerActive[ElementCounter][ElementsCounter]               = ResultInnerActive[ElementCounter][ElementsCounter][2];
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter].TabsNavigationBackgroundColorActive,
                        "color"                                                 : ElementsOptions[ElementCounter].TabsNavigationColorActive
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow").css({
                        boxShadow                                               : "inset " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerXActive + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerYActive + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerBlurActive + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerSpreadActive + "px rgba(" + RInnerActive[ElementCounter][ElementsCounter] + ", " + GInnerActive[ElementCounter][ElementsCounter] + ", " + BInnerActive[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerAlphaActive + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + "))"
                            });
                            break;
                        case "Firefox":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + "))"
                                });
                            }
                            else {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive !== "transparent" && ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive !== "transparent") {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + "', endColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorActive + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorActive + "))"
                            });
                    }
                    ResultInnerClick[ElementCounter][ElementsCounter]           = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].TabsNavigationShadowInnerColorClick);
                    RInnerClick[ElementCounter][ElementsCounter]                = ResultInnerClick[ElementCounter][ElementsCounter][0];
                    GInnerClick[ElementCounter][ElementsCounter]                = ResultInnerClick[ElementCounter][ElementsCounter][1];
                    BInnerClick[ElementCounter][ElementsCounter]                = ResultInnerClick[ElementCounter][ElementsCounter][2];
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter].TabsNavigationBackgroundColorClick,
                        "color"                                                 : ElementsOptions[ElementCounter].TabsNavigationColorClick
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerXClick + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerYClick + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerBlurClick + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerSpreadClick + "px rgba(" + RInnerClick[ElementCounter][ElementsCounter] + ", " + GInnerClick[ElementCounter][ElementsCounter] + ", " + BInnerClick[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerAlphaClick + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + "))"
                            });
                            break;
                        case "Firefox":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + "))"
                                });
                            }
                            else {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick !== "transparent" && ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick !== "transparent") {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + "', endColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorClick + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorClick + "))"
                            });
                    }
                    ResultInnerHover[ElementCounter][ElementsCounter]           = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].TabsNavigationShadowInnerColorHover);
                    RInnerHover[ElementCounter][ElementsCounter]                = ResultInnerHover[ElementCounter][ElementsCounter][0];
                    GInnerHover[ElementCounter][ElementsCounter]                = ResultInnerHover[ElementCounter][ElementsCounter][1];
                    BInnerHover[ElementCounter][ElementsCounter]                = ResultInnerHover[ElementCounter][ElementsCounter][2];
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter].TabsNavigationBackgroundColorHover,
                        "color"                                                 : ElementsOptions[ElementCounter].TabsNavigationColorHover
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerXHover + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerYHover + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerBlurHover + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerSpreadHover + "px rgba(" + RInnerHover[ElementCounter][ElementsCounter] + ", " + GInnerHover[ElementCounter][ElementsCounter] + ", " + BInnerHover[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerAlphaHover + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + "))"
                            });
                            break;
                        case "Firefox":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + "))"
                                });
                            }
                            else {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover !== "transparent" && ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover !== "transparent") {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + "', endColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorHover + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorHover + "))"
                            });
                    }
                    ResultInnerNormal[ElementCounter][ElementsCounter]          = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter].TabsNavigationShadowInnerColorNormal);
                    RInnerNormal[ElementCounter][ElementsCounter]               = ResultInnerNormal[ElementCounter][ElementsCounter][0];
                    GInnerNormal[ElementCounter][ElementsCounter]               = ResultInnerNormal[ElementCounter][ElementsCounter][1];
                    BInnerNormal[ElementCounter][ElementsCounter]               = ResultInnerNormal[ElementCounter][ElementsCounter][2];
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter].TabsNavigationBackgroundColorNormal,
                        "color"                                                 : ElementsOptions[ElementCounter].TabsNavigationColorNormal
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerXNormal + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerYNormal + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerBlurNormal + "px " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerSpreadNormal + "px rgba(" + RInnerNormal[ElementCounter][ElementsCounter] + ", " + GInnerNormal[ElementCounter][ElementsCounter] + ", " + BInnerNormal[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter].TabsNavigationShadowInnerAlphaNormal + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + "))"
                            });
                            break;
                        case "Firefox":
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + "))"
                                });
                            }
                            else {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + " 0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal !== "transparent" && ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal !== "transparent") {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + "', endColorstr='" + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter].TabsNavigationGradientStartColorNormal + "), color-stop(100%, " + ElementsOptions[ElementCounter].TabsNavigationGradientEndColorNormal + "))"
                            });
                    }
                    if(ElementsOptions[ElementCounter].TabsNavigationIconPosition === "Left") {
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").css({
                            "fontSize"                                          : ElementsOptions[ElementCounter].TabsNavigationIconSize + "px",
                            "paddingRight"                                      : ElementsOptions[ElementCounter].TabsNavigationIconPaddingRight + "px"
                        });    
                    }
                    else if(ElementsOptions[ElementCounter].TabsNavigationIconPosition === "Right") {
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").css({
                            "fontSize"                                          : ElementsOptions[ElementCounter].TabsNavigationIconSize + "px",
                            "paddingLeft"                                       : ElementsOptions[ElementCounter].TabsNavigationIconPaddingLeft + "px"
                        }); 
                    }
                    if (Icon[ElementCounter][ElementsCounter]) {
                        if(Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").css({
                                "color"                                         : Icon[ElementCounter][ElementsCounter]['Colors']['Normal'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorNormal : Icon[ElementCounter][ElementsCounter]['Colors']['Normal']
                            });
                        }
                        else {
                            TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").css({
                                "color"                                         : ElementsOptions[ElementCounter].TabsNavigationColorNormal
                            });
                        }
                    }
                    if(TabsNavigationButton[ElementCounter][ElementsCounter].attr("data-ad-tabs-active")) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorActive,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorActive,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorActive,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorActive
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow").css({
                            "opacity"                                           : 0
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                            "color"                                             : ElementsOptions[ElementCounter].TabsNavigationColorActive
                        });
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if(Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").css({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Active'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorActive : Icon[ElementCounter][ElementsCounter]['Colors']['Active']
                                });    
                            }
                            else {
                                TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").css({
                                    "color"                                     : ElementsOptions[ElementCounter].TabsNavigationColorActive
                                });  
                            }
                        }
                    }
                    PlugIn.Methods.ListenHover(ElementCounter, ElementsCounter);
                    PlugIn.Methods.ListenClick(ElementCounter, ElementsCounter);
                    MaxElement[ElementCounter]                                  = ElementsCounter;
                    ElementsCounter++;
                });
                TabsNavigation[ElementCounter].css({
                    "display"                                                   : "table"
                });
                if(ElementsOptions[ElementCounter].TabsNavigationPosition === "Left") {
                    TabsNavigation[ElementCounter].css({
                        "float"                                                 : "left"
                    });
                }
                else if(ElementsOptions[ElementCounter].TabsNavigationPosition === "Right") {
                    TabsNavigation[ElementCounter].css({
                        "float"                                                 : "right"
                    });
                }
                else if(ElementsOptions[ElementCounter].TabsNavigationPosition === "Center") {
                    TabsNavigation[ElementCounter].css({
                        "marginLeft"                                            : "auto",
                        "marginRight"                                           : "auto"
                    });
                }
                if(ElementsOptions[ElementCounter].Layout === "Vertical") {
                    PlugIn.Methods.Vertical(ElementCounter);
                }
                else if(TabsNavigation[ElementCounter].parent().width() - 10 < WidthAll[ElementCounter]) {
                    PlugIn.Methods.Vertical(ElementCounter);
                }
                else {
                   PlugIn.Methods.Horizontal(ElementCounter);
                }
                setTimeout(function() {
                    TabsContent[ElementCounter].children().each(function() {
                        if(!$(this).attr("data-ad-tabs-active")) {
                            $(this).css({
                                "display"                                       : "none"
                            });
                        }
                    });
                }, 10)
            },
            Horizontal                                                          : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                TabsNavigation[ElementCounter].parent().css({
                    "height"                                                    : ElementsOptions[ElementCounter].TabsNavigationHeight + ElementsOptions[ElementCounter].TabsNavigationBorderTopSize + ElementsOptions[ElementCounter].TabsNavigationBorderBottomSize + "px"
                });
                TabsNavigation[ElementCounter].children().each(function() {
                    if(TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width')) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "width"                                             : TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "float"                                             : "left"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "width"                                             : TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "absolute"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : TabsNavigationButton[ElementCounter][ElementsCounter].attr('data-ad-tabs-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "relative"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                            "marginLeft"                                        : "auto",
                            "marginRight"                                       : "auto",
                            "position"                                          : "relative"
                        });
                    }
                    else {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter].TabsNavigationPaddingLeft + ElementsOptions[ElementCounter].TabsNavigationPaddingRight +"px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "float"                                             : "left"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter].TabsNavigationPaddingLeft + ElementsOptions[ElementCounter].TabsNavigationPaddingRight +"px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "absolute"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter].TabsNavigationPaddingLeft + ElementsOptions[ElementCounter].TabsNavigationPaddingRight +"px",
                            "height"                                            : ElementsOptions[ElementCounter].TabsNavigationHeight + "px",
                            "position"                                          : "relative"
                        });
                        TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                            "marginLeft"                                        : "auto",
                            "marginRight"                                       : "auto",
                            "position"                                          : "relative"
                        });
                    }
                    if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate > 0) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "marginTop"                                         : 0 + "px",
                            "marginLeft"                                        : ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate + "px"
                        });
                    }
                    else if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationForceSingleSeparate === true) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "marginTop"                                         : 0 + "px",
                            "marginLeft"                                        : -ElementsOptions[ElementCounter].TabsNavigationBorderRightSize + "px"
                        });
                    }
                    ElementsCounter++;
                });
                TabsNavigationButton[ElementCounter][0].css({
                    "borderTopLeftRadius"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderTopLeftRadiusOuter + "px",
                    "borderBottomLeftRadius"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderBottomLeftRadiusOuter + "px",
                    "borderTopRightRadius"                                      : 0 + "px",
                    "borderBottomRightRadius"                                   : 0 + "px"
                });
                TabsNavigationButton[ElementCounter][0].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                    "borderTopLeftRadius"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderTopLeftRadiusInner + "px",
                    "borderBottomLeftRadius"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderBottomRightRadiusInner + "px",
                    "borderTopRightRadius"                                      : 0 + "px",
                    "borderBottomRightRadius"                                   : 0 + "px"
                });
                TabsNavigationButton[ElementCounter][MaxElement[ElementCounter]].css({
                    "borderTopLeftRadius"                                       : 0 + "px",
                    "borderBottomLeftRadius"                                    : 0 + "px",
                    "borderTopRightRadius"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderTopRightRadiusOuter + "px",
                    "borderBottomRightRadius"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderBottomRightRadiusOuter + "px"
                });
                TabsNavigationButton[ElementCounter][MaxElement[ElementCounter]].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                    "borderTopLeftRadius"                                       : 0 + "px",
                    "borderBottomLeftRadius"                                    : 0 + "px",
                    "borderTopRightRadius"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderTopRightRadiusInner + "px",
                    "borderBottomRightRadius"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderBottomRightRadiusInner + "px"
                });
            },
            Vertical                                                            : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                TabsNavigation[ElementCounter].parent().css({
                    "height"                                                    : ""
                });
                TabsNavigation[ElementCounter].children().each(function() {
                    TabsNavigationButton[ElementCounter][ElementsCounter].css({
                        "width"                                                 : TabsNavigation[ElementCounter].parent().width() - ElementsOptions[ElementCounter].TabsNavigationBorderLeftSize - ElementsOptions[ElementCounter].TabsNavigationBorderRightSize + "px",
                        "float"                                                 : ""
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                        "width"                                                 : TabsNavigation[ElementCounter].parent().width() - ElementsOptions[ElementCounter].TabsNavigationBorderLeftSize - ElementsOptions[ElementCounter].TabsNavigationBorderRightSize + "px",
                        "position"                                              : "absolute"
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "width"                                                 : TabsNavigation[ElementCounter].parent().width() - ElementsOptions[ElementCounter].TabsNavigationBorderLeftSize - ElementsOptions[ElementCounter].TabsNavigationBorderRightSize + "px",
                        "position"                                              : "relative"
                    });
                    TabsNavigationButton[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "marginLeft"                                            : "auto",
                        "marginRight"                                           : "auto",
                        "position"                                              : "relative"
                    });
                    if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate > 0) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "marginLeft"                                        : 0 + "px",
                            "marginTop"                                         : ElementsOptions[ElementCounter].TabsNavigationSpaceSeparate + "px"
                        });
                    }
                    else if(ElementsCounter > 0 && ElementsOptions[ElementCounter].TabsNavigationForceSingleSeparate === true) {
                        TabsNavigationButton[ElementCounter][ElementsCounter].css({
                            "marginLeft"                                        : 0 + "px",
                            "marginTop"                                         : -ElementsOptions[ElementCounter].TabsNavigationBorderBottomSize + "px"
                        });
                    }
                    ElementsCounter++;
                });
                TabsNavigationButton[ElementCounter][0].css({
                    "borderTopLeftRadius"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderTopLeftRadiusOuter + "px",
                    "borderBottomLeftRadius"                                    : 0 + "px",
                    "borderTopRightRadius"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderTopRightRadiusOuter + "px",
                    "borderBottomRightRadius"                                   : 0 + "px"
                });
                TabsNavigationButton[ElementCounter][0].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                    "borderTopLeftRadius"                                       : ElementsOptions[ElementCounter].TabsNavigationBorderTopLeftRadiusInner + "px",
                    "borderBottomLeftRadius"                                    : 0 + "px",
                    "borderTopRightRadius"                                      : ElementsOptions[ElementCounter].TabsNavigationBorderTopRightRadiusInner + "px",
                    "borderBottomRightRadius"                                   : 0 + "px"
                });
                TabsNavigationButton[ElementCounter][MaxElement[ElementCounter]].css({
                    "borderTopLeftRadius"                                       : 0 + "px",
                    "borderBottomLeftRadius"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderBottomLeftRadiusOuter + "px",
                    "borderTopRightRadius"                                      : 0 + "px",
                    "borderBottomRightRadius"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderBottomRightRadiusOuter + "px"
                });
                TabsNavigationButton[ElementCounter][MaxElement[ElementCounter]].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").css({
                    "borderTopLeftRadius"                                       : 0 + "px",
                    "borderBottomLeftRadius"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderBottomLeftRadiusInner + "px",
                    "borderTopRightRadius"                                      : 0 + "px",
                    "borderBottomRightRadius"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderBottomRightRadiusInner + "px"
                });
            },
            ListenHover                                                         : function (ElementCounter, ElementsCounter) {
                TabsNavigationButton[ElementCounter][ElementsCounter].stop().hover(function() {
                    if(!$(this).attr("data-ad-tabs-active")) {
                        TabsNavigation[ElementCounter].stop(true).animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXHover + "px " + ElementsOptions[ElementCounter].ShadowOuterYHover + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurHover + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadHover + "px rgba(" + ROuterHover[ElementCounter] + ", " + GOuterHover[ElementCounter] + ", " + BOuterHover[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaHover + ")"
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).stop(true).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorHover,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorHover,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorHover,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorHover
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").stop(true).animate({
                            "opacity"                                           : 0
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").stop(true).animate({
                            "color"                                             : ElementsOptions[ElementCounter].TabsNavigationColorHover
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if(Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Hover'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorHover : Icon[ElementCounter][ElementsCounter]['Colors']['Hover']
                                }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : ElementsOptions[ElementCounter].TabsNavigationColorHover
                                }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                            }
                        }
                    }
                }, function() {
                    if(!$(this).attr("data-ad-tabs-active")) {
                        TabsNavigation[ElementCounter].animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterYNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadNormal + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterNormal[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaNormal + ")"
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorNormal,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorNormal,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorNormal,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorNormal
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 1
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter].TabsNavigationColorNormal
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if(Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Normal'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorNormal : Icon[ElementCounter][ElementsCounter]['Colors']['Normal']
                                }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter].TabsNavigationColorNormal
                                }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                            }
                        }
                    }
                });
            },
            ListenClick                                                         : function (ElementCounter, ElementsCounter) {
                TabsNavigation[ElementCounter].mousedown(function() {
                    $(this).animate({
                        "boxShadow"                                             : ElementsOptions[ElementCounter].ShadowOuterXClick + "px " + ElementsOptions[ElementCounter].ShadowOuterYClick + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurClick + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadClick + "px rgba(" + ROuterClick[ElementCounter] + ", " + GOuterClick[ElementCounter] + ", " + BOuterClick[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaClick + ")"
                    }, {
                        duration                                                : ElementsOptions[ElementCounter].AnimationButtonSpeed,
                        queue                                                   : false
                    });
                });
                TabsNavigation[ElementCounter].mouseup(function() {
                    $(this).animate({
                        "boxShadow"                                             : ElementsOptions[ElementCounter].ShadowOuterXHover + "px " + ElementsOptions[ElementCounter].ShadowOuterYHover + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurHover + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadHover + "px rgba(" + ROuterHover[ElementCounter] + ", " + GOuterHover[ElementCounter] + ", " + BOuterHover[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaHover + ")"
                    
                    }, {
                        duration                                                : ElementsOptions[ElementCounter].AnimationButtonSpeed,
                        queue                                                   : false
                    });
                });
                TabsNavigationButton[ElementCounter][ElementsCounter].mousedown(function() {
                    if(!$(this).attr("data-ad-tabs-active") && Prevent[ElementCounter] === false) {
                        PlugIn.Options.BeforeUnLoadContent();
                        $(this).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorClick,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorClick,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorClick,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorClick
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow").stop(true).animate({
                            "opacity"                                           : 0
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").stop(true).animate({
                            "color"                                             : ElementsOptions[ElementCounter].TabsNavigationColorClick
                        }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if(Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Click'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorClick : Icon[ElementCounter][ElementsCounter]['Colors']['Click']
                                }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : ElementsOptions[ElementCounter].TabsNavigationColorClick
                                }, ElementsOptions[ElementCounter].AnimationButtonSpeed);
                            }
                        }
                    }
                });
                TabsNavigationButton[ElementCounter][ElementsCounter].mouseup(function() {
                    if(!$(this).attr("data-ad-tabs-active") && Prevent[ElementCounter] === false) {
                        Prevent[ElementCounter]                                 = true;
                        PrevTabID[ElementCounter]                               = TabsNavigation[ElementCounter].children("[data-ad-tabs-active]").attr("data-ad-tabs-id");
                        CurrentTabID[ElementCounter]                            = $(this).attr("data-ad-tabs-id");
                        TabsNavigation[ElementCounter].children("[data-ad-tabs-active]").animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorNormal,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorNormal,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorNormal,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorNormal
                        }, {
                            duration                                            : ElementsOptions[ElementCounter].AnimationButtonSpeed,
                            queue                                               : false
                        });
                        TabsNavigation[ElementCounter].children("[data-ad-tabs-active]").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 1
                        }, {
                            duration                                            : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                            queue                                               : false
                        });
                        TabsNavigation[ElementCounter].children("[data-ad-tabs-active]").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter].TabsNavigationColorNormal
                        }, {
                            duration                                            : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                            queue                                               : false
                        });
                        if (Icon[ElementCounter][PrevTabID[ElementCounter]]) {
                            if(Icon[ElementCounter][PrevTabID[ElementCounter]]['Colors'] !== undefined) {
                                TabsNavigation[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][PrevTabID[ElementCounter]]['Colors']['Normal'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorNormal : Icon[ElementCounter][PrevTabID[ElementCounter]]['Colors']['Normal']
                                }, {
                                    duration                                    : ElementsOptions[ElementCounter].AnimationButtonSpeed,
                                    queue                                       : false
                                });
                            }
                            else {
                                TabsNavigation[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter].TabsNavigationColorNormal
                                }, {
                                    duration                                    : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                                    queue                                       : false
                                });
                            }
                        }
                        $(this).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter].TabsNavigationBorderTopColorActive,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter].TabsNavigationBorderBottomColorActive,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter].TabsNavigationBorderLeftColorActive,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter].TabsNavigationBorderRightColorActive
                        }, {
                            duration                                            : ElementsOptions[ElementCounter].AnimationButtonSpeed,
                            queue                                               : false
                        });
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickShadow").animate({
                            "opacity"                                           : 0
                        }, {
                            duration                                            : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                            queue                                               : false
                        });
                        $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter].TabsNavigationColorActive
                        }, {
                            duration                                            : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                            queue                                               : false
                        });
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if(Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Active'] === undefined ? ElementsOptions[ElementCounter].TabsNavigationColorActive : Icon[ElementCounter][ElementsCounter]['Colors']['Active']
                                }, {
                                    duration                                    : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                                    queue                                       : false
                                });
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter].TabsNavigationColorActive
                                }, {
                                    duration                                    : ElementsOptions[ElementCounter].AnimationButtonSpeed, 
                                    queue                                       : false
                                });
                            }
                        }
                        TabsNavigation[ElementCounter].children("[data-ad-tabs-active]").removeAttr("data-ad-tabs-active");
                        TabsNavigation[ElementCounter].children("." + ElementsOptions[ElementCounter].ClassPrefix + "NavigationTab-" + CurrentTabID[ElementCounter]).attr("data-ad-tabs-active", "active");
                        TabsContent[ElementCounter].animate({
                            "opacity"                                           : 0
                        }, ElementsOptions[ElementCounter].AnimationFadeSpeed);
                        setTimeout(function() {
                            TabsContent[ElementCounter].slideUp(ElementsOptions[ElementCounter].AnimationSlideSpeed);
                        }, ElementsOptions[ElementCounter].AnimationFadeSpeed);
                        setTimeout(function() {
                            TabsContent[ElementCounter].children("[data-ad-tabs-active]").css({
                                "display"                                       : "none"
                            }).removeAttr("data-ad-tabs-active");
                            TabsContent[ElementCounter].children("." + ElementsOptions[ElementCounter].ClassPrefix + "ContentTab-" + CurrentTabID[ElementCounter]).css({
                                "display"                                       : "block"
                            }).attr("data-ad-tabs-active", "active");
                        }, ElementsOptions[ElementCounter].AnimationSlideSpeed + ElementsOptions[ElementCounter].AnimationFadeSpeed);
                        setTimeout(function() {
                            TabsContent[ElementCounter].slideDown(ElementsOptions[ElementCounter].AnimationSlideSpeed);
                        }, ElementsOptions[ElementCounter].AnimationSlideSpeed + ElementsOptions[ElementCounter].AnimationFadeSpeed);
                        setTimeout(function() {
                            $(window).trigger("resize");
                            TabsContent[ElementCounter].animate({
                                "opacity"                                       : 1
                            }, ElementsOptions[ElementCounter].AnimationFadeSpeed + ElementsOptions[ElementCounter].AnimationSlideSpeed + ElementsOptions[ElementCounter].AnimationSlideSpeed);
                        }, ElementsOptions[ElementCounter].AnimationSlideSpeed * 2 + ElementsOptions[ElementCounter].AnimationFadeSpeed);
                        setTimeout(function() {
                            PlugIn.Options.AfterLoadContent();
                        }, ElementsOptions[ElementCounter].AnimationFadeSpeed * 2 + ElementsOptions[ElementCounter].AnimationSlideSpeed + ElementsOptions[ElementCounter].AnimationSlideSpeed);
                        setTimeout(function() {
                            Prevent[ElementCounter]                             = false;
                        }, ElementsOptions[ElementCounter].AnimationFadeSpeed * 2 + ElementsOptions[ElementCounter].AnimationSlideSpeed + ElementsOptions[ElementCounter].AnimationSlideSpeed + 150);
                    }
                });
            },
            WindowResize                                                        : function(ElementCounter) {
                $(window).on("resize", function() {
                    if(TabsNavigation[ElementCounter].parent().width() - 10 < WidthAll[ElementCounter] && ElementsOptions[ElementCounter].TabsNavigationLayout === "Horizontal") {
                        PlugIn.Methods.Vertical(ElementCounter);
                    }
                    if(TabsNavigation[ElementCounter].parent().width() - 10 > WidthAll[ElementCounter] && ElementsOptions[ElementCounter].TabsNavigationLayout === "Horizontal") {
                        PlugIn.Methods.Horizontal(ElementCounter);
                    }
                    function AfterResizing(){
                        if(TabsNavigation[ElementCounter].parent().width() - 10 < WidthAll[ElementCounter] && ElementsOptions[ElementCounter].TabsNavigationLayout === "Horizontal") {
                            PlugIn.Methods.Vertical(ElementCounter);
                        }
                        if(TabsNavigation[ElementCounter].parent().width() - 10 > WidthAll[ElementCounter] && ElementsOptions[ElementCounter].TabsNavigationLayout === "Horizontal") {
                            PlugIn.Methods.Horizontal(ElementCounter);
                        }
                    }
                    clearTimeout(ResizeTimer);
                    ResizeTimer                                                 = setTimeout(AfterResizing(), 100);
                });
            },
            DataToOptions                                                       : function(String) {
                return eval("( {" + String + "} )");
            },
            ConvertHex                                                          : function(String) {
                HEX                                                             = String.replace('#', '');
                HEXR                                                            = parseInt(HEX.substring(0, 2), 16);
                HEXG                                                            = parseInt(HEX.substring(2, 4), 16);
                HEXB                                                            = parseInt(HEX.substring(4, 6), 16);
                HEXConvertResult                                                = [HEXR, HEXG, HEXB];
                return HEXConvertResult;
            }
        };
        PlugIn.Methods.Initialize();
    };
    $.ns.ArtDesignTabs.DefaultOptions                                           = {
        /*Base*/
        ClassPrefix                                                             : "Tabs_",
        StartTab                                                                : 1,
        ZIndex                                                                  : 100,
        TabsMaxWidth                                                            : 1200,
        TabsMaxUnit                                                             : "px",
        TabsContentMaxHeight                                                    : false,
        TabsNavigationLayout                                                    : "Horizontal",
        TabsNavigationSpaceSeparate                                             : 0, // if != 0 => ignore ForceSingleSeparate
        TabsNavigationForceSingleSeparate                                       : true,
        AnimationButtonSpeed                                                    : 250,
        AnimationFadeSpeed                                                      : 300,
        AnimationSlideSpeed                                                     : 300,
        /*Base*/
        /*Icons*/
        TabsNavigationIconPosition                                              : "Left",
        TabsNavigationIconSize                                                  : 13,
        TabsNavigationIconPaddingLeft                                           : 5,
        TabsNavigationIconPaddingRight                                          : 5,
        /*Icons*/
        /*Shadow*/
        ShadowOuterXNormal                                                      : 0,
        ShadowOuterYNormal                                                      : 0,
        ShadowOuterBlurNormal                                                   : 3,
        ShadowOuterSpreadNormal                                                 : 0,
        ShadowOuterColorNormal                                                  : "#000000",
        ShadowOuterAlphaNormal                                                  : 0.4,
        ShadowOuterXHover                                                       : 0,
        ShadowOuterYHover                                                       : 0,
        ShadowOuterBlurHover                                                    : 0,
        ShadowOuterSpreadHover                                                  : 0,
        ShadowOuterColorHover                                                   : "#000000",
        ShadowOuterAlphaHover                                                   : 0,
        ShadowOuterXClick                                                       : 0,
        ShadowOuterYClick                                                       : 0,
        ShadowOuterBlurClick                                                    : 0,
        ShadowOuterSpreadClick                                                  : 0,
        ShadowOuterColorClick                                                   : "#000000",
        ShadowOuterAlphaClick                                                   : 0,
        /*Shadow*/
        /*TabsNavigation*/
        TabsNavigationPosition                                                  : "Center",
        TabsNavigationHeight                                                    : 28,
        TabsNavigationPaddingLeft                                               : 40,
        TabsNavigationPaddingRight                                              : 40,
        TabsNavigationCursor                                                    : "pointer",
        /*TabsNavigation*/
        /*Fonts*/
        TabsNavigationFontFamily                                                : "sans-serif",
        TabsNavigationFontSize                                                  : 12,
        TabsNavigationFontWeight                                                : "bold",
        TabsNavigationFontStyle                                                 : "normal",
        TabsNavigationFontLineHeight                                            : 2.4,
        /*Fonts*/
        /*Border*/
        TabsNavigationBorderTopSize                                             : 1,
        TabsNavigationBorderBottomSize                                          : 0,
        TabsNavigationBorderLeftSize                                            : 1,
        TabsNavigationBorderRightSize                                           : 1,
        TabsNavigationBorderStyle                                               : "solid",
        TabsNavigationBorderTopLeftRadiusOuter                                  : 5,
        TabsNavigationBorderTopRightRadiusOuter                                 : 5,
        TabsNavigationBorderBottomLeftRadiusOuter                               : 0,
        TabsNavigationBorderBottomRightRadiusOuter                              : 0,
        TabsNavigationBorderTopLeftRadiusInner                                  : 4,
        TabsNavigationBorderTopRightRadiusInner                                 : 4,
        TabsNavigationBorderBottomLeftRadiusInner                               : 0,
        TabsNavigationBorderBottomRightRadiusInner                              : 0,
        /*Border*/
        /*Normal*/
        TabsNavigationBackgroundColorNormal                                     : "#FDFDFD",
        TabsNavigationColorNormal                                               : "#8E8E8E",
        TabsNavigationBorderTopColorNormal                                      : "#A6A6A6",
        TabsNavigationBorderBottomColorNormal                                   : "#A6A6A6",
        TabsNavigationBorderLeftColorNormal                                     : "#A6A6A6",
        TabsNavigationBorderRightColorNormal                                    : "#A6A6A6",
        TabsNavigationGradientStartColorNormal                                  : "#FDFDFD",
        TabsNavigationGradientEndColorNormal                                    : "#E3E3E3",
        TabsNavigationShadowInnerXNormal                                        : 0,
        TabsNavigationShadowInnerYNormal                                        : 1,
        TabsNavigationShadowInnerBlurNormal                                     : 0,
        TabsNavigationShadowInnerSpreadNormal                                   : 0,
        TabsNavigationShadowInnerColorNormal                                    : "#FFFFFF",
        TabsNavigationShadowInnerAlphaNormal                                    : 1,
        /*Normal*/
        /*Hover*/
        TabsNavigationBackgroundColorHover                                      : "#E3E3E3",
        TabsNavigationColorHover                                                : "#8E8E8E",
        TabsNavigationBorderTopColorHover                                       : "#A6A6A6",
        TabsNavigationBorderBottomColorHover                                    : "#A6A6A6",
        TabsNavigationBorderLeftColorHover                                      : "#A6A6A6",
        TabsNavigationBorderRightColorHover                                     : "#A6A6A6",
        TabsNavigationGradientStartColorHover                                   : "#E3E3E3",
        TabsNavigationGradientEndColorHover                                     : "#E3E3E3",
        TabsNavigationShadowInnerXHover                                         : 0,
        TabsNavigationShadowInnerYHover                                         : 1,
        TabsNavigationShadowInnerBlurHover                                      : 0,
        TabsNavigationShadowInnerSpreadHover                                    : 0,
        TabsNavigationShadowInnerColorHover                                     : "#FFFFFF",
        TabsNavigationShadowInnerAlphaHover                                     : 0.6,
        /*Hover*/
        /*Click*/
        TabsNavigationBackgroundColorClick                                      : "#E6E6E6",
        TabsNavigationColorClick                                                : "#8E8E8E",
        TabsNavigationBorderTopColorClick                                       : "#A6A6A6",
        TabsNavigationBorderBottomColorClick                                    : "#A6A6A6",
        TabsNavigationBorderLeftColorClick                                      : "#A6A6A6",
        TabsNavigationBorderRightColorClick                                     : "#A6A6A6",
        TabsNavigationGradientStartColorClick                                   : "#CDCDCD",
        TabsNavigationGradientEndColorClick                                     : "#E3E3E3",
        TabsNavigationShadowInnerXClick                                         : 0,
        TabsNavigationShadowInnerYClick                                         : 1,
        TabsNavigationShadowInnerBlurClick                                      : 3,
        TabsNavigationShadowInnerSpreadClick                                    : 0,
        TabsNavigationShadowInnerColorClick                                     : "#000000",
        TabsNavigationShadowInnerAlphaClick                                     : 0.1,
        /*Click*/
        /*Active*/
        TabsNavigationBackgroundColorActive                                     : "#E6E6E6",
        TabsNavigationColorActive                                               : "#8E8E8E",
        TabsNavigationBorderTopColorActive                                      : "#A6A6A6",
        TabsNavigationBorderBottomColorActive                                   : "#A6A6A6",
        TabsNavigationBorderLeftColorActive                                     : "#A6A6A6",
        TabsNavigationBorderRightColorActive                                    : "#A6A6A6",
        TabsNavigationGradientStartColorActive                                  : "#CDCDCD",
        TabsNavigationGradientEndColorActive                                    : "#E3E3E3",
        TabsNavigationShadowInnerXActive                                        : 0,
        TabsNavigationShadowInnerYActive                                        : 1,
        TabsNavigationShadowInnerBlurActive                                     : 3,
        TabsNavigationShadowInnerSpreadActive                                   : 0,
        TabsNavigationShadowInnerColorActive                                    : "#000000",
        TabsNavigationShadowInnerAlphaActive                                    : 0.1,
        /*Active*/
        /*TabsContent*/
        TabsContentMarginTop                                                    : 0,
        TabsContentBorderTopStyle                                               : "solid",
        TabsContentBorderBottomStyle                                            : "solid",
        TabsContentBorderLeftStyle                                              : "solid",
        TabsContentBorderRightStyle                                             : "solid",
        TabsContentBorderTopSize                                                : 1,
        TabsContentBorderBottomSize                                             : 1,
        TabsContentBorderLeftSize                                               : 1,
        TabsContentBorderRightSize                                              : 1,
        TabsContentBorderTopColor                                               : "#A6A6A6",
        TabsContentBorderBottomColor                                            : "#A6A6A6",
        TabsContentBorderLeftColor                                              : "#A6A6A6",
        TabsContentBorderRightColor                                             : "#A6A6A6",
        TabsContentBorderTopLeftRadius                                          : 0,
        TabsContentBorderTopRightRadius                                         : 0,
        TabsContentBorderBottomLeftRadius                                       : 5,
        TabsContentBorderBottomRightRadius                                      : 5,
        TabsContentPaddingTop                                                   : 20,
        TabsContentPaddingBottom                                                : 20,
        TabsContentPaddingLeft                                                  : 20,
        TabsContentPaddingRight                                                 : 20,
        /*TabsContent*/
        BeforeUnLoadContent                                                     : function() {},
        AfterLoadContent                                                        : function() {}
    };
    $.fn.ArtDesignTabs                                                          = function(Options) {
        var ArtDesignTabs                                                       = (new $.ns.ArtDesignTabs(this, Options));
        return ArtDesignTabs.PublicMethods;
    };
})( jQuery );