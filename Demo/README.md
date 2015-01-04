ArtDesignUI can be initialized with two methods:

1. First method:

    Include "ArtDesignUI.js?BasePath=Path/To/ArtDesignUI/Folder/" with param "BasePath" (path to ArtDesignUI folder):
    
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUI.js?BasePath=ArtDesignUI/"></script>
    
    ArtDesignUI.js automatically include all the necessary files to run PlugIns.
    
    Then start ArtDesignUI PlugIns with function window.ArtDesignUI.Ready():
    
    window.ArtDesignUI.Ready(function() {
	$("body").ArtDesignButton();
	$("body").ArtDesignInput();
	$("body").ArtDesignTextArea();
	$("body").ArtDesignRadio();
	$("body").ArtDesignCheckBox();
	$("body").ArtDesignSelect();
	$("body").ArtDesignTabs();
	$("body").ArtDesignLayout();
	$("body").ArtDesignIcons();
});

    !!!This method not work with local files, work only on server!!!
    
    Demo for first method: /index.html
    
2. Second method

    include all the necessary files to run PlugIns:
    
    <link rel="stylesheet" href="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.min.css">
    <link rel="stylesheet" href="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.min.css">
    <script type="text/javascript" src="ArtDesignUI/jQuery/jQuery.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/AttrChange/AttrChange.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/AutoSize/AutoSize.min.js"></script>
    <script type="text/javascript" src=".ArtDesignUI/ExternalPlugIns/Browser/Browser.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/ColorAnimation/ColorAnimation.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/jScrollPane/jScrollPane.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/MaskIt/MaskIt.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/MouseWheel/MouseWheel.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/ShadowAnimation/ShadowAnimation.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/WaterMark/WaterMark.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignButton/ArtDesignButton.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignCheckBox/ArtDesignCheckBox.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIconsCode.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignInput/ArtDesignInput.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignLayout/ArtDesignLayout.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignRadio/ArtDesignRadio.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignSelect/ArtDesignSelect.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignTabs/ArtDesignTabs.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignTextArea/ArtDesignTextArea.min.js"></script>
    <script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/Settings/ArtDesignUISettings.min.js"></script>
    
    Then start PlugIns with $(document).ready():
    
    $(document).ready(function() {
       $("body").ArtDesignButton();
       $("body").ArtDesignInput();
       $("body").ArtDesignTextArea();
       $("body").ArtDesignRadio();
       $("body").ArtDesignCheckBox();
       $("body").ArtDesignSelect();
       $("body").ArtDesignTabs();
       $("body").ArtDesignLayout();
       $("body").ArtDesignIcons();
    });
    
    This method work with local files and on server
    
    
    
    When ArtDesignUI PlugIns are initialized, set-up web elements. 
    
    FULL INSTRUCTIONS - www.artdesign-ui.com
    
    
            