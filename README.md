#ArtDesignUI

##jQuery PlugIns for responsive web elements with skin support

- **ArtDesignUI** (7127 lines code) is a jQuery library for style control web elements (`button`, `input`, `textarea`, `radio`, `checkbox`, `tab`, `layout`, `icons`) that include 9 jQuery PlugIns (All In One) - **ArtDesignButton**, **ArtDesignInput**, **ArtDesignTextArea**, **ArtDesignRadio**, **ArtDesignCheckBox**, **ArtDesignSelect**, **ArtDesignTabs**, **ArtDesignLayout**, **ArtDesignIcons**
- All elements are responsive
- Skin support
- Class prefix to prevent conflict with classes from other CSS files
- Full style control with JS - no need CSS: width, height, margin, padding, border, gradient, shadow, animation, icons, fonts, colors etc
- Overwrite options and Multiple overwrite options
- Multiple instances


![ArtDesignUI](http://www.artdesign-ui.com/Logo/ArtDesignUI.jpg)


**Full instructions, Examples, Skins and Download - <a href="http://www.artdesign-ui.com">www.artdesign-ui.com</a>**


###Instruction

>####Load files

#####First method

>Load `ArtDesignUI/ArtDesignUI.js?BasePath=ArtDesignUI/` with param BasePath were `BasePath` is path to folder `ArtDesignUI`.
```html
<script type="text/javascript" src="ArtDesignUI/ArtDesignUI.js?BasePath=ArtDesignUI/"></script>
```
Then initialize PlugIns with function `window.ArtDesignUI.Ready()`.
```js
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
```

#####Second method

>Load all the necessary files to run PlugIns.
```html
<link rel="stylesheet" href="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.css">
<link rel="stylesheet" href="ArtDesignUI/ArtDesignUIPlugIns/ExternalPlugIns/JScrollPane/JScrollPane.css">
<script type="text/javascript" src="ArtDesignUI/JQuery/JQuery.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/Browser/Browser.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/ShadowAnimation/ShadowAnimation.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/ColorAnimation/ColorAnimation.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/WaterMark/WaterMark.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/Mask/Mask.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/JScrollPane/MouseWheel.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/JScrollPane/JScrollPane.js"></script>
<script type="text/javascript" src="ArtDesignUI/ExternalPlugIns/AutoSize/AutoSize.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/Settings/Settings.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIconsCode.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignIcons/ArtDesignIcons.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignButton/ArtDesignButton.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignInput/ArtDesignInput.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignTextArea/ArtDesignTextArea.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignRadio/ArtDesignRadio.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignCheckBox/ArtDesignCheckBox.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignSelect/ArtDesignSelect.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignTabs/ArtDesignTabs.js"></script>
<script type="text/javascript" src="ArtDesignUI/ArtDesignUIPlugIns/ArtDesignLayout/ArtDesignLayout.js"></script>
```

Then initialize PlugIns.

```js
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
}
```

####SetUp web elements

>**ArtDesignButton**
```html
<a href="#" data-plugin-ad-button="ad-button">Button</a>
<--! or -->
<button data-plugin-ad-button="ad-button">Button</button>
```

>**ArtDesignInput**
```html
<input type="text" data-plugin-ad-input="ad-input">
```

>**ArtDesignTextArea**
```html
<textarea rows="4" cols="50" data-plugin-ad-text-area="ad-text-area"></textarea>
```

>**ArtDesignRadio**
```html
<div data-plugin-ad-radio="ad-radio">
	<input type="radio" name="Radio" id="Radio1" value="Radio1" data-ad-radio-label="Radio 1" checked="checked"/>
	<input type="radio" name="Radio" id="Radio2" value="Radio2" data-ad-radio-label="Radio 2"/>
	<input type="radio" name="Radio" id="Radio3" value="Radio3" data-ad-radio-label="Radio 3"/>
</div>
```

>**ArtDesignCheckBox**
```html
<div data-plugin-ad-check-box="ad-check-box">
	<input type="checkbox" name="CheckBox" id="CheckBox1" value="CheckBox1" data-ad-check-box-label="CheckBox 1" checked="checked"/>
	<input type="checkbox" name="CheckBox" id="CheckBox2" value="CheckBox2" data-ad-check-box-label="CheckBox 2"/>
	<input type="checkbox" name="CheckBox" id="CheckBox3" value="CheckBox3" data-ad-check-box-label="CheckBox 3"/>
</div>
```

>**ArtDesignSelect**
```html
<select data-plugin-ad-select="ad-select">
	<option value="Select1" selected="selected">Select 1</option>
	<option value="Select2">Select 2</option>
	<option value="Select3">Select 3</option>
</select>
```

>**ArtDesignTabs**
```html
<div data-plugin-ad-tabs="ad-tabs" class="Example">
	<div>
		<div>Tab 1</div>
		<div>Tab 2</div>
		<div>Tab 3</div>
	</div>
	<div>
		<div>Content 1</div>
		<div>Content 2</div>
		<div>Content 3</div>
	</div>
</div>
```

>**ArtDesignIcons**
```html
<span class="icon-NAME-ICON"></span>
```

## History
* 2015-01-03			v1.0.0			Initial release.
