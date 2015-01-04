<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>ArtDesignSlider</title>
        <link rel="stylesheet" href="CSS/CSS.css">

        <script type="text/javascript" src="../ArtDesignUI/ArtDesignUI.js?BasePath=../ArtDesignUI/"></script>

    </head>
    <body>
        <div id="Content">

            <div id="Logo"></div>
            <div id="Info">More examples with instruction, Full documentation and Skins<br><a href="http://www.artdesign-ui.com" target="_blank">www.artdesign-ui.com</a></div>

            <div class="SpaceVertical1">
                <p class="Bold SpaceVerticalVerySmall"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignButton #1</p>
                <div class="GroupExamples SpaceVertical3">
                    <button data-plugin-ad-button='ad-button'>Button</button>
                    <button data-plugin-ad-button='ad-button' data-ad-button-icon="'Icon': 'icon-info-3'">Button with icon</button>
                    <button data-plugin-ad-button='ad-button' data-ad-button-width="300">Button with custom width (300px)</button>
                </div>
            </div>
            <div class="SpaceVertical1">
                <p class="Bold SpaceVerticalVerySmall"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignInput #2</p>
                <div class="GroupExamples SpaceVertical3">
                    <input type="text" data-plugin-ad-input='ad-input' data-ad-input-watermark="Enter your text:">
                </div>
            </div>
            <div class="SpaceVertical1">
                <p class="Bold SpaceVerticalVerySmall"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignTextArea #3</p>
                <div class="GroupExamples SpaceVertical3">
                    <textarea rows="4" cols="50" data-plugin-ad-text-area='ad-text-area' data-ad-text-area-watermark="Enter your text:"></textarea>
                </div>
            </div>
            <div class="SpaceVertical1">
                <p class="Bold"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignRadio #4</p>
                <div class="GroupExamples SpaceVertical3">
                    <div data-plugin-ad-radio='ad-radio'>
                        <input type="radio" name="Radio" id="Radio1" value="Radio1" data-ad-radio-label="Radio" checked="checked"/>
                        <input type="radio" name="Radio" id="Radio2" value="Radio2" data-ad-radio-icon="'Icon': 'icon-info-3'" data-ad-radio-label="Radio with icon"/>
                        <input type="radio" name="Radio" id="Radio3" value="Radio3" data-ad-radio-width="300" data-ad-radio-label="Radio with custom width (300px)"/>
                    </div>
                </div>
            </div>
            <div class="SpaceVertical1">
                <p class="Bold"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignCheckBox #5</p>
                <div class="GroupExamples SpaceVertical3">
                    <div data-plugin-ad-check-box='ad-check-box'>
                        <input type="checkbox" name="CheckBox" value="CheckBox1" data-ad-check-box-label="CheckBox" checked="checked"/>
                        <input type="checkbox" name="CheckBox" value="CheckBox2" data-ad-check-box-label="CheckBox with icon" data-ad-check-box-icon="'Icon': 'icon-info-3'"/>
                        <input type="checkbox" name="CheckBox" value="CheckBox3" data-ad-check-box-label="CheckBox with custom width (300px)" data-ad-check-box-width="300"/>
                    </div>
                </div>
            </div>
            <div class="SpaceVertical1">
                <p class="Bold"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignSelect #6</p>
                <div class="GroupExamples SpaceVertical3">
                    <select data-plugin-ad-select='ad-select' data-ad-select-icon="icon-angle-double-down">
                        <option value="Home" data-ad-select-icon="icon-home">Home</option>
                        <option value="Download" data-ad-select-icon="icon-download">Download</option>
                        <option value="Link" data-ad-select-icon="icon-link">Link</option>
                        <option value="Photo" data-ad-select-icon="icon-camera">Photo</option>
                        <option value="Add" data-ad-select-icon="icon-plus-circled">Add</option>
                        <option value="Delete" data-ad-select-icon="icon-minus-circled">Delete</option>
                        <option value="Cancel" data-ad-select-icon="icon-cancel-circle">Cancel</option>
                        <option value="Comment" data-ad-select-icon="icon-comment">Comment</option>
                        <option value="Folder" data-ad-select-icon="icon-folder-open">Folder</option>
                        <option value="Desktop" data-ad-select-icon="icon-desktop">Desktop</option>
                        <option value="Tablet" data-ad-select-icon="icon-tablet">Tablet</option>
                        <option value="Mobile" data-ad-select-icon="icon-mobile">Mobile</option>
                    </select>
                </div>
            </div>
            <div class="SpaceVertical1">
                <p class="Bold"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignTabs #7</p>
                <div class="GroupExamples SpaceVertical3">
                    <div data-plugin-ad-tabs="ad-tabs" class="Example">
                        <div>
                            <div data-ad-tabs-active="active">Tab</div>
                            <div data-ad-tabs-icon="'Icon': 'icon-info-3'">Tab with icon</div>
                            <div data-ad-tabs-width="300">Tab with custom width (300px)</div>

                        </div>
                        <div>
                            <div>Content1<br>Content1<br>Content1<br>Content1<br>Content1<br>Content1<br>Content1<br>Content1<br>Content1</div>
                            <div>Content2<br>Content2<br>Content2</div>
                            <div>Content3<br>Content3<br>Content3<br>Content3<br>Content3</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="SpaceVertical2">
                <p class="Bold"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignLayout #8</p>
                <div class="GroupExamples SpaceVertical3">
                    <div class="MainLayout" data-plugin-ad-layout="ad-layout" data-ad-layout-max-width="'max-width': 1200, 'unit': 'px'" data-ad-layout-min-width="'min-width': 100, 'unit': 'px'" data-ad-layout-width-to-full="'width-to-full': 420, 'unit': 'px'">
                        <div class="LeftLayout" data-ad-layout-children="children" data-ad-layout-max-width="'max-width': 200, 'unit': 'px'" data-ad-layout-min-width="'min-width': 200, 'unit': 'px'" data-ad-layout-margin="'margin-top': 0, 'margin-bottom': 20, 'margin-left': 0, 'margin-right': 20">
                            Main Panel Layout:<br>
                            max-width: 1200px;<br>
                            Resize when width = 420px<br><br>
                            Left Panel Layout:<br>
                            min-width: 200px;<br>
                            max-width: 200px;<br>
                            margin-right: 20px
                        </div>
                        <div class="RightLayout" data-ad-layout-children="children" data-ad-layout-max-width="'max-width': 980, 'unit': 'px'" data-ad-layout-min-width="'min-width': 200, 'unit': 'px'" data-ad-layout-margin="'margin-top': 0, 'margin-bottom': 0, 'margin-left': 0, 'margin-right': 0">
                            Main Panel Layout:<br>
                            max-width: 1200px;<br>
                            Resize when width = 420px<br><br>
                            Right Panel Layout:<br>
                            min-width: 200px;<br>
                            max-width: 980px;
                        </div>
                    </div>
                </div>
            </div>
            <div class="SpaceVertical4">
                <p class="Bold"><span class="Icon IconSmall icon-angle-double-right"></span>ArtDesignIcons #9</p>
                <div class="GroupExamples SpaceVertical3">
                    <p class="Example">
                        <span class="Icon IconSmall icon-info-3 Example"></span>
                        <span class="Icon IconNormal icon-info-3 Example"></span>
                        <span class="Icon IconLarge icon-info-3 Example"></span>
                        2122 font icons
                    </p>
                </div>
                <div>
            </div>



        </div>
        <script type="text/javascript">
            ArtDesignUI.Ready(function() {
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
        </script>
    </body>
</html>