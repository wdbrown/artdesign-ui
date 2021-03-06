/*
!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!

ArtDesignUI (v.1.0.0)
www.artdesign-ui.com

ArtDesignCheckBox (v.1.0.0) - part of ArtDesignUI
1301 Lines
www.artdesign-ui.com/ArtDesignCheckBox

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
    $.ns.ArtDesignCheckBox                                                      = function(Element, Options) {
        var PlugIn                                                              = this;
        PlugIn.$Element                                                         = $(Element);
        PlugIn.Options                                                          = $.extend({}, $.ns.ArtDesignCheckBox.DefaultOptions, Options);
        var ElementCounter                                                      = 0,
            ElementsCounter                                                     = 0,
            Counter                                                             = [],
            NativeCheckBoxGroup                                                 = [],
            CheckBoxGroup                                                       = [],
            NativeCheckBox                                                      = [],
            CheckBox                                                            = [],
            NativeOptions                                                       = [],
            NativeOptionsSplit                                                  = [],
            ElementsOptions                                                     = [],
            Icon                                                                = [],
            MaxElement                                                          = [],
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
            MaxWidth                                                            = [],
            CurrentLayout                                                       = [],
            ResizeTimer;
        PlugIn.Methods                                                          = {
            Initialize                                                          : function() {
                PlugIn.$Element.find("[data-plugin-ad-check-box='ad-check-box']").each(function() {
                    if (!$(this).attr("data-ad-check-box-initialize")) {
                        NativeCheckBoxGroup[ElementCounter] = $(this);
                        ElementsOptions[ElementCounter]                         = $.extend({}, $.ns.ArtDesignCheckBox.DefaultOptions, Options);
                        if (NativeCheckBoxGroup[ElementCounter].attr("data-ad-check-box-options")) {
                            NativeOptions[ElementCounter]                       = NativeCheckBoxGroup[ElementCounter].attr("data-ad-check-box-options").replace(/ /g, "");
                            NativeOptionsSplit[ElementCounter]                  = NativeOptions[ElementCounter].split(',');
                            for (var a = 0; a < NativeOptionsSplit[ElementCounter].length; a++) {
                                if ($.CheckBoxes !== undefined && $.CheckBoxes[NativeOptionsSplit[ElementCounter][a]]) {
                                    ElementsOptions[ElementCounter]             = $.extend({}, ElementsOptions[ElementCounter], $.CheckBoxes[NativeOptionsSplit[ElementCounter][a]]);
                                }
                            }
                        }
                        CheckBoxGroup[ElementCounter]                              = $(this);
                        CheckBoxGroup[ElementCounter].attr("data-ad-check-box-initialize", "initialize");
                        CheckBoxGroup[ElementCounter].find("*").css({
                            display                                             : "none"
                        });
                        PlugIn.Methods.PrepareElement(ElementCounter);
                        $("body").ArtDesignIcons();
                        PlugIn.Methods.CSS(ElementCounter);
                        PlugIn.Methods.WindowResize(ElementCounter);
                        ElementCounter++;
                    }
                });
                $(window).trigger("resize");
            },
            PrepareElement                                                      : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                CurrentLayout[ElementCounter] = "Horizontal";
                NativeCheckBox[ElementCounter]                                  = [];
                CheckBox[ElementCounter]                                        = [];
                Icon[ElementCounter]                                            = [];
                CheckBoxGroup[ElementCounter].find("input:checkbox").each(function() {
                    NativeCheckBox[ElementCounter][ElementsCounter]                = $(this);
                    $(this).attr("data-ad-check-box-native-id", ElementsCounter);
                    if (NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-icon')) {
                        Icon[ElementCounter][ElementsCounter]                   = PlugIn.Methods.DataToOptions(NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-icon'));
                        if (ElementsOptions[ElementCounter].IconPosition === "Left") {
                            $('<div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'CheckBox ' + ElementsOptions[ElementCounter].ClassPrefix + 'CheckBox-' + ElementsCounter + '" data-ad-check-box-id="'+ ElementsCounter +'"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonText"><span class="' + ElementsOptions[ElementCounter].ClassPrefix + 'Icon ' + Icon[ElementCounter][ElementsCounter]['Icon'] + '"></span>' + NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-label') + '</div></div>')
                                .appendTo($(CheckBoxGroup[ElementCounter]));
                        }
                        else if (ElementsOptions[ElementCounter].IconPosition === "Right") {
                            $('<div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'CheckBox ' + ElementsOptions[ElementCounter].ClassPrefix + 'CheckBox-' + ElementsCounter + '" data-ad-check-box-id="'+ ElementsCounter +'"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonText">' + NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-label') + '<span class="' + ElementsOptions[ElementCounter].ClassPrefix + 'Icon ' + Icon[ElementCounter][ElementsCounter]['Icon'] + '"></span></div></div>')
                                .appendTo($(CheckBoxGroup[ElementCounter]));
                        }
                    }
                    else {
                        $('<div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'CheckBox ' + ElementsOptions[ElementCounter].ClassPrefix + 'CheckBox-' + ElementsCounter + '" data-ad-check-box-id="'+ ElementsCounter +'"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonActiveShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonClickShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonHoverShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalContent"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalGradient"><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonNormalShadow"></div></div></div><div class="' + ElementsOptions[ElementCounter].ClassPrefix + 'ButtonText">' + NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-label') + '</div></div>')
                            .appendTo($(CheckBoxGroup[ElementCounter]));
                    }
                    CheckBox[ElementCounter][ElementsCounter]                   = CheckBoxGroup[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "CheckBox-" + ElementsCounter);
                    MaxElement[ElementCounter]                                  = ElementsCounter;
                    ElementsCounter++;
                });
                Counter[ElementCounter] = ElementsCounter;
            },
            CSS                                                                 : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                NativeOptions[ElementCounter]                                   = [];
                NativeOptionsSplit[ElementCounter]                              = [];
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
                CheckBoxGroup[ElementCounter].css({
                    width                                                       : "auto",
                    display                                                     : "table"
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
                CheckBoxGroup[ElementCounter].css({
                    "borderTopLeftRadius"                                       : PlugIn.Options.BorderTopLeftRadiusOuter + "px",
                    "borderTopRightRadius"                                      : PlugIn.Options.BorderTopRightRadiusOuter + "px",
                    "borderBottomLeftRadius"                                    : PlugIn.Options.BorderBottomLeftRadiusOuter + "px",
                    "borderBottomRightRadius"                                   : PlugIn.Options.BorderBottomRightRadiusOuter + "px",
                    "boxShadow"                                                 : ElementsOptions[ElementCounter].ShadowOuterXNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterYNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadNormal + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterNormal[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaNormal + ")"
                });
                CheckBoxGroup[ElementCounter].find("input:checkbox").each(function() {
                    ElementsOptions[ElementCounter][ElementsCounter]            = ElementsOptions[ElementCounter];
                    if ($(this).attr("data-ad-check-box-options")) {
                        NativeOptions[ElementCounter][ElementsCounter]          = $(this).attr("data-ad-check-box-options").replace(/\s+/, "");
                        NativeOptionsSplit[ElementCounter][ElementsCounter]     = NativeOptions[ElementCounter][ElementsCounter].split(',');
                        for (var a = 0; a < NativeOptionsSplit[ElementCounter][ElementsCounter].length; a++) {
                            if ($.CheckBoxes !== undefined && $.CheckBoxes[NativeOptionsSplit[ElementCounter][ElementsCounter][a]]) {
                                ElementsOptions[ElementCounter][ElementsCounter]
                                                                                = $.extend({}, ElementsOptions[ElementCounter][ElementsCounter], $.CheckBoxes[NativeOptionsSplit[ElementCounter][ElementsCounter][a]]);
                            }
                            else {
                                ElementsOptions[ElementCounter][ElementsCounter]
                                                                                = ElementsOptions[ElementCounter];
                            }
                        }
                    }
                    else {
                        ElementsOptions[ElementCounter][ElementsCounter]        = ElementsOptions[ElementCounter];
                    }
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "position"                                              : "absolute",
                        "whiteSpace"                                            : "nowrap",
                        "paddingLeft"                                           : ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + "px",
                        "paddingRight"                                          : ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px",
                        "cursor"                                                : ElementsOptions[ElementCounter][ElementsCounter].Cursor,
                        "color"                                                 : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal,
                        "fontFamily"                                            : ElementsOptions[ElementCounter][ElementsCounter].FontFamily,
                        "fontSize"                                              : ElementsOptions[ElementCounter][ElementsCounter].FontSize + "px",
                        "fontWeight"                                            : ElementsOptions[ElementCounter][ElementsCounter].FontWeight,
                        "fontStyle"                                             : ElementsOptions[ElementCounter][ElementsCounter].FontStyle,
                        "lineHeight"                                            : ElementsOptions[ElementCounter][ElementsCounter].FontLineHeight + "em",
                        "textAlign"                                             : "center"
                    });
                    if (NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width')) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "width"                                             : NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "width"                                             : NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px",
                            "position"                                          : "absolute"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px",
                            "position"                                          : "relative"
                        });
                        WidthOneText[ElementCounter][ElementsCounter]           = CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").width();
                        WidthOne[ElementCounter][ElementsCounter]               = WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight;
                        WidthAll[ElementCounter]                               += parseInt(NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width')) + ElementsOptions[ElementCounter][ElementsCounter].BorderLeftSize + ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize;
                        if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate > 0) {
                            WidthAll[ElementCounter]                           += ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate;
                        }
                        else if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].ForceSingleSeparate === true) {
                            WidthAll[ElementCounter]                           += -ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize;
                        }
                    }
                    else {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "width"                                             : CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").width() + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + ElementsOptions[ElementCounter][ElementsCounter].BorderLeftSize + ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px",
                            "float"                                             : "left"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "width"                                             : CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").width() + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px",
                            "position"                                          : "absolute"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").width() + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px",
                            "position"                                          : "relative"
                        });
                        WidthOneText[ElementCounter][ElementsCounter]           = CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").width();
                        WidthOne[ElementCounter][ElementsCounter]               = WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight;
                        WidthAll[ElementCounter]                               += WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + ElementsOptions[ElementCounter][ElementsCounter].BorderLeftSize + ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize;
                        if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate > 0) {
                            WidthAll[ElementCounter]                           += ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate;
                        }
                        else if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].ForceSingleSeparate === true) {
                            WidthAll[ElementCounter]                           += -ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize;
                        }
                    }
                    CheckBox[ElementCounter][ElementsCounter].css({
                        "position"                                              : "relative",
                        "overflow"                                              : "hidden",
                        "borderStyle"                                           : ElementsOptions[ElementCounter][ElementsCounter].BorderStyle,
                        "borderTopWidth"                                        : ElementsOptions[ElementCounter][ElementsCounter].BorderTopSize + "px",
                        "borderTopColor"                                        : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorNormal,
                        "borderBottomWidth"                                     : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px",
                        "borderBottomColor"                                     : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorNormal,
                        "borderLeftWidth"                                       : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftSize + "px",
                        "borderLeftColor"                                       : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorNormal,
                        "borderRightWidth"                                      : ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize + "px",
                        "borderRightColor"                                      : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorNormal
                    });
                    ResultInnerActive[ElementCounter][ElementsCounter]          = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerColorActive);
                    RInnerActive[ElementCounter][ElementsCounter]               = ResultInnerActive[ElementCounter][ElementsCounter][0];
                    GInnerActive[ElementCounter][ElementsCounter]               = ResultInnerActive[ElementCounter][ElementsCounter][1];
                    BInnerActive[ElementCounter][ElementsCounter]               = ResultInnerActive[ElementCounter][ElementsCounter][2];
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter][ElementsCounter].BackgroundColorActive,
                        "color"                                                 : ElementsOptions[ElementCounter][ElementsCounter].ColorActive,
                        "cursor"                                                : ElementsOptions[ElementCounter][ElementsCounter].Cursor
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerXActive + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerYActive + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerBlurActive + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerSpreadActive + "px rgba(" + RInnerActive[ElementCounter][ElementsCounter] + ", " + GInnerActive[ElementCounter][ElementsCounter] + ", " + BInnerActive[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerAlphaActive + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + "))"
                            });
                            break;
                        case "Firefox":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + "))"
                                });
                            }
                            else {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive !== "transparent" && ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive !== "transparent") {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + "', endColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorActive + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorActive + "))"
                            });
                    }
                    ResultInnerClick[ElementCounter][ElementsCounter]           = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerColorClick);
                    RInnerClick[ElementCounter][ElementsCounter]                = ResultInnerClick[ElementCounter][ElementsCounter][0];
                    GInnerClick[ElementCounter][ElementsCounter]                = ResultInnerClick[ElementCounter][ElementsCounter][1];
                    BInnerClick[ElementCounter][ElementsCounter]                = ResultInnerClick[ElementCounter][ElementsCounter][2];
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter][ElementsCounter].BackgroundColorClick,
                        "color"                                                 : ElementsOptions[ElementCounter][ElementsCounter].ColorClick,
                        "cursor"                                                : ElementsOptions[ElementCounter][ElementsCounter].Cursor
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerXClick + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerYClick + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerBlurClick + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerSpreadClick + "px rgba(" + RInnerClick[ElementCounter][ElementsCounter] + ", " + GInnerClick[ElementCounter][ElementsCounter] + ", " + BInnerClick[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerAlphaClick + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + "))"
                            });
                            break;
                        case "Firefox":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + "))"
                                });
                            }
                            else {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick !== "transparent" && ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick !== "transparent") {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + "', endColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorClick + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorClick + "))"
                            });
                    }
                    ResultInnerHover[ElementCounter][ElementsCounter]           = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerColorHover);
                    RInnerHover[ElementCounter][ElementsCounter]                = ResultInnerHover[ElementCounter][ElementsCounter][0];
                    GInnerHover[ElementCounter][ElementsCounter]                = ResultInnerHover[ElementCounter][ElementsCounter][1];
                    BInnerHover[ElementCounter][ElementsCounter]                = ResultInnerHover[ElementCounter][ElementsCounter][2];
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter][ElementsCounter].BackgroundColorHover,
                        "color"                                                 : ElementsOptions[ElementCounter][ElementsCounter].ColorHover,
                        "cursor"                                                : ElementsOptions[ElementCounter][ElementsCounter].Cursor
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerXHover + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerYHover + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerBlurHover + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerSpreadHover + "px rgba(" + RInnerHover[ElementCounter][ElementsCounter] + ", " + GInnerHover[ElementCounter][ElementsCounter] + ", " + BInnerHover[ElementCounter][ElementsCounter] + ", " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerAlphaHover + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + "))"
                            });
                            break;
                        case "Firefox":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + "))"
                                });
                            }
                            else {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover !== "transparent" && ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover !== "transparent") {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + "', endColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorHover + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorHover + "))"
                            });
                    }
                    ResultInnerNormal[ElementCounter][ElementsCounter]          = PlugIn.Methods.ConvertHex(ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerColorNormal);
                    RInnerNormal[ElementCounter][ElementsCounter]               = ResultInnerNormal[ElementCounter][ElementsCounter][0];
                    GInnerNormal[ElementCounter][ElementsCounter]               = ResultInnerNormal[ElementCounter][ElementsCounter][1];
                    BInnerNormal[ElementCounter][ElementsCounter]               = ResultInnerNormal[ElementCounter][ElementsCounter][2];
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "backgroundColor"                                       : ElementsOptions[ElementCounter][ElementsCounter].BackgroundColorNormal,
                        "color"                                                 : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal,
                        "cursor"                                                : ElementsOptions[ElementCounter][ElementsCounter].Cursor
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                        "boxShadow"                                             : "inset " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerXNormal + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerYNormal + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerBlurNormal + "px " + ElementsOptions[ElementCounter][ElementsCounter].ShadowInnerSpreadNormal + "px rgba(" + RInnerNormal[ElementCounter][ElementsCounter] + ", " + GInnerNormal[ElementCounter][ElementsCounter] + ", " + BInnerNormal[ElementCounter][ElementsCounter] + ", " + 1 + ")"
                    });
                    switch (window.Browser) {
                        case "Chrome":
                        case "Safari":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + "))"
                            });
                            break;
                        case "Firefox":
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "background"                                    : "-moz-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + " 100%)"
                            });
                            break;
                        case "Opera":
                            if (window.BrowserVersion >= 15) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "background"                                : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + "))"
                                });
                            }
                            else {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "background"                                : "-o-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + " 100%)"
                                });
                            }
                            break;
                        case "Explorer":
                            if (window.BrowserVersion >= 10) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "background"                                : "-ms-linear-gradient(top, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + " 0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + " 100%)"
                                });
                            }
                            else if (window.BrowserVersion < 10 && ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal !== "transparent" && ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal !== "transparent") {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                    "filter"                                    : "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + "', endColorstr='" + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + "', GradientType=0)"
                                });
                            }
                            break;
                        default:
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "background"                                    : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientStartColorNormal + "), color-stop(100%, " + ElementsOptions[ElementCounter][ElementsCounter].GradientEndColorNormal + "))"
                            });
                    }
                    if (ElementsOptions[ElementCounter].IconPosition === "Left") {
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").css({
                            "fontSize"                                          : ElementsOptions[ElementCounter][ElementsCounter].IconSize + "px",
                            "paddingRight"                                      : ElementsOptions[ElementCounter][ElementsCounter].IconPaddingRight + "px"
                        });
                    }
                    else if (ElementsOptions[ElementCounter].IconPosition === "Right") {
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").css({
                            "fontSize"                                          : ElementsOptions[ElementCounter][ElementsCounter].IconSize + "px",
                            "paddingLeft"                                       : ElementsOptions[ElementCounter][ElementsCounter].IconPaddingLeft + "px"
                        });
                    }
                    if (Icon[ElementCounter][ElementsCounter]) {
                        if (Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").css({
                                "color"                                         : Icon[ElementCounter][ElementsCounter]['Colors']['Normal'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorNormal : Icon[ElementCounter][ElementsCounter]['Colors']['Normal']
                            });
                        }
                        else {
                            CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").css({
                                "color"                                         : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                            });
                        }
                    }
                    if (NativeCheckBox[ElementCounter][ElementsCounter].attr("checked")) {
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow").css({
                            "opacity"                                           : 0
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").css({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorActive
                        });
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorActive,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorActive,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorActive,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorActive
                        });
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").css({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Active'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorActive : Icon[ElementCounter][ElementsCounter]['Colors']['Active']
                                });
                            }
                            else {
                                CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").css({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorActive
                                });
                            }
                        }
                        CheckBox[ElementCounter][ElementsCounter].attr("data-ad-check-box-checked", "checked");
                    }
                    PlugIn.Methods.ListenHover(ElementCounter, ElementsCounter);
                    PlugIn.Methods.ListenClick(ElementCounter, ElementsCounter);
                    PlugIn.Methods.ListenAttrChange(ElementCounter, ElementsCounter);
                    PlugIn.Methods.ExternalChange(ElementCounter, ElementsCounter);
                    ElementsCounter++;
                    if($(this).attr("disabled")) {
                        if($(this).attr("checked")) {
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").attr('data-ad-check-box-disabled','disabled');
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").css({
                                "opacity"                                       : ElementsOptions[ElementCounter].OpacityDisabled
                            });
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                                "opacity"                                       : ElementsOptions[ElementCounter].OpacityDisabled,
                                "cursor"                                        : ElementsOptions[ElementCounter].CursorDisabled
                            });
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "cursor"                                        : ElementsOptions[ElementCounter].CursorDisabled
                            });
                        }
                        else {
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").attr('data-ad-check-box-disabled','disabled');
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").css({
                                "opacity"                                       : 0
                            });
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                                "opacity"                                       : ElementsOptions[ElementCounter].OpacityDisabled,
                                "cursor"                                        : ElementsOptions[ElementCounter].CursorDisabled
                            });
                            CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id='" + $(this).attr("data-ad-check-box-native-id") + "']").find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                                "opacity"                                       : ElementsOptions[ElementCounter].OpacityDisabled,
                                "cursor"                                        : ElementsOptions[ElementCounter].CursorDisabled
                            });
                        }
                    }
                });
                MaxWidth[ElementCounter]                                        = 0;
                CheckBoxGroup[ElementCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "CheckBox").each(function(){
                    if (parseInt($(this).width()) > MaxWidth[ElementCounter]) {
                        MaxWidth[ElementCounter]                                = parseInt($(this).width());
                    }
                });
                PlugIn.Methods.Horizontal(ElementCounter);
                if (ElementsOptions[ElementCounter].Layout === "Vertical") {
                    PlugIn.Methods.Vertical(ElementCounter);
                }
                else if (CheckBoxGroup[ElementCounter].parent().width() <= WidthAll[ElementCounter] + ElementsOptions[ElementCounter].BorderLeftSize + ElementsOptions[ElementCounter].BorderRightSize - ( (Counter[ElementCounter] - 1) * ElementsOptions[ElementCounter].BorderRightSize ) && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Horizontal") {
                    PlugIn.Methods.Vertical(ElementCounter);
                }
                else {
                    PlugIn.Methods.Horizontal(ElementCounter);
                }
            },
            Horizontal                                                          : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                CheckBoxGroup[ElementCounter].find("input:checkbox").each(function() {
                    CheckBoxGroup[ElementCounter].css({
                        "width"                                                 : WidthAll[ElementCounter] + "px",
                        "maxWidth"                                              : ""
                    });
                    if (NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width')) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "width"                                             : NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width') + "px",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "float"                                             : "left"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width') + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "position"                                          : "absolute"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : NativeCheckBox[ElementCounter][ElementsCounter].attr('data-ad-check-box-width') + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "position"                                          : "relative"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "position"                                          : "relative",
                            "marginLeft"                                        : "auto",
                            "marginRight"                                       : "auto"
                        });
                    }
                    else {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "float"                                             : "left"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "position"                                          : "absolute"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "position"                                          : "absolute"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").css({
                            "width"                                             : WidthOneText[ElementCounter][ElementsCounter] + "px",
                            "maxWidth"                                          : "",
                            "height"                                            : ElementsOptions[ElementCounter][ElementsCounter].Height + "px",
                            "position"                                          : "relative",
                            "paddingLeft"                                       : ElementsOptions[ElementCounter][ElementsCounter].PaddingLeft + "px",
                            "paddingRight"                                      : ElementsOptions[ElementCounter][ElementsCounter].PaddingRight + "px"
                        });
                    }
                    if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate > 0) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "marginTop"                                         : 0 + "px",
                            "marginLeft"                                        : ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate + "px"
                        });
                    }
                    else if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].ForceSingleSeparate === true) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "marginTop"                                         : 0 + "px",
                            "marginLeft"                                        : -ElementsOptions[ElementCounter][ElementsCounter].BorderRightSize + "px"
                        });
                    }
                    if (ElementsCounter === 0) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "borderTopLeftRadius"                               : ElementsOptions[ElementCounter].BorderTopLeftRadiusOuter + "px",
                            "borderTopRightRadius"                              : 0 + "px",
                            "borderBottomLeftRadius"                            : ElementsOptions[ElementCounter].BorderBottomLeftRadiusOuter + "px",
                            "borderBottomRightRadius"                           : 0 + "px"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "borderTopLeftRadius"                               : ElementsOptions[ElementCounter].BorderTopLeftRadiusInner + "px",
                            "borderTopRightRadius"                              : 0 + "px",
                            "borderBottomLeftRadius"                            : ElementsOptions[ElementCounter].BorderBottomLeftRadiusInner + "px",
                            "borderBottomRightRadius"                           : 0 + "px"
                        });
                    }
                    if (ElementsCounter === MaxElement[ElementCounter]) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "borderTopLeftRadius"                               : 0 + "px",
                            "borderTopRightRadius"                              : ElementsOptions[ElementCounter].BorderTopRightRadiusOuter + "px",
                            "borderBottomLeftRadius"                            : 0 + "px",
                            "borderBottomRightRadius"                           : ElementsOptions[ElementCounter].BorderBottomRightRadiusOuter + "px"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "borderTopLeftRadius"                               : 0 + "px",
                            "borderTopRightRadius"                              : ElementsOptions[ElementCounter].BorderTopRightRadiusInner + "px",
                            "borderBottomLeftRadius"                            : 0 + "px",
                            "borderBottomRightRadius"                           : ElementsOptions[ElementCounter].BorderBottomRightRadiusInner + "px"
                        });
                    }
                    ElementsCounter++;
                });
            },
            Vertical                                                            : function(ElementCounter) {
                ElementsCounter                                                 = 0;
                CheckBoxGroup[ElementCounter].find("input:checkbox").each(function() {
                    CheckBoxGroup[ElementCounter].css({
                        "width"                                                 : "100%",
                        "maxWidth"                                              : MaxWidth[ElementCounter] + "px"
                    });
                    CheckBox[ElementCounter][ElementsCounter].css({
                        "width"                                                 : "100%",
                        "maxWidth"                                              : MaxWidth[ElementCounter] + "px",
                        "float"                                                 : "",
                        "textAlign"                                             : "center"
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverContent, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalContent").css({
                        "width"                                                 : "100%",
                        "maxWidth"                                              : MaxWidth[ElementCounter] + "px"
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                        "width"                                                 : "100%",
                        "maxWidth"                                              : MaxWidth[ElementCounter] + "px"
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "width"                                                 : "100%",
                        "maxWidth"                                              : MaxWidth[ElementCounter] + "px"
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").css({
                        "width"                                                 : "100%",
                        "maxWidth"                                              : MaxWidth[ElementCounter] + "px",
                        "textAlign"                                             : "center",
                        "paddingLeft"                                           : 0 + "px",
                        "paddingRight"                                          : 0 + "px"
                    });
                    if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate > 0) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "marginLeft"                                        : 0 + "px",
                            "marginTop"                                         : ElementsOptions[ElementCounter][ElementsCounter].SpaceSeparate + "px"
                        });
                    }
                    else if (ElementsCounter > 0 && ElementsOptions[ElementCounter][ElementsCounter].ForceSingleSeparate === true) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "marginLeft"                                        : 0 + "px",
                            "marginTop"                                         : -ElementsOptions[ElementCounter][ElementsCounter].BorderBottomSize + "px"
                        });
                    }
                    if (ElementsCounter === 0) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "borderTopLeftRadius"                               : ElementsOptions[ElementCounter].BorderTopLeftRadiusOuter + "px",
                            "borderTopRightRadius"                              : ElementsOptions[ElementCounter].BorderTopRightRadiusOuter + "px",
                            "borderBottomLeftRadius"                            : 0 + "px",
                            "borderBottomRightRadius"                           : 0 + "px"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "borderTopLeftRadius"                               : ElementsOptions[ElementCounter].BorderTopLeftRadiusInner  + "px",
                            "borderTopRightRadius"                              : ElementsOptions[ElementCounter].BorderTopRightRadiusInner  + "px",
                            "borderBottomLeftRadius"                            : 0 + "px",
                            "borderBottomRightRadius"                           : 0 + "px"
                        });
                    }
                    if (ElementsCounter === MaxElement[ElementCounter]) {
                        CheckBox[ElementCounter][ElementsCounter].css({
                            "borderTopLeftRadius"                               : 0 + "px",
                            "borderTopRightRadius"                              : 0 + "px",
                            "borderBottomLeftRadius"                            : ElementsOptions[ElementCounter].BorderBottomLeftRadiusOuter + "px",
                            "borderBottomRightRadius"                           : ElementsOptions[ElementCounter].BorderBottomRightRadiusOuter + "px"
                        });
                        CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonActiveShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").css({
                            "borderTopLeftRadius"                               : 0 + "px",
                            "borderTopRightRadius"                              : 0 + "px",
                            "borderBottomLeftRadius"                            : ElementsOptions[ElementCounter].BorderBottomLeftRadiusInner  + "px",
                            "borderBottomRightRadius"                           : ElementsOptions[ElementCounter].BorderBottomRightRadiusInner  + "px"
                        });
                    }
                    ElementsCounter++;
                });
            },
            ListenHover                                                         : function(ElementCounter, ElementsCounter) {
                CheckBox[ElementCounter][ElementsCounter].stop().hover(function() {
                    if (!$(this).attr('data-ad-check-box-checked') && !$(this).attr('data-ad-check-box-disabled')) {
                        CheckBoxGroup[ElementCounter].animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXHover + "px " + ElementsOptions[ElementCounter].ShadowOuterYHover + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurHover + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadHover + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterHover[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaHover + ")"
                        }, ElementsOptions[ElementCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").stop(true).animate({
                            "opacity"                                           : 0
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").stop(true).animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorHover
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Hover'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorHover : Icon[ElementCounter][ElementsCounter]['Colors']['Hover']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorHover
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBox[ElementCounter][ElementsCounter].stop(true).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorHover,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorHover,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorHover,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorHover
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                    }
                }, function() {
                    if (!$(this).attr('data-ad-check-box-checked') && !$(this).attr('data-ad-check-box-disabled')) {
                        CheckBoxGroup[ElementCounter].animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterYNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadNormal + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterNormal[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaNormal + ")"
                        }, ElementsOptions[ElementCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 1
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Normal'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorNormal : Icon[ElementCounter][ElementsCounter]['Colors']['Normal']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBox[ElementCounter][ElementsCounter].animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorNormal,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorNormal,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorNormal,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorNormal
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                    }
                });
            },
            ListenClick                                                         : function(ElementCounter, ElementsCounter) {
                CheckBox[ElementCounter][ElementsCounter].mousedown(function() {
                    if (!$(this).attr('data-ad-check-box-checked') && !$(this).attr('data-ad-check-box-disabled')) {
                        CheckBoxGroup[ElementCounter].animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXClick + "px " + ElementsOptions[ElementCounter].ShadowOuterYClick + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurClick + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadClick + "px rgba(" + ROuterClick[ElementCounter] + ", " + GOuterClick[ElementCounter] + ", " + BOuterClick[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaClick + ")"
                        }, ElementsOptions[ElementCounter].AnimationSpeed);

                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow").stop(true).animate({
                            "opacity"                                           : 0
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").stop(true).animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorClick
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Click'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorClick : Icon[ElementCounter][ElementsCounter]['Colors']['Click']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorClick
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBox[ElementCounter][ElementsCounter].stop(true).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorClick,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorClick,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorClick,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorClick
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                    }
                    else if ($(this).attr('data-ad-check-box-checked') && !$(this).attr('data-ad-check-box-disabled')) {
                        CheckBoxGroup[ElementCounter].animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterYNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadNormal + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterNormal[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaNormal + ")"
                        }, ElementsOptions[ElementCounter].AnimationSpeed);
                    }
                });
                CheckBox[ElementCounter][ElementsCounter].mouseup(function() {
                    if (!$(this).attr('data-ad-check-box-checked') && !$(this).attr('data-ad-check-box-disabled')) {
                        CheckBoxGroup[ElementCounter].animate({
                            "boxShadow"                                         : ElementsOptions[ElementCounter].ShadowOuterXNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterYNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterBlurNormal + "px " + ElementsOptions[ElementCounter].ShadowOuterSpreadNormal + "px rgba(" + ROuterNormal[ElementCounter] + ", " + GOuterNormal[ElementCounter] + ", " + BOuterNormal[ElementCounter] + ", " + ElementsOptions[ElementCounter].ShadowOuterAlphaNormal + ")"
                        }, ElementsOptions[ElementCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 0
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").stop(true).animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorActive
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Colors'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Colors']['Active'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorActive : Icon[ElementCounter][ElementsCounter]['Colors']['Active']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").stop(true).animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorActive
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBox[ElementCounter][ElementsCounter].stop(true).animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorActive,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorActive,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorActive,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorActive
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).attr("data-ad-check-box-checked", "checked");
                        CheckBoxGroup[ElementCounter].find("input[data-ad-check-box-native-id=" + $(this).attr("data-ad-check-box-id") + "]").prop("checked", true);
                    }
                    else if ($(this).attr('data-ad-check-box-checked') && !$(this).attr('data-ad-check-box-disabled')) {
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 1
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Normal'] !== undefined) {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Normal']['Color'] === undefined ? ElementsOptions[ElementCounter][ElementsCounter].ColorNormal : Icon[ElementCounter][ElementsCounter]['Normal']['Color']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                $(this).find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBox [ElementCounter][ElementsCounter].animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorNormal,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorNormal,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorNormal,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorNormal
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        $(this).removeAttr("data-ad-check-box-checked");
                        CheckBoxGroup[ElementCounter].find("input[data-ad-check-box-native-id=" + $(this).attr("data-ad-check-box-id") + "]").prop("checked", false);
                    }
                });
            },
            ListenAttrChange                                                    : function (ElementCounter, ElementsCounter) {
                NativeCheckBox[ElementCounter][ElementsCounter].attrchange({
                    trackValues                                                 : true,
                    callback                                                    : function (event) {
                        if (event.attributeName === "disabled" && event.newValue === undefined) {
                            $.PreventCheckBox                                   = true;
                            PlugIn.Methods.Enable(ElementCounter, ElementsCounter);
                            setTimeout(function() {
                                $.PreventCheckBox                               = false;
                            }, ElementsOptions[ElementCounter].AnimationSpeed + 100);
                        }
                        else if (event.attributeName === "disabled" && event.newValue === "disabled") {
                            $.PreventCheckBox                                   = true;
                            PlugIn.Methods.Disable(ElementCounter, ElementsCounter);
                            setTimeout(function() {
                                $.PreventCheckBox                               = false;
                            }, ElementsOptions[ElementCounter].AnimationSpeed + 100);
                        }
                    }
                });
            },
            Disable                                                             : function(ElementCounter, ElementsCounter) {
                CheckBox[ElementCounter][ElementsCounter].attr("data-ad-check-box-disabled", "disabled");
                if(CheckBox[ElementCounter][ElementsCounter].attr("data-ad-check-box-checked")) {
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").animate({
                        "opacity"                                               : 0
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").animate({
                        "opacity"                                               : ElementsOptions[ElementCounter].OpacityDisabled
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                        "opacity"                                               : ElementsOptions[ElementCounter].OpacityDisabled
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "cursor"                                                : ElementsOptions[ElementCounter].CursorDisabled
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "cursor"                                                : ElementsOptions[ElementCounter].CursorDisabled
                    });
                }
                else {
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").animate({
                        "opacity"                                               : 0
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").animate({
                        "opacity"                                               : ElementsOptions[ElementCounter].OpacityDisabled
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                        "opacity"                                               : ElementsOptions[ElementCounter].OpacityDisabled
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "cursor"                                                : ElementsOptions[ElementCounter].CursorDisabled
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "cursor"                                                : ElementsOptions[ElementCounter].CursorDisabled
                    });
                }
            },
            Enable                                                              : function(ElementCounter, ElementsCounter) {
                CheckBox[ElementCounter][ElementsCounter].removeAttr("data-ad-check-box-disabled");
                if(CheckBox[ElementCounter][ElementsCounter].attr("data-ad-check-box-checked")) {
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient").animate({
                        "opacity"                                               : 0
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient").animate({
                        "opacity"                                               : 1
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                        "opacity"                                               : 1
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "cursor"                                                : "pointer"
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "cursor"                                                : "pointer"
                    });
                }
                else {
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonActiveGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonHoverGradient").animate({
                        "opacity"                                               : 1
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").animate({
                        "opacity"                                               : 1
                    }, ElementsOptions[ElementCounter].AnimationSpeed);

                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").animate({
                        "opacity"                                               : 1
                    }, ElementsOptions[ElementCounter].AnimationSpeed);
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonText").css({
                        "cursor"                                                : "pointer"
                    });
                    CheckBox[ElementCounter][ElementsCounter].find("." + ElementsOptions[ElementCounter].ClassPrefix + "ButtonNormalGradient").css({
                        "cursor"                                                : "pointer"
                    });
                }
            },
            ExternalChange                                                      : function (ElementCounter, ElementsCounter) {
                CheckBoxGroup[ElementCounter].find("[data-ad-check-box-native-id=" + ElementsCounter + "]").click(function() {
                    if (!CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").attr("data-ad-check-box-checked")) {
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorActive,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorActive,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorActive,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorActive
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 0
                        }, {
                            duration: ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed,
                            queue                                               : false
                        });
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorActive
                        }, {
                            duration: ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed,
                            queue                                               : false
                        });
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Active'] !== undefined) {
                                CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Active']['Color'] === undefined ? ElementsOptions[ElementCounter].ColorActive : Icon[ElementCounter][ElementsCounter]['Active']['Color']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorActive
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").attr("data-ad-check-box-checked", "checked");
                    }
                    else {
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").animate({
                            "borderTopColor"                                    : ElementsOptions[ElementCounter][ElementsCounter].BorderTopColorNormal,
                            "borderBottomColor"                                 : ElementsOptions[ElementCounter][ElementsCounter].BorderBottomColorNormal,
                            "borderLeftColor"                                   : ElementsOptions[ElementCounter][ElementsCounter].BorderLeftColorNormal,
                            "borderRightColor"                                  : ElementsOptions[ElementCounter][ElementsCounter].BorderRightColorNormal
                        }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);

                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalGradient, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonClickShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonHoverShadow, ." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonNormalShadow").animate({
                            "opacity"                                           : 1
                        }, {
                            duration: ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed,
                            queue                                               : false
                        });
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").animate({
                            "color"                                             : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                        }, {
                            duration: ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed,
                            queue                                               : false
                        });
                        if (Icon[ElementCounter][ElementsCounter]) {
                            if (Icon[ElementCounter][ElementsCounter]['Normal'] !== undefined) {
                                CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : Icon[ElementCounter][ElementsCounter]['Normal']['Color'] === undefined ? ElementsOptions[ElementCounter].ColorNormal : Icon[ElementCounter][ElementsCounter]['Normal']['Color']
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                            else {
                                CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "ButtonText").find("." + ElementsOptions[ElementCounter][ElementsCounter].ClassPrefix + "Icon").animate({
                                    "color"                                     : ElementsOptions[ElementCounter][ElementsCounter].ColorNormal
                                }, ElementsOptions[ElementCounter][ElementsCounter].AnimationSpeed);
                            }
                        }
                        CheckBoxGroup[ElementCounter].find("[data-ad-check-box-id=" + ElementsCounter + "]").removeAttr("data-ad-check-box-checked");
                    }
                });
            },
            WindowResize: function(ElementCounter) {
                $(window).on("resize", function() {
                    if(ElementsOptions[ElementCounter].ForceSingleSeparate === true) {
                        if (CheckBoxGroup[ElementCounter].parent().width() <= WidthAll[ElementCounter] + ElementsOptions[ElementCounter].BorderLeftSize + ElementsOptions[ElementCounter].BorderRightSize - ( (Counter[ElementCounter] - 1) * ElementsOptions[ElementCounter].BorderRightSize ) && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Horizontal") {
                            CurrentLayout[ElementCounter]                       = "Vertical";
                            PlugIn.Methods.Vertical(ElementCounter);
                        }
                        else if (CheckBoxGroup[ElementCounter].parent().width() >= WidthAll[ElementCounter] + ElementsOptions[ElementCounter].BorderLeftSize + ElementsOptions[ElementCounter].BorderRightSize - ( (Counter[ElementCounter] - 1) * ElementsOptions[ElementCounter].BorderRightSize ) && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Vertical") {
                            CurrentLayout[ElementCounter]                       = "Horizontal";
                            PlugIn.Methods.Horizontal(ElementCounter);
                        }
                        function AfterResizing(){
                            if (CheckBoxGroup[ElementCounter].parent().width() <= WidthAll[ElementCounter] - ElementsOptions[ElementCounter].BorderLeftSize + ElementsOptions[ElementCounter].BorderRightSize - ( (Counter[ElementCounter] - 1) * ElementsOptions[ElementCounter].BorderRightSize ) && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Horizontal") {
                                CurrentLayout[ElementCounter]                   = "Vertical";
                                PlugIn.Methods.Vertical(ElementCounter);
                            }
                            else if (CheckBoxGroup[ElementCounter].parent().width() >= WidthAll[ElementCounter] - ElementsOptions[ElementCounter].BorderLeftSize + ElementsOptions[ElementCounter].BorderRightSize - ( (Counter[ElementCounter] - 1) * ElementsOptions[ElementCounter].BorderRightSize ) && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Vertical") {
                                CurrentLayout[ElementCounter]                   = "Horizontal";
                                PlugIn.Methods.Horizontal(ElementCounter);
                            }
                        }
                        clearTimeout(ResizeTimer);
                        ResizeTimer                                             = setTimeout(AfterResizing(), 100);
                    }
                    else {
                        if (CheckBoxGroup[ElementCounter].parent().width() <= WidthAll[ElementCounter] && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Horizontal") {
                            CurrentLayout[ElementCounter]                       = "Vertical";
                            PlugIn.Methods.Vertical(ElementCounter);
                        }
                        if (CheckBoxGroup[ElementCounter].parent().width() >= WidthAll[ElementCounter] && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Vertical") {
                            CurrentLayout[ElementCounter]                       = "Horizontal";
                            PlugIn.Methods.Horizontal(ElementCounter);
                        }
                        function AfterResizing(){
                            if (CheckBoxGroup[ElementCounter].parent().width() <= WidthAll[ElementCounter] && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Horizontal") {
                                CurrentLayout[ElementCounter]                   = "Vertical";
                                PlugIn.Methods.Vertical(ElementCounter);
                            }
                            if (CheckBoxGroup[ElementCounter].parent().width() >= WidthAll[ElementCounter] && ElementsOptions[ElementCounter].Layout === "Horizontal" && CurrentLayout[ElementCounter] === "Vertical") {
                                CurrentLayout[ElementCounter]                   = "Horizontal";
                                PlugIn.Methods.Horizontal(ElementCounter);
                            }
                        }
                        clearTimeout(ResizeTimer);
                        ResizeTimer                                             = setTimeout(AfterResizing(), 100);
                    }
                });
            },
            DataToOptions: function(String) {
                return eval("( {" + String + "} )");
            },
            ConvertHex: function(String) {
                HEX                                                             = String.replace('#', '');
                HEXR                                                            = parseInt(HEX.substring(0, 2), 16);
                HEXG                                                            = parseInt(HEX.substring(2, 4), 16);
                HEXB                                                            = parseInt(HEX.substring(4, 6), 16);
                HEXConvertResult                                                = [HEXR, HEXG, HEXB];
                return HEXConvertResult;
            }
        };
        PlugIn.PublicMethods                                                    = {};
        PlugIn.Methods.Initialize();
    };
    $.ns.ArtDesignCheckBox.DefaultOptions                                          = {
        /*Base*/
        ClassPrefix                                                             : "ChB_",
        Layout                                                                  : "Horizontal", // Vertical
        Height                                                                  : 30,
        PaddingLeft                                                             : 30,
        PaddingRight                                                            : 30,
        Cursor                                                                  : "pointer",
        AnimationSpeed                                                          : 250,
        SpaceSeparate                                                           : 0, // if != 0 => ignore ForceSingleSeparate
        ForceSingleSeparate                                                     : true,
        /*Base*/
        /*Disabled*/
        CursorDisabled                                                          : "not-allowed",
        OpacityDisabled                                                         : 0.6,
        /*Disabled*/
        /*Icons*/
        IconPosition                                                            : "Left",
        IconSize                                                                : 13,
        IconPaddingLeft                                                         : 5,
        IconPaddingRight                                                        : 5,
        /*Icons*/
        /*Fonts*/
        FontFamily                                                              : "sans-serif",
        FontSize                                                                : 11,
        FontWeight                                                              : "bold",
        FontStyle                                                               : "normal",
        FontLineHeight                                                          : 2.6,
        /*Fonts*/
        /*Border*/
        BorderStyle                                                             : "solid",
        BorderTopSize                                                           : 1,
        BorderBottomSize                                                        : 1,
        BorderLeftSize                                                          : 1,
        BorderRightSize                                                         : 1,
        BorderTopLeftRadiusOuter                                                : 5,
        BorderTopRightRadiusOuter                                               : 5,
        BorderBottomLeftRadiusOuter                                             : 5,
        BorderBottomRightRadiusOuter                                            : 5,
        BorderTopLeftRadiusInner                                                : 4,
        BorderTopRightRadiusInner                                               : 4,
        BorderBottomLeftRadiusInner                                             : 4,
        BorderBottomRightRadiusInner                                            : 4,
        /*Border*/
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
        /*Normal*/
        BackgroundColorNormal                                                   : "#E6E6E6",
        ColorNormal                                                             : "#8E8E8E",
        ShadowInnerXNormal                                                      : 0,
        ShadowInnerYNormal                                                      : 1,
        ShadowInnerBlurNormal                                                   : 0,
        ShadowInnerSpreadNormal                                                 : 0,
        ShadowInnerColorNormal                                                  : "#FFFFFF",
        ShadowInnerAlphaNormal                                                  : 1,
        GradientStartColorNormal                                                : "#FDFDFD",
        GradientEndColorNormal                                                  : "#E3E3E3",
        BorderTopColorNormal                                                    : "#A6A6A6",
        BorderBottomColorNormal                                                 : "#A6A6A6",
        BorderLeftColorNormal                                                   : "#A6A6A6",
        BorderRightColorNormal                                                  : "#A6A6A6",
        /*Normal*/
        /*Hover*/
        BackgroundColorHover                                                    : "#E6E6E6",
        ColorHover                                                              : "#8E8E8E",
        ShadowInnerXHover                                                       : 0,
        ShadowInnerYHover                                                       : 1,
        ShadowInnerBlurHover                                                    : 0,
        ShadowInnerSpreadHover                                                  : 0,
        ShadowInnerColorHover                                                   : "#FFFFFF",
        ShadowInnerAlphaHover                                                   : 0.6,
        GradientStartColorHover                                                 : "#E3E3E3",
        GradientEndColorHover                                                   : "#E3E3E3",
        BorderTopColorHover                                                     : "#A6A6A6",
        BorderBottomColorHover                                                  : "#A6A6A6",
        BorderLeftColorHover                                                    : "#A6A6A6",
        BorderRightColorHover                                                   : "#A6A6A6",
        /*Hover*/
        /*Click*/
        BackgroundColorClick                                                    : "#E6E6E6",
        ColorClick                                                              : "#8E8E8E",
        ShadowInnerXClick                                                       : 0,
        ShadowInnerYClick                                                       : 1,
        ShadowInnerBlurClick                                                    : 3,
        ShadowInnerSpreadClick                                                  : 0,
        ShadowInnerColorClick                                                   : "#000000",
        ShadowInnerAlphaClick                                                   : 0.1,
        GradientStartColorClick                                                 : "#CDCDCD",
        GradientEndColorClick                                                   : "#E3E3E3",
        BorderTopColorClick                                                     : "#A6A6A6",
        BorderBottomColorClick                                                  : "#A6A6A6",
        BorderLeftColorClick                                                    : "#A6A6A6",
        BorderRightColorClick                                                   : "#A6A6A6",
        /*Click*/
        /*Active*/
        BackgroundColorActive                                                   : "#E6E6E6",
        ColorActive                                                             : "#8E8E8E",
        ShadowInnerXActive                                                      : 0,
        ShadowInnerYActive                                                      : 1,
        ShadowInnerBlurActive                                                   : 3,
        ShadowInnerSpreadActive                                                 : 0,
        ShadowInnerColorActive                                                  : "#000000",
        ShadowInnerAlphaActive                                                  : 0.1,
        GradientStartColorActive                                                : "#CDCDCD",
        GradientEndColorActive                                                  : "#E3E3E3",
        BorderTopColorActive                                                    : "#A6A6A6",
        BorderBottomColorActive                                                 : "#A6A6A6",
        BorderLeftColorActive                                                   : "#A6A6A6",
        BorderRightColorActive                                                  : "#A6A6A6"
        /*Active*/
    };
    $.fn.ArtDesignCheckBox                                                      = function(Options) {
        var ArtDesignCheckBox                                                   = (new $.ns.ArtDesignCheckBox(this, Options));
        return ArtDesignCheckBox.PublicMethods;
    };
})(jQuery, window);