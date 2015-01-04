window.ArtDesignUI = {
    Ready                                                           : function (Execute) {
        if(window.ArtDesignUIStartInclude !== true) {
            if ( document.location.protocol === 'file:' ) {
                alert('ArtDesignUI do not work on files!\nPlease upload it to a server.');
            }
            else {
                window.ArtDesignUI.RequiredResources([
                    /*CSS*/
                    "ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.min.css",
                    "ExternalPlugIns/jScrollPane/jScrollPane.min.css",
                    /*CSS*/
                    /*ExternalPlugIns*/
                    "ExternalPlugIns/AttrChange/AttrChange.min.js",
                    "ExternalPlugIns/AutoSize/AutoSize.min.js",
                    "ExternalPlugIns/Browser/Browser.min.js",
                    "ExternalPlugIns/ColorAnimation/ColorAnimation.min.js",
                    "ExternalPlugIns/jScrollPane/jScrollPane.min.js",
                    "ExternalPlugIns/MaskIt/MaskIt.min.js",
                    "ExternalPlugIns/MouseWheel/MouseWheel.min.js",
                    "ExternalPlugIns/ShadowAnimation/ShadowAnimation.min.js",
                    "ExternalPlugIns/WaterMark/WaterMark.min.js",
                    /*ExternalPlugIns*/
                    /*ArtDesignUIPlugIns*/
                    "ArtDesignUIPlugIns/ArtDesignButton/ArtDesignButton.min.js",
                    "ArtDesignUIPlugIns/ArtDesignCheckBox/ArtDesignCheckBox.min.js",
                    "ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIconsCode.min.js",
                    "ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.min.js",
                    "ArtDesignUIPlugIns/ArtDesignInput/ArtDesignInput.js",
                    "ArtDesignUIPlugIns/ArtDesignLayout/ArtDesignLayout.min.js",
                    "ArtDesignUIPlugIns/ArtDesignRadio/ArtDesignRadio.min.js",
                    "ArtDesignUIPlugIns/ArtDesignSelect/ArtDesignSelect.min.js",
                    "ArtDesignUIPlugIns/ArtDesignTabs/ArtDesignTabs.min.js",
                    "ArtDesignUIPlugIns/ArtDesignTextArea/ArtDesignTextArea.min.js",
                    "ArtDesignUIPlugIns/Settings/ArtDesignUISettings.min.js" //put all styles in one file to prevent lose declared styles
                    /*ArtDesignUIPlugIns*/
                ]);
            }

        }
        var CheckArtDesignUI                                        = function() {
            if(window.ArtDesignUIReady !== true){
                return false;
            }
            else{
                clearTimeout(Interval);
                ArtDesignUIIsReady(Execute);
            }
        };
        var Interval                                                = setInterval(CheckArtDesignUI, 100);
        var ArtDesignUIIsReady                                      = function(Execute) {
            Execute();
        }
    },
    RequiredResources                                               : function (Resources) {
        window.ArtDesignUIStartInclude                              = true;
        var Parameters                                              = window.ArtDesignUI.GetParams("ArtDesignUI.js");
        var BasePath                                                = Parameters["BasePath"];
        if(typeof(window.jQuery) === "undefined") {
            window.ArtDesignUI.LoadFiles(BasePath + "jQuery/jQuery.js");
        }
        var CheckJquery                                             = function() {
            if(typeof jQuery === "undefined"){
                return false;
            }
            else{
                clearTimeout(Interval);
                jQueryIsReady(Resources);
            }
        };
        var Interval                                                = setInterval(CheckJquery, 100);
        var jQueryIsReady                                           = function(Resources) {
            if(window.ArtDesignUI.IsArray(Resources)) {
                var CSS                                             = [];
                var JS                                              = [];
                for (var a = 0; a < Resources.length; a++) {
                    if (window.ArtDesignUI.GetExtension(Resources[a]) === "css") {
                        CSS.push(Resources[a]);
                    }
                    else if (window.ArtDesignUI.GetExtension(Resources[a]) === "js") {
                        JS.push(Resources[a]);
                    }
                }
                for (var b = 0; b < CSS.length; b++) {
                    window.ArtDesignUI.LoadFiles(BasePath + CSS[b]);
                }
                var TempLoadedJS                                    = 0;
                for (var c = 0; c < JS.length; c++) {
                    $.when(
                        $.getScript(BasePath + JS[c])
                    ).then(function () {
                        TempLoadedJS++;
                        if (TempLoadedJS === JS.length) {
                            window.ArtDesignUIReady  = true;
                        }
                    });
                }
            }
        };
    },
    GetParams                                                       : function (ScriptName) {
        var Scripts = document.getElementsByTagName("script");
        for(var i = 0; i < Scripts.length; i++) {
            if(Scripts[i].src.indexOf("/" + ScriptName) > -1) {
                var pa                                              = Scripts[i].src.split("?").pop().split("&");
                var p                                               = {};
                for(var j = 0; j < pa.length; j++) {
                    var kv                                          = pa[j].split("=");
                    p[kv[0]]                                        = kv[1];
                }
                return p;
            }
        }
        return {};
    },
    LoadFiles                                                       : function (FileName) {
        var TypeRef, FileType;
        FileType                                                    = window.ArtDesignUI.GetExtension(FileName);
        if (FileType === "js") {
            TypeRef                                                 = document.createElement('script');
            TypeRef.setAttribute("type", "text/javascript");
            TypeRef.setAttribute("src", FileName);
        }
        else if (FileType == "css") {
            TypeRef                                                 = document.createElement("link");
            TypeRef.setAttribute("rel", "stylesheet");
            TypeRef.setAttribute("type", "text/css");
            TypeRef.setAttribute("href", FileName);
        }
        if (typeof TypeRef !== "undefined") {
            document.getElementsByTagName("head")[0].appendChild(TypeRef);
        }
    },
    GetExtension                                                    : function(FileName) {
        var Extension =  FileName.split('.').pop();
        return Extension;
    },
    IsArray                                                         : function(Object) {
        if(Array.isArray(Object)) {
            return true;
        }
    }
};